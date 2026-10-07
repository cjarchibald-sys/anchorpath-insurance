import EduPage from '../components/EduPage'
import { TwoPathsDiagram } from '../components/Diagrams'
import { Callout, Checklist } from '../components/ui'
import { site } from '../site.config'
import { BENEFITS_DISCLAIMER, OUT_OF_NETWORK_DISCLAIMER } from '../content/disclaimers'

// Rows are written to equal depth for both paths (Sections 9.4 and 10.3).
const factors = [
  {
    factor: 'Doctors and hospitals',
    original: 'You can use any doctor or hospital in the U.S. that accepts Medicare. Referrals to specialists are generally not required.',
    advantage: 'Most plans use a network (such as an HMO or PPO). Using in-network providers usually costs less, and some plans require referrals.',
  },
  {
    factor: 'Prescription drugs',
    original: 'Drug coverage comes from a separate stand-alone Part D plan that you choose.',
    advantage: 'Many plans include Part D drug coverage in the same plan.',
  },
  {
    factor: 'Costs',
    original: 'You pay the Part B premium, deductibles, and generally a share of each service. There is no yearly out-of-pocket limit unless you add coverage such as Medigap, which has its own premium.',
    advantage: 'You pay the Part B premium, any plan premium, and copays or coinsurance. Each plan has a yearly out-of-pocket limit for covered Part A and B services.',
  },
  {
    factor: 'Travel',
    original: 'Coverage works with Medicare-accepting providers anywhere in the U.S. Care outside the U.S. is generally not covered, though some Medigap plans include limited foreign travel emergency coverage.',
    advantage: 'Emergency and urgent care are covered anywhere in the U.S. Routine care outside the plan’s service area or network may cost more or may not be covered.',
  },
  {
    factor: 'Additional benefits',
    original: 'Routine dental, vision, and hearing are generally not covered. Separate coverage can be purchased if it fits your needs.',
    advantage: 'Some plans include limited dental, vision, hearing, or other benefits. What is included, and how much it helps, varies by plan.',
  },
  {
    factor: 'Paperwork and approvals',
    original: 'Medicare processes claims. If you add Part D and Medigap, you have separate plans and cards to keep track of.',
    advantage: 'One plan generally handles your coverage. Some services may require approval from the plan in advance (prior authorization).',
  },
  {
    factor: 'Changing later',
    original: 'You can generally join a Medicare Advantage plan during yearly enrollment periods.',
    advantage: 'You can generally return to Original Medicare during enrollment periods, but a Medigap insurer may be able to consider your health when you apply outside certain protected times.',
  },
]

export default function CoverageChoices() {
  return (
    <EduPage
      path="/medicare-coverage-choices/"
      section={{ to: '/medicare-basics/', label: 'Learn Medicare' }}
      title="Your Medicare Coverage Choices"
      description="A neutral, side-by-side explanation of Original Medicare (with optional Part D and Medigap) and Medicare Advantage, with the decision factors and questions that matter."
      eyebrow="Learn Medicare"
      lede="Most people choose between two broad paths. Both have real tradeoffs, and the better fit depends on you, not on the type of plan."
      toc={[
        ['two-paths', 'The two paths'],
        ['side-by-side', 'Side by side'],
        ['questions', 'Questions to ask yourself'],
      ]}
      cta={{
        title: 'Both paths have real tradeoffs. Let’s talk about what fits you.',
        body: 'A Coverage Options Review is a personal review of your needs and the options available through the organizations we are authorized to represent. Required disclosures and appointment steps apply.',
        primary: { to: '/schedule/?type=review', label: 'Request a Coverage Options Review' },
        secondary: { to: '/medicare-basics/', label: 'Back to Medicare Basics' },
      }}
    >
      <h2 id="two-paths">The two paths</h2>
      <TwoPathsDiagram />

      <h2 id="side-by-side">Side by side</h2>
      <p>
        This comparison describes each path in general terms. Specific plans differ, and costs and benefits change
        from year to year.
      </p>
      <div className="table-wrap" tabIndex={0} role="region" aria-labelledby="compare-caption">
        <table className="compare">
          <caption id="compare-caption">How Original Medicare and Medicare Advantage generally compare</caption>
          <thead>
            <tr>
              <th scope="col">Decision factor</th>
              <th scope="col">Original Medicare (+ optional Part D and Medigap)</th>
              <th scope="col">Medicare Advantage</th>
            </tr>
          </thead>
          <tbody>
            {factors.map((row) => (
              <tr key={row.factor}>
                <th scope="row">{row.factor}</th>
                <td data-label="Original Medicare">{row.original}</td>
                <td data-label="Medicare Advantage">{row.advantage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="plan-disclaimer">{BENEFITS_DISCLAIMER}</p>
      <p className="plan-disclaimer">{OUT_OF_NETWORK_DISCLAIMER}</p>

      {site.advertisesMedigap && <p className="medigap-notice">AN OUTLINE OF COVERAGE IS AVAILABLE UPON REQUEST.</p>}

      <Callout title="Neither path is better for everyone">
        <p>
          Some people value a broad choice of providers and predictable costs. Others value having coverage combined in
          one plan, or additional benefits. The right answer depends on your health, doctors, prescriptions, budget,
          travel, and how you like to manage your care.
        </p>
      </Callout>

      <h2 id="questions">Questions to ask yourself</h2>
      <Checklist
        items={[
          'Which doctors, specialists, and hospitals do I want to keep using?',
          'What prescriptions do I take, and which pharmacy do I use?',
          'How much do I want to pay each month, and how much could I afford if I needed a lot of care in one year?',
          'Do I travel, split time between homes, or plan to move?',
          'Would dental, vision, or hearing benefits matter to me, and would they actually meet my needs?',
          'Do I prefer one plan that handles most things, or separate coverage that I combine?',
          'How would I feel about referrals or approvals before some care?',
        ]}
      />
    </EduPage>
  )
}
