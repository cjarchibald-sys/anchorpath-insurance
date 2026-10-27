// Content record for every public page (Section 17.1). `reviewed` stays null
// until the licensed content owner fact-checks the page; the launch guard in
// vite.config.js refuses a production launch build while any page is unreviewed.

export const OWNER = 'Chris Archibald (licensed content owner)'

export const pages = {
  '/': { title: 'Home', classification: 'information', reviewed: null },
  '/meet-chris-and-helga/': { title: 'Meet Chris & Helga', classification: 'information', reviewed: null },
  '/contact/': { title: 'Contact Us', classification: 'information', reviewed: null },
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
