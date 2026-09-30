import { Helmet } from 'react-helmet-async'
import { Wordmark } from '../components/SiteHeader'
import { LegalIdentity } from '../components/SiteFooter'
import { site } from '../site.config'

// Shown on production until VITE_PUBLIC_LAUNCH=true (Section 18.1: stage the
// site privately until compliance, accessibility, and privacy testing pass).
export default function Prelaunch() {
  return (
    <>
      <Helmet>
        <title>{`${site.name} | Coming Soon`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <main id="main" className="prelaunch">
        <div className="prelaunch-card">
          <Wordmark />
          <h1>Coming soon</h1>
          <p className="lede">{site.serviceArea}</p>
          {site.principalPlaceOfBusiness ? (
            <LegalIdentity />
          ) : (
            <p className="small">Not affiliated with or endorsed by the U.S. government or the federal Medicare program.</p>
          )}
        </div>
      </main>
    </>
  )
}
