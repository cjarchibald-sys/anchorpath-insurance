import { Resend } from 'resend'
import { CONSENT_TEXT, CONSENT_VERSION, OPTIONS } from '../src/content/consent.js'
import { normalizeLead, validateLead } from '../src/content/validateLead.js'

// Interim secure routing for "Schedule a Conversation" requests (FR-04/FR-05).
//
// Until the FMO-approved CRM is selected, each request is delivered by email to
// the agents' own mailboxes only (LEAD_TO_EMAIL), never to a shared or broad
// list. The email carries the consent evidence required by Section 11.4/11.5:
// the exact consent text and version, timestamp, source URL, and request data.
// Replace the delivery step with the CRM integration once approved.
//
// Required environment variables: RESEND_API_KEY, LEAD_TO_EMAIL (comma-separated),
// FROM_EMAIL (a verified sender on the AnchorPath domain).

const MIN_FILL_MS = 3000

const label = (name, value) => OPTIONS[name].find(([v]) => v === value)?.[1] ?? value

const escape = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {}

  // Spam controls: a hidden honeypot field and a minimum time to complete the
  // form. Bots get a success response so they do not retry.
  if (body.website || Number(body.elapsedMs) < MIN_FILL_MS) {
    console.info('schedule-request: filtered as spam')
    return res.status(200).json({ ok: true })
  }

  const lead = normalizeLead(body)
  const errors = validateLead(lead)
  if (Object.keys(errors).length) {
    return res.status(400).json({ error: 'Invalid request', fields: Object.keys(errors) })
  }
  if (body.consentVersion !== CONSENT_VERSION) {
    // The page the visitor saw is out of date; do not record consent to wording they did not see.
    return res.status(409).json({ error: 'Consent text has changed. Please reload the page.' })
  }

  const { RESEND_API_KEY, LEAD_TO_EMAIL, FROM_EMAIL } = process.env
  if (!RESEND_API_KEY || !LEAD_TO_EMAIL || !FROM_EMAIL) {
    console.error('schedule-request: lead routing is not configured')
    return res.status(503).json({ error: 'Lead routing is not configured' })
  }

  const receivedAt = new Date().toISOString()
  const sourceUrl = typeof body.sourceUrl === 'string' ? body.sourceUrl.slice(0, 500) : ''
  const ip = String(req.headers['x-forwarded-for'] ?? '').split(',')[0].trim()
  const zipNum = Number(lead.zip)
  const inCalifornia = zipNum >= 90000 && zipNum <= 96199

  const rows = [
    ['Name', `${lead.firstName.trim()} ${lead.lastName.trim()}`],
    ['Email', lead.email.trim() || '—'],
    ['Phone', lead.phone.trim() || '—'],
    ['Preferred contact', label('preferredContact', lead.preferredContact)],
    ['ZIP code', `${lead.zip}${inCalifornia ? '' : ' (appears to be outside California)'}`],
    ['Conversation type', label('meetingType', lead.meetingType)],
    ['Meeting preference', label('meetingPreference', lead.meetingPreference)],
    ['Situation', label('timing', lead.timing)],
    ['Best time', label('bestTime', lead.bestTime)],
    ['Notes', lead.notes.trim() || '—'],
  ]
  const evidence = [
    ['Received (UTC)', receivedAt],
    ['Source page', sourceUrl],
    ['Consent version', CONSENT_VERSION],
    ['Consent text shown', CONSENT_TEXT],
    ['Consent checkbox', 'Checked by visitor'],
    ['IP address', ip || 'unavailable'],
    ['User agent', String(req.headers['user-agent'] ?? '').slice(0, 300)],
  ]
  const table = (pairs) =>
    `<table cellpadding="6" style="border-collapse:collapse;font:15px/1.5 Arial,sans-serif">${pairs
      .map(([k, v]) => `<tr><th align="left" valign="top" style="padding-right:16px">${escape(k)}</th><td>${escape(v)}</td></tr>`)
      .join('')}</table>`

  try {
    const resend = new Resend(RESEND_API_KEY)
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: LEAD_TO_EMAIL.split(',').map((s) => s.trim()).filter(Boolean),
      subject: `New conversation request: ${label('meetingType', lead.meetingType)}`,
      html: `<h2 style="font-family:Arial,sans-serif">New conversation request</h2>${table(rows)}
        <p style="font:14px Arial,sans-serif">Respond within one business day. Do not reply with sensitive information by ordinary email.</p>
        <h3 style="font-family:Arial,sans-serif">Consent evidence (retain)</h3>${table(evidence)}`,
      text: [...rows, ['---', ''], ...evidence].map(([k, v]) => `${k}: ${v}`).join('\n'),
    })
    if (error) throw new Error(error.message)
    // Log only the provider's message id, never the visitor's details.
    console.info('schedule-request: delivered', data?.id ?? '')
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('schedule-request: delivery failed', err?.message)
    return res.status(502).json({ error: 'Delivery failed' })
  }
}
