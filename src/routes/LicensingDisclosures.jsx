import { Link } from 'react-router-dom'
import EduPage from '../components/EduPage'
import { ExtLink, TelLink } from '../components/ui'
import { LegalIdentity, TpmoDisclaimer } from '../components/SiteFooter'
import { links } from '../content/links'
import { site } from '../site.config'

export default function LicensingDisclosures() {
  const [chris, helga] = site.agents
  return (
    <EduPage
      path="/licensing-disclosures/"
      title="Licensing & Disclosures"
      description="Licensing, identity, and required disclosures for AnchorPath Insurance Services and its independent, California-licensed insurance agents, Christopher Archibald and Helga Saito-Archibald."
      lede="Who we are, how we are licensed, and the disclosures that apply to this website."
      cta={{
        title: 'Questions about our licensing?',
        primary: { to: '/schedule/', label: 'Schedule a Conversation' },
        secondary: { to: '/medicare-basics/', label: 'Return to Medicare Basics' },
      }}
    >
      <h2>Business identity</h2>
      <LegalIdentity />
      <dl className="term-list">
        <dt>Filed business name</dt>
        <dd>{site.name}, used by both agents as approved by the California Department of Insurance</dd>
        <dt>State of domicile</dt>
        <dd>{site.stateOfDomicile}</dd>
        <dt>Principal place of business</dt>
        <dd>{site.principalPlaceOfBusiness ?? <mark className="placeholder">[exact address on file with CDI — required before launch]</mark>}</dd>
        <dt>Licensed agents</dt>
        <dd>
          {chris.legalName}, California Insurance License #{chris.license}
          <br />
          {helga.legalName}, California Insurance License #{helga.license}
        </dd>
      </dl>
      <p>
        Each agent is individually licensed. AnchorPath Insurance Services is not a separately licensed agency or
        corporation. You can verify each license with the{' '}
        <ExtLink href={links.cdiLicense}>California Department of Insurance</ExtLink>.
      </p>

      <h2>Independent status</h2>
      <p>
        Chris and Helga are independent insurance agents. They can discuss only the products and plans they are
        licensed, certified, appointed, and authorized to offer. Being independent means they are not Medicare and are
        not employed by a single insurance company; it does not mean they represent every company or every plan.
      </p>

      <h2>Government non-affiliation</h2>
      <p>
        AnchorPath Insurance Services and its agents are not affiliated with or endorsed by the U.S. government or the
        federal Medicare program.
      </p>

      <h2>Organizations represented</h2>
      {site.tpmoCounts ? (
        <TpmoDisclaimer />
      ) : (
        <p>
          This website provides general Medicare education and does not market specific Medicare plans. If that
          changes, the organizations we represent and the disclaimer required by the Centers for Medicare &amp; Medicaid
          Services will appear here and wherever plan information is shown. For information on all of your options,
          contact <ExtLink href={links.medicare}>Medicare.gov</ExtLink> or 1-800-MEDICARE.
        </p>
      )}

      {site.advertisesMedigap && (
        <>
          <h2>Medicare Supplement notice</h2>
          <p className="medigap-notice">AN OUTLINE OF COVERAGE IS AVAILABLE UPON REQUEST.</p>
        </>
      )}

      <h2>Website content limitations</h2>
      <p>
        The information on this website is general educational information and is not a determination of eligibility,
        coverage, benefits, or costs. Medicare rules and plan details can change. Visit Medicare.gov or call
        1-800-MEDICARE for official Medicare information. See our <Link to="/terms/">Terms / Website Notice</Link>.
      </p>

      <h2>Contact</h2>
      <p>
        Phone: <TelLink tel={site.phone.tel}>{site.phone.display}</TelLink> ({site.phoneHours})
        <br />
        Email: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <p>
        To file a complaint about an insurance agent, contact the California Department of Insurance Consumer Hotline at
        1-800-927-4357 or visit <ExtLink href={links.cdiConsumers}>insurance.ca.gov</ExtLink>.
      </p>
    </EduPage>
  )
}
