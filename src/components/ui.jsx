import { Link } from 'react-router-dom'
import { track } from '@vercel/analytics'
import { site } from '../site.config'
import { pages, formatDate } from '../content/pages'

export function ExtLink({ href, children, ...rest }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="ext" {...rest}>
      {children}
      <span className="visually-hidden"> (opens an external website in a new tab)</span>
      <svg className="ext-icon" aria-hidden="true" viewBox="0 0 16 16" width="14" height="14">
        <path d="M6 3H3v10h10v-3M9 2h5v5M14 2 7 9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    </a>
  )
}

export function TelLink({ tel, children, cta, className }) {
  return (
    <a href={`tel:${tel}`} className={className} onClick={cta ? () => track('Call click', { placement: cta }) : undefined}>
      {children}
    </a>
  )
}

// Both agents' email addresses, e.g. "chris@… or helga@…".
export function AgentEmails() {
  const [chris, helga] = site.agents
  return (
    <>
      <a href={`mailto:${chris.email}`}>{chris.email}</a> or <a href={`mailto:${helga.email}`}>{helga.email}</a>
    </>
  )
}

export function CtaLink({ to, children, variant = 'primary', label }) {
  return (
    <Link
      to={to}
      className={`btn btn-${variant}`}
      onClick={() => track('CTA', { label: label ?? String(children), to })}
    >
      {children}
    </Link>
  )
}

export function PageHero({ eyebrow, title, lede, children }) {
  return (
    <header className="page-hero">
      <div className="container narrow">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 tabIndex={-1} id="page-title">{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {children}
      </div>
    </header>
  )
}

export function Callout({ tone = 'teal', title, children }) {
  return (
    <aside className={`callout callout-${tone}`}>
      {title && <p className="callout-title">{title}</p>}
      {children}
    </aside>
  )
}

export function Checklist({ items }) {
  return (
    <ul className="checklist">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

// Date, official-source path, and educational limitation for each page (B.8).
export function ReviewNote({ path }) {
  const reviewed = formatDate(pages[path]?.reviewed)
  return (
    <div className="review-note">
      <p>
        <strong>{reviewed ? `Last reviewed: ${reviewed}.` : 'Review date pending: draft content awaiting fact-check.'}</strong>{' '}
        The information on this website is general educational information and is not a determination of
        eligibility, coverage, benefits, or costs. Medicare rules and plan details can change. Visit{' '}
        Medicare.gov or call 1-800-MEDICARE (TTY 1-877-486-2048) for
        official Medicare information.
      </p>
      <p className="print-only">Printed from {site.url}{path}</p>
    </div>
  )
}

export function CtaBand({ title, body, primary, secondary }) {
  return (
    <section className="cta-band" aria-labelledby="cta-band-title">
      <div className="container narrow">
        <h2 id="cta-band-title">{title}</h2>
        {body && <p>{body}</p>}
        <div className="btn-row">
          {primary && <CtaLink to={primary.to}>{primary.label}</CtaLink>}
          {secondary && (
            <CtaLink to={secondary.to} variant="secondary">
              {secondary.label}
            </CtaLink>
          )}
        </div>
        <p className="cta-band-alt">
          Prefer to call? <TelLink tel={site.phone.tel} cta="cta-band">{site.phone.display}</TelLink> ·{' '}
          {site.phoneHours}
        </p>
      </div>
    </section>
  )
}
