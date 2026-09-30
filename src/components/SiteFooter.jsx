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

// CMS TPMO disclaimer. Exact wording from site.config.js; never paraphrase.
export function TpmoDisclaimer() {
  return <p className="tpmo">{site.tpmoDisclaimer}</p>
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Wordmark reverse />
          <p className="footer-tagline">{site.tagline}</p>
          <p>
            <TelLink tel={site.phone.tel} cta="footer">{site.phone.display}</TelLink>
            <br />
            {site.phoneHours}
            <br />
            {site.agents.map((a) => (
              <span key={a.key}>
                <a href={`mailto:${a.email}`}>{a.email}</a>
                <br />
              </span>
            ))}
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
            <li><Link to={`${meetUs.to}#our-story`}>Our story</Link></li>
            <li><Link to="/schedule/">Schedule a Conversation</Link></li>
          </ul>
          <p className="footer-heading">Official Medicare help</p>
          <ul>
            <li><ExtLink href={links.medicare}>Medicare.gov</ExtLink></li>
            <li>1-800-MEDICARE (TTY 1-877-486-2048)</li>
          </ul>
        </nav>
      </div>

      {/* Phones only: one compact row instead of the three link columns above. */}
      <nav aria-label="Quick links" className="container footer-quick">
        <ul>
          <li><Link to="/medicare-basics/">Medicare Basics</Link></li>
          <li><Link to="/medicare-coverage-choices/">Coverage Choices</Link></li>
          <li><Link to="/faq/">FAQ</Link></li>
          <li><Link to="/meet-chris-and-helga/">Meet Chris &amp; Helga</Link></li>
          <li><Link to="/meet-chris-and-helga/#our-story">Our story</Link></li>
          <li><Link to="/schedule/">Schedule a Conversation</Link></li>
          <li><ExtLink href={links.medicare}>Medicare.gov</ExtLink></li>
        </ul>
      </nav>

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
