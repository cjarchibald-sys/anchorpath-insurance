import Seo from '../components/Seo'
import Breadcrumbs from '../components/Breadcrumbs'
import { CtaBand, ExtLink, PageHero } from '../components/ui'
import { links } from '../content/links'
import { site } from '../site.config'

const path = '/meet-chris-and-helga/'
const [chris, helga] = site.agents

export default function MeetUs() {
  const crumbs = [
    { to: '/', label: 'Home' },
    { to: path, label: 'Meet Chris & Helga' },
  ]
  return (
    <>
      <Seo
        path={path}
        title="Meet Chris & Helga"
        description="Meet Chris Archibald and Helga Saito-Archibald, independent, California-licensed insurance agents who bring patience, clear explanations, and personal service to Medicare conversations."
        breadcrumbs={crumbs}
      />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Meet Us"
        title="Meet Chris & Helga"
        lede="Two independent, California-licensed insurance agents who believe good Medicare decisions start with time, clear explanations, and careful listening."
      />

      <div className="container narrow prose story">
        <h2>Our story</h2>
        <p>
          After more than 30 years working in technology, Chris decided he wanted his next chapter to center on
          something he had always cared about: education. He enjoys turning complex subjects into clear, practical
          next steps. Helga spent more than 30 years as a hairstylist, building trust one conversation at a time
          and helping people feel their best. Together, they bring patience, curiosity, and personal service to
          Medicare conversations.
        </p>
        <p>
          Medicare is becoming personal for their own family, too. That perspective reinforces the way they want
          every client to be treated: with time to ask questions, clear explanations, and respect for the decision
          being made.
        </p>
      </div>

      <section className="section" aria-labelledby="profiles-title">
        <div className="container">
          <h2 id="profiles-title" className="section-title">Who you will talk with</h2>
          <div className="profile-grid">
            <article className="profile">
              <img
                className="profile-photo"
                src="/images/chris-560.jpg"
                width="560"
                height="700"
                loading="lazy"
                alt="Chris Archibald, smiling, wearing a dark sweater over a collared shirt."
              />
              <h3>Chris</h3>
              <p className="profile-role">Independent insurance agent · Educator at heart</p>
              <p>
                Chris spent more than 30 years in technology with industry-leading companies and has a long-standing
                passion for education. He enjoys turning complex subjects into clear, practical next steps.
              </p>
              <p>
                He brings that educator’s approach to Medicare: start with the big picture, explain the terms, and
                connect each choice to what it means for you.
              </p>
              <p className="license-line">
                {chris.legalName}, California Insurance License #{chris.license}
                <br />
                <a href={`mailto:${chris.email}`}>{chris.email}</a>
              </p>
            </article>
            <article className="profile">
              <img
                className="profile-photo"
                src="/images/helga-560.jpg"
                width="560"
                height="700"
                loading="lazy"
                alt="Helga Saito-Archibald, smiling, with long dark hair and a light knit sweater."
              />
              <h3>Helga</h3>
              <p className="profile-role">Independent insurance agent · Listener first</p>
              <p>
                For more than 30 years as a hairstylist, Helga built lasting relationships with clients who trusted her
                to listen, remember what mattered to them, and help them feel confident. Her work has always started
                with listening.
              </p>
              <p>
                She brings that same care to Medicare conversations and to the long-term relationship afterward: annual
                check-ins, questions that come up during the year, and help understanding what comes next.
              </p>
              <p className="license-line">
                {helga.legalName}, California Insurance License #{helga.license}
                <br />
                <a href={`mailto:${helga.email}`}>{helga.email}</a>
              </p>
            </article>
          </div>
          <p className="section-note">
            Each of us is individually licensed. You can verify our licenses with the{' '}
            <ExtLink href={links.cdiLicense}>California Department of Insurance</ExtLink>.
          </p>
        </div>
      </section>

      <section className="section section-sand" aria-labelledby="together-title">
        <div className="container split">
          <div>
            <h2 id="together-title" className="section-title">How we work together</h2>
            <p>
              Chris brings an educator’s mindset; Helga brings decades of personal service. Some clients like to meet
              with both of us, especially couples making decisions together. Either way, you will always know which
              licensed agent you are talking with.
            </p>
          </div>
          <div>
            <h2 className="section-title">What you can expect</h2>
            <ul className="checklist">
              <li>A response from Chris or Helga {site.responseStandard}</li>
              <li>Plain language, and as much time as your questions need</li>
              <li>Honesty about what we can and cannot help with</li>
              <li>No pressure to decide, and respect for the decision you make</li>
              <li>Meetings by phone, by video, or in person where available, in English</li>
              <li>Availability after enrollment, including annual reviews</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="name-title">
        <div className="container narrow prose">
          <h2 id="name-title">The story behind AnchorPath</h2>
          <p>
            There are seasons in life when the way forward feels clear, and others when it doesn’t. Insurance can be one
            of those uncertain places. The language may feel unfamiliar, the choices can seem overwhelming, and the
            decision you make today may shape your protection for years to come.
          </p>
          <p>
            <strong>Anchor</strong> speaks to steadiness, trust, and having something dependable to hold onto when life
            changes. For us, it means being present, listening carefully, answering questions honestly, and helping you
            feel more confident about the choices in front of you.
          </p>
          <p>
            <strong>Path</strong> reflects something equally important: everyone’s situation is different. Your health,
            finances, family, priorities, and hopes for the future are uniquely yours. There is no single plan that is
            right for everyone, and finding the right coverage should begin with understanding your life, not pushing
            you toward a predetermined answer.
          </p>
          <p className="brand-line">Be the anchor. Help find the path.</p>
          <p>
            Before any decision is made, there should be room for a real conversation: for questions, honest guidance,
            and the confidence that comes from understanding your choices.
          </p>
        </div>
      </section>

      <CtaBand
        title="Request a Conversation."
        body="Tell us where you are in the process, and Chris or Helga will be in touch."
        primary={{ to: '/schedule/', label: 'Request a Conversation' }}
        secondary={{ to: '/medicare-basics/', label: 'Start with Medicare Basics' }}
      />
    </>
  )
}
