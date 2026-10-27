import Seo from '../components/Seo'
import { CtaBand, CtaLink } from '../components/ui'
import { site } from '../site.config'

// Information site (communication, not marketing): who we are and how to reach
// us. No plan, benefit, cost, or enrollment content (owner decision 2026-10-27).
const steps = [
  ['Start with understanding.', 'We explain Medicare in plain language and take the time to answer your questions.'],
  ['Listen to what matters.', 'Your questions, your priorities, and your peace of mind all deserve attention.'],
  ['Stay available.', 'We are here for questions and help understanding next steps, whenever you need us.'],
]

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        description="Chris and Helga are independent, California-licensed insurance agents who take the time to listen and explain Medicare in plain language."
        jsonLd={[{ '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: `${site.url}/` }]}
      />

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Independent insurance agents · California</p>
            <h1 tabIndex={-1} id="page-title">Medicare guidance from people who take the time to listen.</h1>
            <p className="lede">
              We’re Chris and Helga—independent, California-licensed insurance agents who explain Medicare in plain
              language, without pressure.
            </p>
            <div className="btn-row">
              <CtaLink to="/contact/" label="Contact Us (hero)">Contact Us</CtaLink>
              <CtaLink to="/meet-chris-and-helga/" variant="secondary" label="Meet Chris & Helga (hero)">
                Meet Chris &amp; Helga
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

      <section className="section section-sand" aria-labelledby="how-title">
        <div className="container">
          <h2 id="how-title" className="section-title">How we work</h2>
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

      <CtaBand
        title="Have a question? Talk with us."
        body={`Chris or Helga will respond ${site.responseStandard}.`}
        primary={{ to: '/contact/', label: 'Contact Us' }}
        secondary={{ to: '/meet-chris-and-helga/', label: 'Meet Chris & Helga' }}
      />
    </>
  )
}
