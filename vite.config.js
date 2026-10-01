import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { site } from './src/site.config.js'
import { pages } from './src/content/pages.js'

// Production shows the pre-launch page until VITE_PUBLIC_LAUNCH=true is set in
// the Vercel production environment. Local dev and preview deployments always
// show the full site so it can be reviewed.
const launching = process.env.VITE_PUBLIC_LAUNCH === 'true'
const live = launching || process.env.VERCEL_ENV !== 'production'

// Launch guard: refuse a public launch build while required items from the
// requirements document (Section 20, Appendix B.9) are unresolved.
function launchBlockers() {
  const blockers = []
  if (!site.principalPlaceOfBusiness) blockers.push('site.principalPlaceOfBusiness (city and state)')
  if (!site.tpmoDisclaimer) blockers.push('site.tpmoDisclaimer (exact CY2027 wording from Spark Advisors)')
  if (!site.privacy.effectiveDate) blockers.push('site.privacy.effectiveDate')
  if (!site.privacy.leadRetention) blockers.push('site.privacy.leadRetention')
  if (!site.accessibilityReviewed) blockers.push('site.accessibilityReviewed')
  for (const [path, page] of Object.entries(pages)) {
    if (!page.reviewed) blockers.push(`pages['${path}'].reviewed (licensed-owner fact-check date)`)
  }
  if (/Disallow:\s*\/\s*$/m.test(readFileSync('public/robots.txt', 'utf8'))) {
    blockers.push('public/robots.txt still blocks all crawlers')
  }
  return blockers
}

if (launching) {
  const blockers = launchBlockers()
  if (blockers.length) {
    throw new Error(`Public launch blocked. Resolve:\n  - ${blockers.join('\n  - ')}`)
  }
}

export default defineConfig({
  plugins: [react()],
  define: { __SITE_LIVE__: JSON.stringify(live) },
})
