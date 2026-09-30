import { Link } from 'react-router-dom'
import EduPage from '../components/EduPage'
import { Callout, Checklist, ExtLink } from '../components/ui'
import { links } from '../content/links'

export default function AlreadyOnMedicare() {
  return (
    <EduPage
      path="/already-on-medicare/"
      title="Already on Medicare"
      description="What to review each year if you already have Medicare: your Annual Notice of Change, prescriptions, providers, pharmacies, travel, budget, and enrollment periods, plus moving to or within California."
      eyebrow="Your Situation"
      lede="Plans and lives both change from year to year. A yearly review is a chance to check that your coverage still fits, not a reason to switch for its own sake."
      toc={[
        ['what-to-review', 'What to review each year'],
        ['when-to-change', 'When you can make changes'],
        ['change-or-not', 'When a change may or may not make sense'],
        ['moving', 'Moving to or within California'],
        ['after-enrollment', 'Support after enrollment'],
      ]}
      cta={{
        title: 'Request a Coverage Options Review.',
        body: 'We can look at what changed and whether your current coverage still fits your needs. Plan-specific reviews follow the required disclosure and appointment steps.',
        primary: { to: '/schedule/?type=review', label: 'Request a Coverage Options Review' },
        secondary: { to: '/resources/#annual-review-checklist', label: 'Print the annual review checklist' },
      }}
    >
      <h2 id="what-to-review">What to review each year</h2>
      <p>
        If you have a Medicare Advantage or Part D plan, your plan sends an <strong>Annual Notice of Change</strong>{' '}
        each fall describing what will change on January 1. Your <strong>Evidence of Coverage</strong> has the full
        details. Use them to check:
      </p>
      <Checklist
        items={[
          'Premiums, deductibles, copays, and out-of-pocket limits for next year',
          'Whether each of your prescriptions is still covered, and at what cost',
          'Whether your doctors, specialists, and hospitals are still in the network',
          'Whether your preferred pharmacy is still in the network',
          'How coverage works where you travel or spend part of the year',
          'Whether your budget or health needs have changed',
          'Whether you now qualify for help with costs, such as Extra Help or a Medicare Savings Program',
        ]}
      />

      <h2 id="when-to-change">When you can make changes</h2>
      <dl className="term-list">
        <dt>Open Enrollment Period: October 15–December 7</dt>
        <dd>Join, switch, or drop a Medicare Advantage or Part D plan. Changes take effect January 1.</dd>
        <dt>Medicare Advantage Open Enrollment Period: January 1–March 31</dt>
        <dd>If you are in a Medicare Advantage plan, you can make one change to another Medicare Advantage plan or to Original Medicare.</dd>
        <dt>Special Enrollment Periods</dt>
        <dd>Certain life events, such as moving, losing other coverage, or qualifying for Extra Help, can let you change coverage at other times.</dd>
      </dl>
      <p>
        Medicare Supplement (Medigap) policies follow different rules. California has additional Medigap protections
        that may apply in some situations; we can explain whether they fit yours.
      </p>

      <h2 id="change-or-not">When a change may or may not make sense</h2>
      <p>
        A review often confirms that your current coverage still fits. A change may be worth considering if a doctor
        or pharmacy left the network, a prescription is no longer covered or its cost rose significantly, your health
        or budget changed, or you moved. Switching also has tradeoffs, such as new networks, new rules, and new
        paperwork, so it deserves the same care as your first decision.
      </p>
      <Callout title="Compare every option yourself">
        <p>
          You can compare all plans available in your area with the{' '}
          <ExtLink href={links.planFinder}>Medicare Plan Finder</ExtLink> or by calling 1-800-MEDICARE.
        </p>
      </Callout>

      <h2 id="moving">Moving to or within California</h2>
      <p>
        Moving can affect your coverage. Medicare Advantage and Part D plans have service areas, so a move out of your
        plan’s area generally ends that coverage and opens a Special Enrollment Period to choose new coverage. Even with
        Original Medicare, a move can change which doctors are nearby and which drug plans are available. Update your
        address with Social Security, and review your coverage before or soon after you move.
      </p>

      <h2 id="after-enrollment">Support after enrollment</h2>
      <p>
        Our relationship does not have to end at enrollment. Clients can reach out with questions about using their
        coverage, understanding a notice, or preparing for next year. For billing or claim decisions, your plan or
        Medicare is the official source, and we can help you figure out whom to call.
      </p>
      <p>
        See also <Link to="/california-medicare-resources/">California Medicare Resources</Link> for help with costs
        and other official programs.
      </p>
    </EduPage>
  )
}
