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
      phone: { display: '(408) 650-8107', tel: '+14086508107' },
    },
    {
      key: 'helga',
      publicName: 'Helga',
      legalName: 'Helga Saito-Archibald',
      license: '4549646',
      email: 'helga@anchorpathinsurance.com',
      phone: { display: '(408) 694-5404', tel: '+14086945404' },
    },
  ],

  // Cal. Ins. Code §1726 internet disclosure.
  stateOfDomicile: 'California',
  // Owner decision (2026-09-30): disclose city and state only. The street
  // address is never published on the site or in documents linked from it.
  principalPlaceOfBusiness: 'San Jose, California',

  // Hours, emails, and response standard confirmed by owner 2026-09-30.
  // `email` is the single contact for privacy and accessibility requests.
  // Each agent's `phone` (above) is a call-recording line, per the owner
  // 2026-10-07 (42 CFR 422.2274(g): MA and Part D marketing, sales, and
  // enrollment calls must be recorded). Never publish a line that does not
  // record; if one changes, set this to false until the new line records.
  phoneRecordsCalls: true,
  email: 'chris@anchorpathinsurance.com',
  phoneHours: 'Monday–Friday, 9 a.m.–5 p.m. Pacific',
  responseStandard: 'within one business day',

  // CMS TPMO disclaimer (42 CFR 422.2267(e)(41)). Shown in the footer of every
  // page (including Schedule), on Licensing & Disclosures, in the FAQ, and on the
  // Coming Soon page. Owner-supplied wording, confirmed by owner as acceptable
  // (2026-10-03). Use verbatim; do not paraphrase.
  tpmoDisclaimer:
    'We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or 1–800–MEDICARE to get information on all of your options.',

  // Set true only when Medicare Supplement advertising is approved; renders the
  // California outline-of-coverage notice where Medigap is discussed.
  advertisesMedigap: false,

  // Privacy-policy facts that must come from the real data map (Section 9.13).
  privacy: {
    effectiveDate: '2026-10-01',
    leadRetention: '10 years after our last contact with you',
  },

  // Internal record only (not shown on the site, owner decision 2026-10-01).
  // Date of the last manual keyboard and screen-reader review; gates launch.
  accessibilityReviewed: null,
}

export const officialContacts = {
  medicare: { label: '1-800-MEDICARE (1-800-633-4227)', tel: '+18006334227', tty: '1-877-486-2048' },
  ssa: { label: '1-800-772-1213', tel: '+18007721213', tty: '1-800-325-0778' },
  hicap: { label: '1-800-434-0222', tel: '+18004340222' },
  cdi: { label: '1-800-927-4357', tel: '+18009274357' },
}
