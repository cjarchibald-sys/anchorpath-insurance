import { Link } from 'react-router-dom'
import EduPage from '../components/EduPage'
import { Callout, ExtLink } from '../components/ui'
import { links } from '../content/links'
import { glossary } from '../content/glossary'


export default function MedicareBasics() {
  return (
    <EduPage
      path="/medicare-basics/"
      title="Medicare Basics"
      description="A calm, plain-language introduction to Medicare Parts A, B, and D, Medicare Advantage, Medicare Supplement, enrollment timing, and what Medicare generally does not cover."
      eyebrow="Learn Medicare"
      lede="A calm foundation before any coverage decision: what each part of Medicare does, when enrollment happens, and where the gaps are."
      toc={[
        ['what-is-medicare', 'What Medicare is'],
        ['parts', 'The parts of Medicare'],
        ['timing', 'When you can enroll'],
        ['not-covered', 'What Medicare generally does not cover'],
        ['glossary', 'Glossary'],
      ]}
      cta={{
        title: 'Talk through your Medicare timeline.',
        body: 'A Medicare Basics Conversation is a general, educational conversation about timing, terminology, and the questions that apply to you.',
        primary: { to: '/schedule/?type=basics', label: 'Schedule a Medicare Basics Conversation' },
        secondary: { to: '/medicare-coverage-choices/', label: 'Compare the two coverage paths' },
      }}
    >
      <Callout title="We are not Medicare">
        <p>
          AnchorPath Insurance Services is not affiliated with or endorsed by the U.S. government or the federal
          Medicare program. For official information, visit <ExtLink href={links.medicare}>Medicare.gov</ExtLink> or{' '}
          <ExtLink href={links.ssaMedicare}>Social Security</ExtLink>.
        </p>
      </Callout>

      <h2 id="what-is-medicare">What Medicare is</h2>
      <p>
        Medicare is federal health insurance for people 65 and older, and for some younger people with certain
        disabilities or conditions such as end-stage renal disease (ESRD) or ALS. Social Security generally handles
        enrollment in Parts A and B. Private insurance companies approved by Medicare offer Medicare Advantage plans,
        Part D drug plans, and Medicare Supplement (Medigap) policies.
      </p>

      <h2 id="parts">The parts of Medicare</h2>

      <h3>Part A: hospital insurance</h3>
      <p>
        Part A helps cover inpatient hospital stays, care in a skilled nursing facility after a qualifying hospital
        stay, hospice care, and some home health care. Most people do not pay a monthly premium for Part A because
        they or a spouse paid Medicare taxes long enough while working. Deductibles and other costs still apply.
      </p>

      <h3>Part B: medical insurance</h3>
      <p>
        Part B helps cover doctor visits, outpatient care, many preventive services, lab tests, and durable medical
        equipment. Part B has a monthly premium, which is higher for people with higher incomes. After the yearly
        deductible, you generally pay a share of the cost of most services.
      </p>

      <h3>Part D: prescription drug coverage</h3>
      <p>
        Part D helps pay for prescription drugs. It is offered by private companies approved by Medicare, either as a
        stand-alone drug plan alongside Original Medicare or built into many Medicare Advantage plans. Each plan has
        its own list of covered drugs (a formulary) and pharmacy network. If you go without Part D or other creditable
        drug coverage for a period after you first become eligible, you may owe a late enrollment penalty.
      </p>

      <h3>Medicare Advantage (Part C)</h3>
      <p>
        Medicare Advantage plans are offered by private companies approved by Medicare. They provide your Part A and
        Part B coverage, and many include Part D drug coverage. Plans often use provider networks, such as a Health
        Maintenance Organization (HMO) or Preferred Provider Organization (PPO), and have a yearly limit on what you
        pay out of pocket for covered Part A and Part B services. You continue to pay your Part B premium.
      </p>

      <h3>Medicare Supplement Insurance (Medigap)</h3>
      <p>
        Medicare Supplement policies are sold by private companies and work alongside Original Medicare to help pay
        some of the costs Original Medicare does not, such as deductibles, copayments, and coinsurance. Plans are
        standardized and identified by letters. Medigap policies do not work with Medicare Advantage plans and
        generally do not include drug coverage, so people often pair them with a Part D plan.
      </p>
      <p>
        See <Link to="/medicare-coverage-choices/">Your Medicare Coverage Choices</Link> for how these pieces fit
        together.
      </p>

      <h2 id="timing">When you can enroll</h2>
      <dl className="term-list">
        <dt>Initial Enrollment Period</dt>
        <dd>
          Usually seven months around your 65th birthday: the three months before, your birthday month, and the three
          months after. <Link to="/turning-65/">Learn more about turning 65</Link>.
        </dd>
        <dt>Special Enrollment Periods</dt>
        <dd>
          Certain situations, such as losing employer coverage based on current work or moving, can open a window to
          enroll or change coverage. <Link to="/retiring-after-65/">Learn more about retiring after 65</Link>.
        </dd>
        <dt>General Enrollment Period</dt>
        <dd>
          January 1–March 31 each year, for people who missed their enrollment window for Part A or Part B. Coverage
          starts the month after you sign up, and late enrollment penalties may apply.
        </dd>
        <dt>Open Enrollment Period</dt>
        <dd>
          October 15–December 7 each year. People with Medicare can join, switch, or drop a Medicare Advantage or Part D
          plan, with changes taking effect January 1.
        </dd>
        <dt>Medicare Advantage Open Enrollment Period</dt>
        <dd>
          January 1–March 31 each year. People already in a Medicare Advantage plan can make one change: switch to a
          different Medicare Advantage plan or return to Original Medicare (and join a drug plan).
        </dd>
      </dl>
      <p>
        Your own dates depend on your circumstances. For an official determination, contact{' '}
        <ExtLink href={links.ssaMedicare}>Social Security</ExtLink> or <ExtLink href={links.medicare}>Medicare.gov</ExtLink>.
      </p>

      <h2 id="not-covered">What Medicare generally does not cover</h2>
      <p>Original Medicare generally does not cover:</p>
      <ul>
        <li>Long-term custodial care, such as help with bathing and dressing in a nursing home or at home</li>
        <li>Most routine dental care and dentures</li>
        <li>Routine eye exams for glasses, and most eyeglasses and contact lenses</li>
        <li>Hearing aids and exams for fitting them</li>
        <li>Most health care outside the United States</li>
        <li>Cosmetic surgery</li>
      </ul>
      <p>
        Some Medicare Advantage plans offer limited coverage for some of these services, and separate dental, vision,
        and hearing coverage is available. Whether any of those make sense depends on your needs.
      </p>

      <h2 id="glossary">Glossary</h2>
      <p>Select a term to see its definition.</p>
      <div className="glossary">
        {glossary.map(([term, def]) => (
          <details key={term} className="faq">
            <summary>{term}</summary>
            <div className="faq-answer">
              <p>{def}</p>
            </div>
          </details>
        ))}
      </div>
    </EduPage>
  )
}
