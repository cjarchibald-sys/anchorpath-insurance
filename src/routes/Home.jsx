import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { CtaLink, TelLink } from '../components/ui'
import { site } from '../site.config'

const startingPoints = [
  {
    title: 'Turning 65',
    body: 'Understand the dates, choices, and questions that can help you prepare.',
    to: '/turning-65/',
    link: 'Explore Turning 65',
  },
  {
    title: 'Retiring after 65',
    body: 'Coordinate employer coverage and Medicare with fewer surprises.',
    to: '/retiring-after-65/',
    link: 'Plan Your Transition',
  },
  {
    title: 'Already on Medicare',
    body: 'Review what changed in your coverage, prescriptions, providers, and priorities.',
    to: '/already-on-medicare/',
    link: 'Prepare for a Review',
  },
  {
    title: 'Helping someone else',
    body: 'Find practical ways to support a parent, spouse, or loved one while respecting their choices.',
    to: '/faq/#helping-someone',
    link: 'Caregiver Questions',
  },
]

const steps = [
  ['Start with understanding.', 'We explain Medicare in plain language and help you identify the decisions that apply to your situation.'],
  ['Listen to what matters.', 'Your doctors, prescriptions, budget, travel, coverage preferences, and peace of mind all deserve attention.'],
  ['Review available options.', 'When you are ready for plan-specific guidance, we use an approved process to review options available through the organizations we represent.'],
  ['Stay available.', 'Our relationship does not have to end at enrollment. We are available for questions, annual reviews, and help understanding next steps.'],
]

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        description="Chris and Helga are independent, California-licensed insurance agents who help people understand Medicare and make informed coverage decisions without pressure."
        jsonLd={[{ '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: `${site.url}/` }]}
      />

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Medicare education · California</p>
            <h1 tabIndex={-1} id="page-title">Medicare guidance from people who take the time to listen.</h1>
            <p className="lede">
              We’re Chris and Helga—independent, California-licensed insurance agents who help people understand
              Medicare and make informed coverage decisions without pressure.
            </p>
            <div className="btn-row">
              <CtaLink to="/schedule/" label="Schedule a Conversation (hero)">Schedule a Conversation</CtaLink>
              <CtaLink to="/medicare-basics/" variant="secondary" label="Start with Medicare Basics (hero)">
                Start with Medicare Basics
              </CtaLink>
            </div>
          </div>
          <div className="hero-photo">
            <img
              src="/images/CandH-640.jpg"
              srcSet="/images/CandH-640.jpg 640w, /images/CandH-1126.jpg 1126w"
              sizes="(min-width: 900px) 40vw, 100vw"
              width="640"
              height="707"
              alt="Chris Archibald and Helga Saito-Archibald smiling together in front of green leafy plants."
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="What to expect from us">
        <ul className="container">
          <li>Independent agents</li>
          <li>California licensed</li>
          <li>Education first</li>
          <li>Ongoing support</li>
        </ul>
      </section>

      <section className="section" aria-labelledby="start-title">
        <div className="container">
          <h2 id="start-title" className="section-title">Find your starting point</h2>
          <ul className="card-grid">
            {startingPoints.map((c) => (
              <li key={c.title} className="card">
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <Link to={c.to} className="card-link">
                  {c.link}
                  <span aria-hidden="true"> →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-sand" aria-labelledby="how-title">
        <div className="container">
          <h2 id="how-title" className="section-title">How we help</h2>
          <ol className="steps">
            {steps.map(([title, body]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cta-band" aria-labelledby="final-cta">
        <div className="container">
          <h2 id="final-cta">You do not have to figure out Medicare all at once.</h2>
          <p>
            Tell us where you are in the process, and choose the kind of conversation that fits. Chris or Helga will
            respond {site.responseStandard}.
          </p>
          <div className="cta-options">
            <div className="cta-option">
              <h3>Medicare Basics Conversation</h3>
              <p>A general, educational conversation about timing, terminology, and the questions worth asking.</p>
              <CtaLink to="/schedule/?type=basics" label="Start with the Basics">Start with the Basics</CtaLink>
            </div>
            <div className="cta-option">
              <h3>Coverage Options Review</h3>
              <p>
                A personal review of your needs and options through organizations we are authorized to represent.
                Required disclosures and appointment steps apply.
              </p>
              <CtaLink to="/schedule/?type=review" label="Request a Coverage Review">Request a Coverage Review</CtaLink>
            </div>
          </div>
          <p className="cta-band-alt">
            Prefer to call? <TelLink tel={site.phone.tel} cta="home-final">{site.phone.display}</TelLink> ·{' '}
            {site.phoneHours}. For official information, visit Medicare.gov or call 1-800-MEDICARE.
          </p>
        </div>
      </section>
    </>
  )
}
