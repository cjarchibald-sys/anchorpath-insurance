import { useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { track } from '@vercel/analytics'
import Seo from '../components/Seo'
import { AgentEmails, Callout, PageHero, TelLink } from '../components/ui'
import { TpmoDisclaimer } from '../components/SiteFooter'
import { site } from '../site.config'
import {
  CONSENT_TEXT, CONSENT_VERSION, NOTES_MAX, OPTIONS, SENSITIVE_WARNING, SOLICITATION_NOTICE,
} from '../content/consent'
import { validateLead } from '../content/validateLead'

const path = '/schedule/'
const blank = {
  firstName: '', lastName: '', email: '', phone: '', preferredContact: '', zip: '',
  meetingPreference: '', meetingType: '', timing: '', bestTime: '', notes: '', consent: false, website: '',
}

function Field({ id, label, error, hint, required, children }) {
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined
  return (
    <div className={`field${error ? ' has-error' : ''}`}>
      <label htmlFor={id}>
        {label} {required ? <span className="req">(required)</span> : <span className="opt">(optional)</span>}
      </label>
      {hint && <p id={`${id}-hint`} className="hint">{hint}</p>}
      {error && <p id={`${id}-error`} className="error-text">{error}</p>}
      {children({ id, 'aria-describedby': describedBy, 'aria-invalid': error ? true : undefined })}
    </div>
  )
}

function RadioGroup({ name, legend, options, descriptions, value, onChange, error, required }) {
  return (
    <fieldset id={name} tabIndex={-1} className={`field${error ? ' has-error' : ''}`} aria-describedby={error ? `${name}-error` : undefined}>
      <legend>
        {legend} {required && <span className="req">(required)</span>}
      </legend>
      {error && <p id={`${name}-error`} className="error-text">{error}</p>}
      <div className="radio-list">
        {options.map(([val, label]) => (
          <label key={val} className="radio">
            <input type="radio" name={name} value={val} checked={value === val} onChange={() => onChange(val)} />
            <span>
              {label}
              {descriptions?.[val] && <span className="radio-desc">{descriptions[val]}</span>}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

// Shown under each conversation type in the form, so the choice and its
// explanation (including the recording and Scope of Appointment notice) sit together.
const meetingTypeDescriptions = {
  basics:
    'A general, educational conversation about timing, terminology, and what information matters. If the conversation turns to specific plans, we will pause and complete the required steps first.',
  review:
    'A personal review of your needs and coverage options through organizations we are authorized to represent. Before the appointment, we complete required disclosures and a Scope of Appointment, and calls may be recorded as Medicare rules require.',
  'not-sure': 'We will help you decide when we talk.',
}

export default function Schedule() {
  const [params] = useSearchParams()
  const initialType = ['basics', 'review'].includes(params.get('type')) ? params.get('type') : ''
  const [form, setForm] = useState({ ...blank, meetingType: initialType })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | failure
  const startedAt = useRef(null)
  const summaryRef = useRef(null)
  const resultRef = useRef(null)

  function set(name, value) {
    if (!startedAt.current) {
      startedAt.current = Date.now()
      track('Form start', { form: 'schedule', version: CONSENT_VERSION })
    }
    setForm((f) => ({ ...f, [name]: value }))
  }

  const zipOutsideCa = /^\d{5}$/.test(form.zip) && !(Number(form.zip) >= 90000 && Number(form.zip) <= 96199)

  async function onSubmit(e) {
    e.preventDefault()
    const found = validateLead(form)
    setErrors(found)
    if (Object.keys(found).length) {
      track('Form error', { form: 'schedule', fields: Object.keys(found).length })
      requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }
    setStatus('submitting')
    try {
      const res = await fetch('/api/schedule-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          consentVersion: CONSENT_VERSION,
          sourceUrl: window.location.href,
          elapsedMs: startedAt.current ? Date.now() - startedAt.current : 0,
        }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('success')
      track('Form complete', { form: 'schedule', meetingType: form.meetingType })
    } catch {
      setStatus('failure')
      track('Form error', { form: 'schedule', fields: 0 })
    }
    requestAnimationFrame(() => resultRef.current?.focus())
  }

  const errorList = Object.entries(errors)

  return (
    <>
      <Seo
        path={path}
        title="Schedule a Conversation"
        description="Request a Medicare Basics Conversation or a Coverage Options Review with Chris or Helga, independent, California-licensed insurance agents. We respond within one business day."
      />
      <PageHero
        title="Schedule a Conversation"
        lede={`Tell us a little about where you are in the process. Chris or Helga will respond ${site.responseStandard} to find a time that works.`}
      />

      <div className="container schedule-grid">
        <div className="schedule-main">
          {status === 'success' ? (
            <div className="form-result success" role="status" tabIndex={-1} ref={resultRef}>
              <h2>Thank you. Your request was sent.</h2>
              <p>
                Chris or Helga will contact you {site.responseStandard} using your preferred contact method. If you
                need to reach us sooner, call <TelLink tel={site.phone.tel} cta="form-success">{site.phone.display}</TelLink>{' '}
                ({site.phoneHours}).
              </p>
              <p>
                While you wait, you might find the <Link to="/resources/#conversation-checklist">conversation checklist</Link>{' '}
                helpful.
              </p>
            </div>
          ) : (
            <form className="lead-form" onSubmit={onSubmit} noValidate aria-labelledby="form-title">
              <h2 id="form-title">Request a conversation</h2>
              <p className="solicitation">{SOLICITATION_NOTICE}</p>

              {errorList.length > 0 && (
                <div className="error-summary" role="alert" tabIndex={-1} ref={summaryRef}>
                  <p>Please fix {errorList.length === 1 ? 'this item' : `these ${errorList.length} items`}:</p>
                  <ul>
                    {errorList.map(([field, msg]) => (
                      <li key={field}><a href={`#${field}`}>{msg}</a></li>
                    ))}
                  </ul>
                </div>
              )}

              {status === 'failure' && (
                <div className="form-result failure" role="alert" tabIndex={-1} ref={resultRef}>
                  <p>
                    <strong>Your request could not be sent.</strong> Nothing was lost; please try again, or call us at{' '}
                    <TelLink tel={site.phone.tel} cta="form-failure">{site.phone.display}</TelLink> ({site.phoneHours})
                    or email <AgentEmails />.
                  </p>
                </div>
              )}

              <RadioGroup name="meetingType" legend="What kind of conversation would you like?" required options={OPTIONS.meetingType}
                descriptions={meetingTypeDescriptions}
                value={form.meetingType} onChange={(v) => set('meetingType', v)} error={errors.meetingType} />

              <div className="field-row">
                <Field id="firstName" label="First name" required error={errors.firstName}>
                  {(a) => <input {...a} type="text" autoComplete="given-name" value={form.firstName} onChange={(e) => set('firstName', e.target.value)} />}
                </Field>
                <Field id="lastName" label="Last name" required error={errors.lastName}>
                  {(a) => <input {...a} type="text" autoComplete="family-name" value={form.lastName} onChange={(e) => set('lastName', e.target.value)} />}
                </Field>
              </div>

              <p className="hint">Please give us an email address, a phone number, or both.</p>
              <div className="field-row">
                <Field id="email" label="Email" error={errors.email}>
                  {(a) => <input {...a} type="email" autoComplete="email" value={form.email} onChange={(e) => set('email', e.target.value)} />}
                </Field>
                <Field id="phone" label="Phone" error={errors.phone}>
                  {(a) => <input {...a} type="tel" autoComplete="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} />}
                </Field>
              </div>

              <RadioGroup name="preferredContact" legend="How should we contact you?" required options={OPTIONS.preferredContact}
                value={form.preferredContact} onChange={(v) => set('preferredContact', v)} error={errors.preferredContact} />

              <Field id="zip" label="ZIP code" required error={errors.zip}
                hint="We use this to confirm meeting options near you.">
                {(a) => (
                  <input {...a} type="text" inputMode="numeric" autoComplete="postal-code" maxLength={5} className="input-short"
                    value={form.zip} onChange={(e) => set('zip', e.target.value.replace(/\D/g, ''))} />
                )}
              </Field>
              {zipOutsideCa && (
                <p className="hint note" role="status">
                  That ZIP code looks like it is outside California. We are licensed in California, so we may not be able
                  to help, but you are welcome to send your request.
                </p>
              )}

              <RadioGroup name="meetingPreference" legend="How would you like to meet?" required options={OPTIONS.meetingPreference}
                value={form.meetingPreference} onChange={(v) => set('meetingPreference', v)} error={errors.meetingPreference} />

              <RadioGroup name="timing" legend="Which best describes your situation?" required options={OPTIONS.timing}
                value={form.timing} onChange={(v) => set('timing', v)} error={errors.timing} />

              <Field id="bestTime" label="Best time to reach you" error={errors.bestTime}>
                {(a) => (
                  <select {...a} value={form.bestTime} onChange={(e) => set('bestTime', e.target.value)}>
                    {OPTIONS.bestTime.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                  </select>
                )}
              </Field>

              <Callout tone="gold" title="Please do not include sensitive information">
                <p id="notes-warning">{SENSITIVE_WARNING}</p>
              </Callout>
              <Field id="notes" label="Anything else we should know?" error={errors.notes}
                hint={`For example, “My employer coverage ends in March.” ${NOTES_MAX - form.notes.length} characters left.`}>
                {(a) => (
                  <textarea {...a} aria-describedby={`notes-warning ${a['aria-describedby'] ?? ''}`.trim()} rows={4}
                    maxLength={NOTES_MAX} value={form.notes} onChange={(e) => set('notes', e.target.value)} />
                )}
              </Field>

              {/* Honeypot for spam bots; hidden from people and assistive technology. */}
              <div className="hp" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off"
                  value={form.website} onChange={(e) => set('website', e.target.value)} />
              </div>

              <div className={`field consent${errors.consent ? ' has-error' : ''}`}>
                {errors.consent && <p id="consent-error" className="error-text">{errors.consent}</p>}
                <label className="checkbox" htmlFor="consent">
                  <input id="consent" type="checkbox" checked={form.consent}
                    aria-describedby={errors.consent ? 'consent-error' : undefined}
                    aria-invalid={errors.consent ? true : undefined}
                    onChange={(e) => set('consent', e.target.checked)} />
                  <span>{CONSENT_TEXT} <span className="req">(required)</span></span>
                </label>
              </div>

              <p className="hint">
                See our <Link to="/privacy/">Privacy Policy</Link> for how we handle the information you send.
              </p>

              <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Submit request'}
              </button>
            </form>
          )}
        </div>

        <aside className="schedule-aside" aria-labelledby="aside-title">
          <h2 id="aside-title">Prefer to call?</h2>
          <p className="big-phone">
            <TelLink tel={site.phone.tel} cta="schedule-aside">{site.phone.display}</TelLink>
          </p>
          <p>{site.phoneHours}. If we miss your call, we will return it {site.responseStandard}.</p>
          <p>
            Or email <AgentEmails />. Please do not send sensitive information by
            email.
          </p>
          <h3>Who will respond</h3>
          <p>
            Chris or Helga, personally. Both are independent, California-licensed insurance agents, not Medicare.
          </p>
          <TpmoDisclaimer />
          <h3>What happens next</h3>
          <ol>
            <li>We confirm your location and meeting options.</li>
            <li>We confirm whether you want a general conversation or a plan-specific review.</li>
            <li>For plan-specific reviews, we complete the required steps before we meet.</li>
          </ol>
        </aside>
      </div>
    </>
  )
}
