import { Link } from 'react-router-dom'
import EduPage from '../components/EduPage'
import { Callout, Checklist, ExtLink } from '../components/ui'
import { links } from '../content/links'

export default function RetiringAfter65() {
  return (
    <EduPage
      path="/retiring-after-65/"
      title="Retiring After 65"
      description="How to move from employer coverage to Medicare after 65: Special Enrollment Period timing, the CMS-40B and CMS-L564 forms, COBRA and HSA cautions, spouse timing, and a documents checklist."
      eyebrow="Your Situation"
      lede="Coordinate employer coverage and Medicare with fewer surprises. The details of your employer’s plan matter, so use this page to prepare your questions."
      toc={[
        ['employer-questions', 'Questions for your employer'],
        ['timing', 'Timing and Special Enrollment Periods'],
        ['forms', 'The forms involved'],
        ['cobra', 'A caution about COBRA'],
        ['hsa', 'Health Savings Accounts'],
        ['spouse', 'If your spouse is covered too'],
        ['documents', 'Documents checklist'],
      ]}
      cta={{
        title: 'Review your retirement timeline.',
        body: 'We can help you map your dates, what to ask your employer, and what happens next, so there is no gap in coverage.',
        primary: { to: '/schedule/?type=basics', label: 'Schedule a Medicare Basics Conversation' },
        secondary: { to: '/resources/#retirement-checklist', label: 'Print the retirement checklist' },
      }}
    >
      <h2 id="employer-questions">Questions for your employer’s benefits team</h2>
      <Checklist
        items={[
          'How many employees does the company have for Medicare purposes?',
          'Does the group plan pay first or second once I am eligible for Medicare?',
          'When exactly will my coverage (and my spouse’s) end after I stop working?',
          'Is the prescription drug coverage creditable? Can I have that in writing?',
          'Is there retiree coverage, and how does it work with Medicare?',
          'Who can complete Form CMS-L564 to confirm my employment-based coverage?',
        ]}
      />

      <h2 id="timing">Timing and Special Enrollment Periods</h2>
      <p>
        If you or your spouse had group health coverage based on current employment when you became eligible for
        Medicare, you generally get a Special Enrollment Period to sign up for Part B. It usually lasts eight months,
        beginning the month after the employment or the coverage ends, whichever happens first. Many people sign up so
        Part B starts the day after their employer coverage ends.
      </p>
      <p>
        Timing also matters for other coverage. Your six-month Medigap Open Enrollment Period starts when your Part B
        begins, and you have a limited window to join a Part D or Medicare Advantage plan after employer coverage ends.
      </p>

      <h2 id="forms">The forms involved</h2>
      <p>If you are signing up for Part B during a Special Enrollment Period, Social Security generally asks for:</p>
      <ul>
        <li><strong>CMS-40B</strong>, Application for Enrollment in Medicare Part B</li>
        <li><strong>CMS-L564</strong>, Request for Employment Information, completed by your employer</li>
      </ul>
      <p>
        Get the current versions and instructions directly from{' '}
        <ExtLink href={links.ssaSignUp}>Social Security’s Medicare sign-up page</ExtLink>. We link to official forms
        rather than hosting copies, so you always get the current version.
      </p>

      <h2 id="cobra">A caution about COBRA</h2>
      <Callout tone="coral" title="COBRA is not coverage from current employment">
        <p>
          COBRA and retiree coverage do not count as coverage based on current employment. Waiting until COBRA ends to
          sign up for Part B can mean a late enrollment penalty and a gap in coverage. If you are considering COBRA,
          understand your Medicare timing first.
        </p>
      </Callout>

      <h2 id="hsa">Health Savings Accounts</h2>
      <p>
        You cannot contribute to a Health Savings Account once any part of Medicare is in effect. When you sign up for
        Part A after 65, Part A coverage can be backdated up to six months (but not before you turned 65). Talk with a
        tax adviser about when to stop contributions.
      </p>

      <h2 id="spouse">If your spouse is covered too</h2>
      <p>
        If your spouse is on your employer plan, your retirement may end their coverage as well. If your spouse is
        younger than 65, they are not yet eligible for Medicare based on age and will need other coverage. If they are
        65 or older, their own Special Enrollment Period timing applies.
      </p>

      <h2 id="documents">Documents checklist</h2>
      <Checklist
        items={[
          'Your planned last day of work and the date employer coverage ends',
          'Form CMS-40B and your employer’s completed CMS-L564',
          'Your employer’s written creditable drug coverage notice',
          'Information on any retiree or COBRA coverage offered',
          'A list of your doctors, prescriptions, and preferred pharmacy',
          'HSA contribution details to review with a tax adviser',
        ]}
      />
      <p>
        Still deciding whether to keep working? See <Link to="/turning-65/#still-working">If you are still working</Link>.
        Individual facts matter a great deal here. Social Security and Medicare make the official determinations.
      </p>
    </EduPage>
  )
}
