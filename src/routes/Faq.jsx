import { Link } from 'react-router-dom'
import EduPage from '../components/EduPage'
import { ExtLink } from '../components/ui'
import { links } from '../content/links'
import { site } from '../site.config'
import { TpmoDisclaimer } from '../components/SiteFooter'

const groups = [
  {
    id: 'working-with-us',
    title: 'Working with us',
    items: [
      {
        q: 'Does it cost anything to work with you?',
        a: (
          <>
            <p>
              You do not pay us a fee. If you enroll in a plan through us, we are generally paid by the insurance
              company. The premium for a given plan is generally the same whether you enroll through an agent or
              directly.
            </p>
            <p>You are never required to enroll in anything to talk with us.</p>
          </>
        ),
      },
      {
        q: 'Are you Medicare? Are you independent?',
        a: (
          <p>
            No, we are not Medicare and are not affiliated with the U.S. government. Chris and Helga are independent,
            California-licensed insurance agents: they are not employed by a single insurance company. Being
            independent does not mean we can offer every plan. We can discuss only the products and plans we are
            licensed, certified, appointed, and authorized to offer.
          </p>
        ),
      },
      {
        q: 'Which plans or companies do you represent?',
        a: (
          <>
            <p>
              We represent only the organizations we are appointed with. Before any plan discussion, we will tell you
              which organizations those are.
            </p>
            <TpmoDisclaimer />
          </>
        ),
      },
      {
        q: 'How do meetings work?',
        a: (
          <p>
            We meet by phone, by video, or in person where available. We serve people throughout California and will
            confirm what is available near you when we respond. Conversations are in English. You are welcome to
            include a family member or friend.
          </p>
        ),
      },
      {
        q: 'What should I have ready?',
        a: (
          <p>
            For a first conversation, just your questions and your timeline. For a coverage review, a list of your
            doctors, prescriptions (with doses), and preferred pharmacy is helpful. Please share those during the
            appointment, not through our website form. Our{' '}
            <Link to="/resources/#conversation-checklist">conversation checklist</Link> can help.
          </p>
        ),
      },
      {
        q: 'How do you handle my personal information?',
        a: (
          <p>
            Our website form asks only for contact and scheduling details. Please do not send your Social Security
            number, Medicare number, health details, or financial information through the form or ordinary email. If
            more information is needed, we will explain the secure next step. See our{' '}
            <Link to="/privacy/">Privacy Policy</Link>.
          </p>
        ),
      },
      {
        q: 'How quickly will you respond?',
        a: (
          <p>
            Chris or Helga responds to new requests {site.responseStandard}. Phone hours are {site.phoneHours}.
          </p>
        ),
      },
    ],
  },
  {
    id: 'timing',
    title: 'Timing and enrollment',
    items: [
      {
        q: 'I’m turning 65. When should I sign up?',
        a: (
          <p>
            Your Initial Enrollment Period usually runs for seven months around your 65th birthday. When to sign up
            depends on whether you already receive Social Security and whether you have coverage from current work.
            See <Link to="/turning-65/">Turning 65</Link>.
          </p>
        ),
      },
      {
        q: 'I’m working past 65. Do I need Part B?',
        a: (
          <p>
            It depends, mostly on your employer’s size and how its coverage works with Medicare. Many people with
            large-employer coverage can delay Part B without penalty, but not everyone. Confirm with your employer
            before deciding. See <Link to="/retiring-after-65/">Retiring After 65</Link>.
          </p>
        ),
      },
      {
        q: 'Should I review my coverage every year?',
        a: (
          <p>
            A yearly look is worthwhile because plans can change their costs, networks, and drug lists each January.
            Often a review confirms your coverage still fits. See{' '}
            <Link to="/already-on-medicare/">Already on Medicare</Link>.
          </p>
        ),
      },
      {
        q: 'Will my doctors and prescriptions be covered?',
        a: (
          <p>
            It depends on the coverage. Original Medicare works with any provider that accepts Medicare. Medicare
            Advantage and Part D plans have networks and drug lists that vary by plan and can change each year. Always
            confirm with the plan and your doctors.
          </p>
        ),
      },
      {
        q: 'I’m moving to California. What happens to my coverage?',
        a: (
          <p>
            A move can end Medicare Advantage or Part D coverage tied to your old service area and open a Special
            Enrollment Period. See <Link to="/already-on-medicare/#moving">moving to or within California</Link>.
          </p>
        ),
      },
    ],
  },
  {
    id: 'helping-someone',
    title: 'Helping someone else',
    items: [
      {
        q: 'Can I help my parent or spouse with Medicare?',
        a: (
          <p>
            Yes. Many people find it helpful to have someone they trust involved. The person with Medicare should take
            part in conversations and make their own decisions whenever they are able to. We are happy to meet with you
            together.
          </p>
        ),
      },
      {
        q: 'What permission do I need?',
        a: (
          <p>
            To speak with Medicare on someone’s behalf, the person generally needs to give written permission, and
            Social Security and individual plans have their own authorization processes. A legal document such as a
            power of attorney may also apply. Check with <ExtLink href={links.medicareTalk}>Medicare</ExtLink> for its
            current authorization form.
          </p>
        ),
      },
      {
        q: 'Can I request a conversation for someone else?',
        a: (
          <p>
            You can reach out to ask questions. Before we discuss anyone’s specific coverage options, we need that
            person’s participation or proper authorization.
          </p>
        ),
      },
    ],
  },
  {
    id: 'official-help',
    title: 'Official help',
    items: [
      {
        q: 'How can I reach Medicare directly?',
        a: (
          <p>
            Visit Medicare.gov or call 1-800-MEDICARE (1-800-633-4227), TTY
            1-877-486-2048. For other official programs, see{' '}
            <Link to="/california-medicare-resources/">California Medicare Resources</Link>.
          </p>
        ),
      },
    ],
  },
]

export default function Faq() {
  return (
    <EduPage
      path="/faq/"
      section={{ to: '/medicare-basics/', label: 'Learn Medicare' }}
      title="Frequently Asked Questions"
      seoTitle="Medicare FAQ"
      description="Answers to common questions about working with an independent Medicare insurance agent in California, enrollment timing, annual reviews, helping a family member, and reaching Medicare directly."
      eyebrow="Learn Medicare"
      lede="Short answers to the questions we hear most. For answers about your own situation, a conversation is often faster."
      toc={groups.map((g) => [g.id, g.title])}
      cta={{
        title: 'Still have a question?',
        body: `Ask us. Chris or Helga will respond ${site.responseStandard}.`,
        primary: { to: '/schedule/', label: 'Request a Conversation' },
        secondary: { to: '/california-medicare-resources/', label: 'Find official resources' },
      }}
    >
      {groups.map((g) => (
        <section key={g.id} aria-labelledby={g.id}>
          <h2 id={g.id}>{g.title}</h2>
          {g.items.map((item) => (
            <details key={item.q} className="faq">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </section>
      ))}
    </EduPage>
  )
}
