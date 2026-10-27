import Seo from '../components/Seo'
import { PageHero, TelLink } from '../components/ui'
import { site } from '../site.config'

// Information site: phone and email only, no web form (owner decision 2026-10-27).
export default function Contact() {
  return (
    <>
      <Seo
        path="/contact/"
        title="Contact Us"
        description="Call or email Chris or Helga, independent, California-licensed insurance agents with AnchorPath Insurance Services. We respond within one business day."
      />
      <PageHero
        title="Contact Us"
        lede={`Call or email Chris or Helga. We respond ${site.responseStandard}.`}
      />
      <div className="container narrow prose contact-page">
        <h2>Call a licensed insurance agent</h2>
        {site.agents.map((a) => (
          <p key={a.key} className="big-phone">
            {a.publicName}:{' '}
            <TelLink tel={a.phone.tel} className="agent-phone" cta={`contact-${a.key}`}>{a.phone.display}</TelLink>
          </p>
        ))}
        <p>
          {site.phoneHours}. If we miss your call, we will return it {site.responseStandard}. Calls may be recorded.
        </p>

        <h2>Email</h2>
        <ul>
          {site.agents.map((a) => (
            <li key={a.key}>
              {a.publicName}: <a href={`mailto:${a.email}`}>{a.email}</a>
            </li>
          ))}
        </ul>
        <p>
          Please do not send your Social Security number, Medicare number, financial information, or health details by
          email. If more information is needed, we will explain the secure next step.
        </p>

        <h2>Where we work</h2>
        <p>
          We are based in {site.principalPlaceOfBusiness} and work with people throughout California by phone, by video,
          or in person where available.
        </p>
      </div>
    </>
  )
}
