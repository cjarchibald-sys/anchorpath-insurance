import { Link } from 'react-router-dom'
import EduPage from '../components/EduPage'
import { Checklist, ExtLink } from '../components/ui'
import { links } from '../content/links'

const checklists = [
  {
    id: 'conversation-checklist',
    title: 'Medicare conversation checklist',
    intro: 'Bring these to any Medicare conversation, with us, HICAP, or Medicare. Share details during the appointment, not through a website form.',
    items: [
      'Your date of birth and when you plan to stop working (if you are working)',
      'Whether you already receive Social Security benefits',
      'Any current coverage: employer, retiree, COBRA, VA, TRICARE, or Medi-Cal',
      'Your doctors, specialists, and hospitals you want to keep using',
      'Your prescriptions, with doses, and your preferred pharmacy',
      'Travel plans or time spent away from home',
      'Your monthly budget and how much you could pay in a year with a lot of care',
      'Your questions, written down',
    ],
  },
  {
    id: 'retirement-checklist',
    title: 'Retirement timing checklist',
    intro: 'For people leaving employer coverage after 65.',
    items: [
      'Confirm the date your employer coverage (and your spouse’s) will end',
      'Ask your employer whether the drug coverage is creditable, in writing',
      'Get Form CMS-40B and have your employer complete Form CMS-L564',
      'Plan for Part B to start when employer coverage ends, with no gap',
      'Understand COBRA before relying on it: it does not extend your Part B enrollment window',
      'Ask a tax adviser when to stop Health Savings Account contributions',
      'Note your Medigap Open Enrollment Period, which starts with Part B',
    ],
  },
  {
    id: 'annual-review-checklist',
    title: 'Annual review checklist',
    intro: 'Each fall, before the October 15–December 7 Open Enrollment Period.',
    items: [
      'Read your Annual Notice of Change when it arrives',
      'Check each prescription against next year’s drug list and costs',
      'Confirm your doctors, hospitals, and pharmacy are still in network',
      'Compare next year’s premiums, copays, and out-of-pocket limit',
      'Think about changes in your health, budget, travel, or address',
      'Check whether you may qualify for Extra Help or a Medicare Savings Program',
      'Write down questions before you talk with anyone',
    ],
  },
]

export default function Resources() {
  return (
    <EduPage
      path="/resources/"
      section={{ to: '/medicare-basics/', label: 'Learn Medicare' }}
      title="Resources & Checklists"
      description="Printable Medicare checklists for a first conversation, retirement timing, and annual reviews, plus a Medicare glossary and links to official resources. No email address required."
      eyebrow="Learn Medicare"
      lede="Practical, printable checklists. No email address required. Use them on your own, or bring them to a conversation."
      toc={[
        ...checklists.map((c) => [c.id, c.title]),
        ['more', 'Glossary and official links'],
      ]}
      cta={{
        title: 'Use the checklist, then request a conversation if it helps.',
        primary: { to: '/schedule/', label: 'Request a Conversation' },
        secondary: { to: '/medicare-basics/', label: 'Read Medicare Basics' },
      }}
    >
      <p className="no-print">
        <button type="button" className="btn btn-secondary" onClick={() => window.print()}>
          Print this page
        </button>
      </p>
      {checklists.map((c) => (
        <section key={c.id} aria-labelledby={c.id} className="printable">
          <h2 id={c.id}>{c.title}</h2>
          <p>{c.intro}</p>
          <Checklist items={c.items} />
        </section>
      ))}

      <h2 id="more">Glossary and official links</h2>
      <ul>
        <li>
          <Link to="/medicare-basics/#glossary">Medicare glossary</Link>: plain-language definitions of common terms
        </li>
        <li>
          <ExtLink href={links.medicareYou}>“Medicare &amp; You” handbook</ExtLink> from Medicare
        </li>
        <li>
          <ExtLink href={links.planFinder}>Medicare Plan Finder</ExtLink> to compare all plans in your area
        </li>
        <li>
          <ExtLink href={links.ssaSignUp}>Sign up for Medicare</ExtLink> through Social Security
        </li>
        <li>
          <Link to="/california-medicare-resources/">California Medicare Resources</Link>, including HICAP and Medi-Cal
        </li>
      </ul>
    </EduPage>
  )
}
