import EduPage from '../components/EduPage'
import { ExtLink, TelLink } from '../components/ui'
import { links } from '../content/links'
import { officialContacts } from '../site.config'

// Government and nonprofit resources are shown in a visually separate style
// from AnchorPath content, with no logos (Section 9.8).
const resources = [
  {
    name: 'Medicare',
    what: 'Official information on coverage, costs, enrollment, and all plans available in your area.',
    href: links.medicare,
    site: 'Medicare.gov',
    phone: officialContacts.medicare,
  },
  {
    name: 'Social Security Administration',
    what: 'Sign up for Parts A and B, update your address, and request replacement Medicare cards.',
    href: links.ssaMedicare,
    site: 'SSA.gov/medicare',
    phone: officialContacts.ssa,
  },
  {
    name: 'HICAP (California Health Insurance Counseling & Advocacy Program)',
    what: 'California’s State Health Insurance Assistance Program: one-on-one Medicare counseling at no charge, through the California Department of Aging.',
    href: links.hicap,
    site: 'aging.ca.gov',
    phone: officialContacts.hicap,
  },
  {
    name: 'Medi-Cal',
    what: 'California’s Medicaid program, which can work alongside Medicare for people who qualify.',
    href: links.mediCal,
    site: 'dhcs.ca.gov',
    extra: { href: links.benefitsCal, label: 'Apply through BenefitsCal' },
  },
  {
    name: 'Medicare Savings Programs',
    what: 'State programs that may help pay Medicare premiums and, in some cases, deductibles and coinsurance.',
    href: links.medicareSavings,
    site: 'Medicare.gov',
  },
  {
    name: 'Extra Help with drug costs',
    what: 'A federal program that helps people with limited income and resources pay for Part D prescription drug costs.',
    href: links.extraHelp,
    site: 'SSA.gov',
  },
  {
    name: 'California Department of Insurance',
    what: 'Verify an agent’s license, get consumer help, or file a complaint about an insurance agent or company.',
    href: links.cdiConsumers,
    site: 'insurance.ca.gov',
    phone: { ...officialContacts.cdi, label: `${officialContacts.cdi.label} (Consumer Hotline)` },
    extra: { href: links.cdiLicense, label: 'Look up an agent’s license' },
  },
  {
    name: 'Medicare complaints, appeals, and fraud',
    what: 'Report suspected Medicare fraud, or get help with a complaint, grievance, or appeal about your coverage.',
    href: links.medicareFraud,
    site: 'Medicare.gov',
    phone: officialContacts.medicare,
  },
]

export default function CaliforniaResources() {
  return (
    <EduPage
      path="/california-medicare-resources/"
      title="California Medicare Resources"
      description="Official and nonprofit Medicare help in California: HICAP counseling, Medicare.gov, Social Security, Medi-Cal, Medicare Savings Programs, Extra Help, the California Department of Insurance, and guidance for veterans and people with Medi-Cal."
      eyebrow="Your Situation"
      lede="Authoritative help is available whether or not you ever work with us. These organizations are independent of AnchorPath."
      toc={[
        ['official', 'Official and nonprofit resources'],
        ['veterans', 'If you are a veteran'],
        ['medi-cal', 'If you have Medicare and Medi-Cal'],
        ['disasters', 'After a disaster or emergency'],
      ]}
      cta={{
        title: 'Get help understanding which resource fits.',
        body: 'Not sure where to start? We can help you figure out which program or office to contact.',
        primary: { to: '/schedule/?type=basics', label: 'Request a Conversation' },
        secondary: { to: '/faq/', label: 'Read the FAQ' },
      }}
    >
      <h2 id="official">Official and nonprofit resources</h2>
      <p className="notice-independent">
        The organizations below are government agencies or programs. They are not affiliated with, and do not endorse,
        AnchorPath Insurance Services.
      </p>
      <ul className="resource-list">
        {resources.map((r) => (
          <li key={r.name} className="resource">
            <h3>{r.name}</h3>
            <p>{r.what}</p>
            <p className="resource-links">
              <ExtLink href={r.href}>{r.site}</ExtLink>
              {r.extra && (
                <>
                  {' · '}
                  <ExtLink href={r.extra.href}>{r.extra.label}</ExtLink>
                </>
              )}
              {r.phone && (
                <>
                  {' · '}
                  <TelLink tel={r.phone.tel}>{r.phone.label}</TelLink>
                  {r.phone.tty && <> (TTY {r.phone.tty})</>}
                </>
              )}
            </p>
          </li>
        ))}
      </ul>

      <h2 id="veterans">If you are a veteran</h2>
      <p>
        VA health care and Medicare are separate programs that generally do not coordinate: VA pays for care at VA
        facilities or care the VA authorizes, and Medicare pays for Medicare-covered care from other providers. Some
        veterans keep both for flexibility. If you have TRICARE, the rules are different: TRICARE For Life generally
        requires you to have Part A and Part B.
      </p>
      <p>
        Because the right coordination depends on your specific benefits, start with the{' '}
        <ExtLink href={links.va}>VA</ExtLink> or <ExtLink href={links.tricareForLife}>TRICARE For Life</ExtLink>, then
        talk with us about how Medicare fits in.
      </p>

      <h2 id="medi-cal">If you have Medicare and Medi-Cal</h2>
      <p>
        People who qualify for both Medicare and Medi-Cal (sometimes called “dual-eligible”) may get help with premiums,
        cost sharing, and prescription costs, and may have additional coverage options and enrollment opportunities. The
        right arrangement depends on your level of Medi-Cal eligibility and your needs.
      </p>
      <p>
        Your county Medi-Cal office and HICAP can answer eligibility questions. If you would like to talk through your
        coverage with us, we will do that through a secure, needs-based conversation. Please do not send Medi-Cal or
        Medicare numbers through our website.
      </p>

      <h2 id="disasters">After a disaster or emergency</h2>
      <p>
        When a federal, state, or local emergency or major disaster is declared, people affected may qualify for a
        Special Enrollment Period to make coverage changes they missed. Check{' '}
        <ExtLink href={links.medicare}>Medicare.gov</ExtLink> or call 1-800-MEDICARE for current information.
      </p>
    </EduPage>
  )
}
