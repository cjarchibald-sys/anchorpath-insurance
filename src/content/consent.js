// Shared by the schedule form and /api/schedule-request so the stored consent
// evidence always matches the words the visitor saw. Bump the version whenever
// the wording changes. Draft pending FMO/counsel approval (Section 11.4).

export const CONSENT_VERSION = '2026-09-30-draft-1'

export const CONSENT_TEXT =
  'By submitting this form, I request that a licensed insurance agent contact me using the phone number or email address I provided to discuss Medicare insurance information and options. I understand that this is a solicitation for insurance, that my consent is not a condition of purchasing any product or service, and that I may ask not to be contacted again.'

export const SOLICITATION_NOTICE =
  'The purpose of this form is to request information or contact about insurance. By submitting it, you are asking a licensed insurance agent to contact you using the information you provide.'

export const SENSITIVE_WARNING =
  'Please do not enter your Social Security number, Medicare number, financial information, detailed health information, prescriptions, or other sensitive information in this form. Chris or Helga will explain the secure next step if additional information is needed.'

export const NOTES_MAX = 500

export const OPTIONS = {
  preferredContact: [
    ['phone', 'Phone'],
    ['email', 'Email'],
  ],
  meetingPreference: [
    ['phone', 'Phone call'],
    ['video', 'Video call'],
    ['in-person', 'In person, if available near me'],
    ['no-preference', 'No preference'],
  ],
  meetingType: [
    ['basics', 'Medicare Basics Conversation'],
    ['review', 'Coverage Options Review'],
    ['not-sure', 'Not sure yet'],
  ],
  timing: [
    ['turning-65', 'I’m turning 65'],
    ['retiring', 'I’m retiring or leaving employer coverage'],
    ['on-medicare', 'I’m already on Medicare'],
    ['helping', 'I’m helping someone else'],
    ['other', 'Something else'],
  ],
  bestTime: [
    ['', 'Any time'],
    ['morning', 'Morning (9 a.m.–noon)'],
    ['afternoon', 'Afternoon (noon–5 p.m.)'],
    ['evening', 'Early evening, if available'],
  ],
}
