import EduPage from '../components/EduPage'
import { TelLink } from '../components/ui'
import { site } from '../site.config'

export default function Accessibility() {
  return (
    <EduPage
      path="/accessibility/"
      title="Accessibility"
      description="AnchorPath Insurance Services is committed to an accessible website. Our target is WCAG 2.2 Level AA. Learn how to report a problem or get information another way."
      lede="Everyone should be able to learn about Medicare and reach us easily."
      cta={{
        title: 'Report an accessibility issue.',
        body: `Call ${site.phone.display} or email ${site.email}. We will respond ${site.responseStandard}.`,
        primary: { to: '/schedule/', label: 'Contact us' },
      }}
    >
      <h2>Our commitment</h2>
      <p>
        We aim for this website to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA. We design for
        readable text, strong color contrast, keyboard navigation, screen readers, and zooming up to 200% or more. We
        test with automated tools and by hand, and we fix problems we find. We do not claim full conformance; if
        something does not work for you, we want to know.
      </p>

      <h2>Formats</h2>
      <p>
        Our educational content and checklists are provided as web pages that you can read, enlarge, or print. We do not
        rely on PDFs for essential information. If you need information in another format, let us know.
      </p>

      <h2>Known limitations</h2>
      <p>
        External websites we link to, such as Medicare.gov and Social Security, are outside our control and have their
        own accessibility practices.
      </p>

      <h2>Get help or report a problem</h2>
      <p>
        Call <TelLink tel={site.phone.tel}>{site.phone.display}</TelLink> ({site.phoneHours}) or email{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>. Please tell us the page and what went wrong. We will respond{' '}
        {site.responseStandard} and can share information another way while we work on a fix. You never need to use
        the website form to reach us.
      </p>
    </EduPage>
  )
}
