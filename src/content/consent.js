// Shared by the schedule form and /api/schedule-request so the stored consent
// evidence always matches the words the visitor saw. Bump the version whenever
// the wording changes. Draft pending FMO/counsel approval (Section 11.4).

export const CONSENT_VERSION = '2026-11-20-1'

// Spark's model permission-to-contact wording (verbatim, Spark review
// 2026-11-20), followed by the consent duration Spark asked us to state.
export const CONSENT_TEXT =
  'By providing your name and contact information you are consenting to receive sales and marketing calls, text messages and/or emails from the licensed insurance agent listed on this form about Medicare Plans at the number provided, and you agree such calls and/or text messages may use an automated system for the selection or dialing of telephone numbers, automated voice calls, AI generative voice calls, pre recorded messages played when a connection is made, or pre recorded voicemail messages, even if you are on a government do-not-call registry. These calls are for marketing purposes and cellular charges may apply. This agreement is not a condition of enrollment and you can change your permission preferences at any time by contacting the agent listed on this form. This consent lasts for 12 months from the date you submit this form.'

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
