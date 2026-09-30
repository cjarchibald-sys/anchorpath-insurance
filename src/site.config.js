// Single source of truth for identity, contact, and compliance values.
// Plain JS (no JSX) so vite.config.js can import it for the launch guard.
//
// Values set to `null` are unresolved placeholders from the Website Strategy &
// Requirements Document (Appendix B.9). A production launch build
// (VITE_PUBLIC_LAUNCH=true) fails until each one is resolved.

export const site = {
  name: 'AnchorPath Insurance Services',
  url: 'https://anchorpathinsurance.com',
  tagline: 'Educate first. Listen carefully. Help you decide.',
  serviceArea: 'Helping people throughout California understand Medicare.',

  agents: [
    {
      key: 'chris',
      publicName: 'Chris',
      legalName: 'Christopher Archibald',
      license: '4543885',
      email: 'chris@anchorpathinsurance.com',
    },
    {
      key: 'helga',
      publicName: 'Helga',
      legalName: 'Helga Saito-Archibald',
      license: '4549646',
      email: 'helga@anchorpathinsurance.com',
    },
  ],

  // Cal. Ins. Code §1726 internet disclosure.
  stateOfDomicile: 'California',
  // Owner decision (2026-09-30): disclose city and state only. The street
  // address is never published on the site or in documents linked from it.
  principalPlaceOfBusiness: 'San Jose, California',

  // Phone, hours, emails, and response standard confirmed by owner 2026-09-30.
  // `email` is the single contact for privacy and accessibility requests.
  phone: { display: '(408) 365-4412', tel: '+14083654412' },
  email: 'chris@anchorpathinsurance.com',
  phoneHours: 'Monday–Friday, 9 a.m.–5 p.m. Pacific',
  responseStandard: 'within one business day',

  // CMS TPMO disclaimer, exact text supplied by the owner (2026-09-30). Shown in
  // the footer of every page, on Licensing & Disclosures, on Schedule, and in the
  // FAQ. Do not paraphrase; replace only with FMO/compliance-approved wording.
  tpmoDisclaimer:
    'We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or 1–800–MEDICARE to get information on all of your options.',

  // Set true only when Medicare Supplement advertising is approved; renders the
  // California outline-of-coverage notice where Medigap is discussed.
  advertisesMedigap: false,

  // Privacy-policy facts that must come from the real data map (Section 9.13).
  privacy: {
    effectiveDate: null, // e.g. '2026-11-01'
    leadRetention: null, // e.g. 'up to 3 years after our last contact with you'
  },

  accessibilityReviewed: null, // date of the last manual accessibility review
}

export const officialContacts = {
  medicare: { label: '1-800-MEDICARE (1-800-633-4227)', tel: '+18006334227', tty: '1-877-486-2048' },
  ssa: { label: '1-800-772-1213', tel: '+18007721213', tty: '1-800-325-0778' },
  hicap: { label: '1-800-434-0222', tel: '+18004340222' },
  cdi: { label: '1-800-927-4357', tel: '+18009274357' },
}
