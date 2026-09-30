// Content record for every public page (Section 17.1). `reviewed` stays null
// until the licensed content owner fact-checks the page; the launch guard in
// vite.config.js refuses a production launch build while any page is unreviewed.

export const OWNER = 'Chris Archibald (licensed content owner)'

export const pages = {
  '/': { title: 'Home', classification: 'education', reviewed: null },
  '/medicare-basics/': { title: 'Medicare Basics', classification: 'education', reviewed: null },
  '/medicare-coverage-choices/': { title: 'Your Medicare Coverage Choices', classification: 'education', reviewed: null },
  '/turning-65/': { title: 'Turning 65', classification: 'education', reviewed: null },
  '/retiring-after-65/': { title: 'Retiring After 65', classification: 'education', reviewed: null },
  '/already-on-medicare/': { title: 'Already on Medicare', classification: 'education', reviewed: null },
  '/california-medicare-resources/': { title: 'California Medicare Resources', classification: 'education', reviewed: null },
  '/faq/': { title: 'Frequently Asked Questions', classification: 'education', reviewed: null },
  '/resources/': { title: 'Resources & Checklists', classification: 'education', reviewed: null },
  '/meet-chris-and-helga/': { title: 'Meet Chris & Helga', classification: 'education', reviewed: null },
  '/schedule/': { title: 'Schedule a Conversation', classification: 'lead-form', reviewed: null },
  '/licensing-disclosures/': { title: 'Licensing & Disclosures', classification: 'legal', reviewed: null },
  '/privacy/': { title: 'Privacy Policy', classification: 'legal', reviewed: null },
  '/accessibility/': { title: 'Accessibility', classification: 'legal', reviewed: null },
  '/terms/': { title: 'Terms / Website Notice', classification: 'legal', reviewed: null },
}

export function formatDate(iso) {
  if (!iso) return null
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  })
}
