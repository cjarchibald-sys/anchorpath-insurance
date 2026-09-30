import { Link } from 'react-router-dom'
import EduPage from '../components/EduPage'
import { EnrollmentWindowDiagram } from '../components/Diagrams'
import { Callout, Checklist, ExtLink } from '../components/ui'
import { links } from '../content/links'


export default function Turning65() {
  return (
    <EduPage
      path="/turning-65/"
      title="Turning 65"
      description="Understand your Medicare Initial Enrollment Period, what to consider if you are still working, how to sign up through Social Security, and how to prepare for a conversation."
      eyebrow="Your Situation"
      lede="Understand the dates, choices, and questions that can help you prepare, whether you plan to retire at 65 or keep working."
      toc={[
        ['your-window', 'Your enrollment window'],
        ['automatic', 'Will I be enrolled automatically?'],
        ['still-working', 'If you are still working'],
        ['checklist', 'Turning-65 checklist'],
        ['family', 'If family is helping'],
      ]}
      cta={{
        title: 'Schedule a Medicare Basics Conversation.',
        body: 'We can walk through your dates, the choices in front of you, and what to have ready, with no plan recommendation unless you ask for one.',
        primary: { to: '/schedule/?type=basics', label: 'Schedule a Medicare Basics Conversation' },
        secondary: { to: '/medicare-basics/', label: 'Read Medicare Basics' },
      }}
    >
      <h2 id="your-window">Your enrollment window</h2>
      <EnrollmentWindowDiagram />
      <p>
        If you sign up during the three months before your birthday month, Part B coverage generally starts the first
        day of your birthday month. If you sign up during your birthday month or later in the window, coverage
        generally starts the first day of the month after you sign up. If your birthday falls on the first of a month,
        your window starts and ends one month earlier.
      </p>
      <Callout tone="coral" title="Missing your window can be costly">
        <p>
          If you do not sign up for Part B when first eligible and do not qualify for a Special Enrollment Period, you
          may have to wait for the General Enrollment Period and pay a late enrollment penalty for as long as you have
          Part B. A separate penalty can apply to Part D.
        </p>
      </Callout>

      <h2 id="automatic">Will I be enrolled automatically?</h2>
      <p>
        If you already receive Social Security or Railroad Retirement Board benefits, you are generally enrolled in
        Parts A and B automatically, and your Medicare card arrives in the mail a few months before you turn 65. If you
        do not yet receive those benefits, you generally need to sign up through{' '}
        <ExtLink href={links.ssaSignUp}>Social Security</ExtLink>, online, by phone, or in person.
      </p>

      <h2 id="still-working">If you are still working</h2>
      <p>
        Whether you need Part B right away often depends on the size of your (or your spouse’s) employer and how that
        coverage works with Medicare. As a general guide:
      </p>
      <ul>
        <li>
          <strong>Employers with 20 or more employees:</strong> the group health plan based on current employment usually
          pays first, and many people can delay Part B without a penalty while they have that coverage.
        </li>
        <li>
          <strong>Employers with fewer than 20 employees:</strong> Medicare usually pays first, and the employer plan
          may expect you to enroll in Parts A and B.
        </li>
      </ul>
      <p>
        Confirm with your employer’s benefits administrator before deciding, and ask whether your drug coverage is
        creditable. If you contribute to a Health Savings Account (HSA), ask a tax adviser: you cannot contribute to an
        HSA once any part of Medicare is in effect. See{' '}
        <Link to="/retiring-after-65/">Retiring After 65</Link> for what happens when that coverage ends.
      </p>
      <p>
        This page cannot tell you whether you are eligible or when your coverage will start. Social Security and
        Medicare make those determinations.
      </p>

      <h2 id="checklist">Turning-65 checklist</h2>
      <Checklist
        items={[
          'Mark your seven-month Initial Enrollment Period on a calendar.',
          'Check whether you will be enrolled automatically or need to sign up through Social Security.',
          'If you or your spouse are working, ask the employer how its coverage works with Medicare.',
          'Ask whether your current drug coverage is creditable, and keep the letter.',
          'List your doctors, prescriptions, and preferred pharmacy.',
          'Think about your budget, travel plans, and how you like to manage your care.',
          'Write down questions you want answered before you decide.',
        ]}
      />
      <p>
        A printable version is on our <Link to="/resources/#conversation-checklist">Resources page</Link>.
      </p>

      <h2 id="family">If family is helping</h2>
      <p>
        Many people like to include a spouse, adult child, or trusted friend. You are welcome to do that. The decision
        stays yours, and if someone will call Medicare or a plan for you, they may need your written permission first.
        See <Link to="/faq/#helping-someone">helping someone else</Link> in our FAQ.
      </p>
    </EduPage>
  )
}
