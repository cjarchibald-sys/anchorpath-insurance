// Shared by the schedule form (client) and /api/schedule-request (server).
import { NOTES_MAX, OPTIONS } from './consent.js'

const TEXT_FIELDS = ['firstName', 'lastName', 'email', 'phone', 'preferredContact', 'zip', 'meetingPreference', 'meetingType', 'timing', 'bestTime', 'notes']

const inOptions = (name, value) => Boolean(value || name === 'bestTime') && OPTIONS[name].some(([v]) => v === value)

// Coerce untrusted input into the expected shape so validation never throws.
export function normalizeLead(input) {
  const out = {}
  for (const key of TEXT_FIELDS) out[key] = typeof input?.[key] === 'string' ? input[key] : ''
  out.consent = input?.consent === true
  return out
}

export function validateLead(f) {
  const e = {}
  if (!f.firstName.trim()) e.firstName = 'Enter your first name.'
  if (!f.lastName.trim()) e.lastName = 'Enter your last name.'
  const email = f.email.trim()
  const phoneDigits = f.phone.replace(/\D/g, '')
  if (!email && !phoneDigits) {
    e.email = 'Enter an email address or a phone number so we can reach you.'
    e.phone = 'Enter a phone number or an email address so we can reach you.'
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter an email address like name@example.com.'
  if (phoneDigits && !/^1?\d{10}$/.test(phoneDigits)) e.phone = 'Enter a 10-digit phone number, like (555) 555-0123.'
  if (!inOptions('preferredContact', f.preferredContact)) e.preferredContact = 'Choose how you would like us to contact you.'
  else if (f.preferredContact === 'phone' && !phoneDigits) e.phone = 'Enter a phone number, since you prefer a call.'
  else if (f.preferredContact === 'email' && !email) e.email = 'Enter an email address, since you prefer email.'
  if (!/^\d{5}$/.test(f.zip.trim())) e.zip = 'Enter your five-digit ZIP code.'
  if (!inOptions('meetingPreference', f.meetingPreference)) e.meetingPreference = 'Choose how you would like to meet.'
  if (!inOptions('meetingType', f.meetingType)) e.meetingType = 'Choose the kind of conversation you would like.'
  if (!inOptions('timing', f.timing)) e.timing = 'Choose the option that best describes your situation.'
  if (!inOptions('bestTime', f.bestTime)) e.bestTime = 'Choose a time from the list.'
  if (f.notes.length > NOTES_MAX) e.notes = `Keep notes to ${NOTES_MAX} characters or fewer.`
  if (f.consent !== true) e.consent = 'Check the box to confirm you would like a licensed agent to contact you.'
  return e
}
