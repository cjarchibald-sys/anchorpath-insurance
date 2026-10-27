import EduPage from '../components/EduPage'
import { AgentPhones } from '../components/ui'
import { formatDate } from '../content/pages'
import { site } from '../site.config'

function Pending({ children }) {
  return <mark className="placeholder">[{children}]</mark>
}

// Drafted to match this site's actual technology (Section 9.13: "no template
// fiction"). Update whenever vendors, cookies, or data flows change, and have
// counsel review before launch.
export default function Privacy() {
  return (
    <EduPage
      path="/privacy/"
      title="Privacy Policy"
      description="How AnchorPath Insurance Services collects, uses, shares, and protects information through this website and when you call or email us."
      lede="We collect as little information as we can, use it only to respond to you, and never sell it."
      cta={{
        title: 'Have a privacy question?',
        body: `Email ${site.email} or call a licensed insurance agent: Chris at ${site.agents[0].phone.display} or Helga at ${site.agents[1].phone.display}.`,
        primary: { to: '/contact/', label: 'Contact Us' },
      }}
    >
      <p>
        <strong>Effective date:</strong>{' '}
        {site.privacy.effectiveDate ? formatDate(site.privacy.effectiveDate) : <Pending>effective date required before launch</Pending>}
      </p>
      <p>
        This policy describes how {site.name} (“we,” “us”), operated by independent insurance agents Christopher
        Archibald and Helga Saito-Archibald, handles information collected through this website. It is provided under
        the California Online Privacy Protection Act (CalOPPA).
      </p>

      <h2>Information we collect</h2>
      <h3>Information you give us</h3>
      <p>
        This website has no forms and does not ask you to enter any information. When you call or email us, we receive
        what you choose to share, such as your name, phone number, email address, and your message.
      </p>
      <p>
        We ask you not to send Social Security numbers, Medicare numbers, financial information, detailed health
        information, or prescriptions by ordinary email.
      </p>
      <h3>Information collected automatically</h3>
      <ul>
        <li>
          <strong>Technical data.</strong> Like most websites, our hosting provider processes your IP address, browser
          type, and pages requested to deliver and secure the site.
        </li>
        <li>
          <strong>Analytics.</strong> We use a privacy-focused analytics service that does not use cookies and does not
          track you across other websites. It counts page views and actions such as button clicks, including taps on our
          phone numbers.
        </li>
      </ul>

      <h2>Cookies and tracking</h2>
      <p>
        This website does not use advertising cookies, advertising pixels, retargeting, or session recording. It does
        not use cookies for analytics. Because we do not track visitors across other websites, we do not respond
        differently to “Do Not Track” browser signals; the same privacy-protective practices apply to everyone.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To respond to your call or email</li>
        <li>To keep records of our contact with you, as insurance and Medicare rules require</li>
        <li>To honor requests not to be contacted</li>
        <li>To keep the website secure, working, and useful</li>
      </ul>

      <h2>How we share information</h2>
      <p>
        We do not sell or rent your personal information, and we do not share it with other marketing organizations. We
        share it only with service providers that help us operate, under their own security obligations:
      </p>
      <ul>
        <li>Vercel, which hosts this website and provides privacy-focused analytics</li>
        <li>Our business email provider, where your emails are received</li>
        <li>Our business phone service, which records calls</li>
      </ul>
      <p>We may also disclose information when required by law or to protect rights and safety.</p>

      <h2>Security</h2>
      <p>
        The website uses encrypted connections (HTTPS). Access to your emails and call records is limited to our licensed agents,
        and our accounts are protected with multifactor authentication. No method of transmission or storage is
        completely secure, which is one reason we ask you not to send sensitive information by email.
      </p>

      <h2>How Long Do We Keep Your Information?</h2>
      <p>
        <strong>In Short:</strong>{' '}
        <em>
          We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy
          unless otherwise required by law.
        </em>
      </p>
      <p>
        We will only keep your personal information for as long as it is necessary for the purposes set out in this
        Privacy Policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or
        other legal requirements).
      </p>
      <p>
        Specifically, we keep the messages you send us and records of our contact with you for{' '}
        {site.privacy.leadRetention ?? <Pending>retention period required before launch</Pending>}. Medicare rules
        require records related to Medicare plan marketing and enrollment to be kept for 10 years, and we apply the
        same period to the messages you send us so we can show when and how you contacted us.
      </p>
      <p>
        When we have no ongoing legitimate business need to process your personal information, we will either delete
        or anonymize such information, or, if this is not possible (for example, because your personal information has
        been stored in backup archives), then we will securely store your personal information and isolate it from any
        further processing until deletion is possible.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>You can ask us not to contact you again at any time, by phone, email, or by telling us during a conversation.</li>
        <li>You can ask to see, correct, or delete the information you have sent us.</li>
      </ul>
      <p>
        To make a request, email <a href={`mailto:${site.email}`}>{site.email}</a> or call a licensed insurance agent: <AgentPhones />.
      </p>

      <h2>Children</h2>
      <p>This website is intended for adults. We do not knowingly collect information from children under 16.</p>

      <h2>Other websites</h2>
      <p>
        We link to official resources such as the California Department of Insurance. Those websites have their own privacy
        policies, and we are not responsible for their practices.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If we change this policy, we will post the updated version here with a new effective date. If a change
        materially affects how we use information you already gave us, we will ask for your consent where required.
      </p>
    </EduPage>
  )
}
