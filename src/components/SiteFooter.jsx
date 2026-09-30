import { Link } from 'react-router-dom'
import { site } from '../site.config'
import { links } from '../content/links'
import { navGroups, meetUs, legalLinks } from './navigation'
import { ExtLink, TelLink } from './ui'
import { Wordmark } from './SiteHeader'

// Cal. Ins. Code §1726: filed name, state of domicile and principal place of
// business, license numbers, and the word "insurance", all in the same type
// size. Keep every item in this block at one font size.
export function LegalIdentity() {
  const [chris, helga] = site.agents
  return (
    <p className="legal-identity">
      {site.name}. {chris.legalName}, California Insurance License #{chris.license}. {helga.legalName},
      California Insurance License #{helga.license}. State of domicile: {site.stateOfDomicile}. Principal place of
      business:{' '}
      {site.principalPlaceOfBusiness ?? (
        <mark className="placeholder">[principal place of business (city, state) required before launch]</mark>
      )}
      . Independent insurance agents. Not affiliated with or endorsed by the U.S. government or the federal Medicare
      program.
    </p>
  )
}

// CMS TPMO standardized disclaimer. Exact wording; do not paraphrase.
export function TpmoDisclaimer() {
  if (!site.tpmoCounts) return null
  const { organizations, plans } = site.tpmoCounts
  return (
    <p className="tpmo">
      We do not offer every plan available in your area. Currently we represent {organizations} organizations which
      offer {plans} products in your area. Please contact Medicare.gov or 1-800-MEDICARE to get information on all of
      your options.
    </p>
  )
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Wordmark reverse />
          <p>{site.tagline}</p>
          <p>
            <TelLink tel={site.phone.tel} cta="footer">{site.phone.display}</TelLink>
            <br />
            {site.phoneHours}
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            New requests receive a response from Chris or Helga {site.responseStandard}.
          </p>
        </div>
        {navGroups.map((group) => (
          <nav key={group.label} aria-label={group.label} className="footer-col">
            <p className="footer-heading">{group.label}</p>
            <ul>
              {group.items.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <nav aria-label="About and contact" className="footer-col">
          <p className="footer-heading">Talk With Us</p>
          <ul>
            <li><Link to={meetUs.to}>Meet Chris &amp; Helga</Link></li>
            <li><Link to="/schedule/">Schedule a Conversation</Link></li>
          </ul>
          <p className="footer-heading">Official Medicare help</p>
          <ul>
            <li><ExtLink href={links.medicare}>Medicare.gov</ExtLink></li>
            <li>1-800-MEDICARE (TTY 1-877-486-2048)</li>
          </ul>
        </nav>
      </div>

      <div className="container footer-legal">
        <LegalIdentity />
        <TpmoDisclaimer />
        <p>
          The information on this website is general educational information and is not a determination of
          eligibility, coverage, benefits, or costs. Chris and Helga can discuss only the products and plans they are
          licensed, certified, appointed, and authorized to offer.
        </p>
        <nav aria-label="Legal">
          <ul className="legal-links">
            {legalLinks.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>
        <p className="copyright">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  )
}
