import EduPage from '../components/EduPage'
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
      description="How AnchorPath Insurance Services collects, uses, shares, and protects information through this website, including our schedule-a-conversation form."
      lede="We collect as little information as we can, use it only to respond to you, and never sell it."
      cta={{
        title: 'Have a privacy question?',
        body: `Email ${site.email} or call ${site.phone.display}.`,
        primary: { to: '/schedule/', label: 'Contact us' },
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
      <p>When you submit our “Schedule a Conversation” form, we collect:</p>
      <ul>
        <li>Your first and last name</li>
        <li>Your email address and/or phone number, and your preferred contact method</li>
        <li>Your ZIP code</li>
        <li>Your meeting preferences, the kind of conversation you want, your general situation (for example, “turning 65”), and a preferred time of day</li>
        <li>Any short notes you choose to add</li>
        <li>A record of your consent: the consent wording and version you agreed to, the date and time, and the page you submitted from</li>
      </ul>
      <p>
        We do not ask for, and ask you not to send, Social Security numbers, Medicare numbers, financial information,
        detailed health information, or prescriptions through this website or ordinary email.
      </p>
      <h3>Information collected automatically</h3>
      <ul>
        <li>
          <strong>Technical data.</strong> Like most websites, our hosting provider processes your IP address, browser
          type, and pages requested to deliver and secure the site. When you submit the form, we record your IP address
          and browser type with your consent record.
        </li>
        <li>
          <strong>Analytics.</strong> We use a privacy-focused analytics service that does not use cookies and does not
          track you across other websites. It counts page views and actions such as button clicks and form completion,
          without recording what you type into the form.
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
        <li>To respond to your request and schedule the conversation you asked for, which is an insurance solicitation</li>
        <li>To keep records of your request and consent, as insurance and Medicare rules require</li>
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
        <li>Resend, which delivers form submissions to our agents’ email</li>
        <li>Our business email provider, where those messages are received</li>
      </ul>
      <p>We may also disclose information when required by law or to protect rights and safety.</p>

      <h2>Security</h2>
      <p>
        The website uses encrypted connections (HTTPS). Access to form submissions is limited to our licensed agents,
        and our accounts are protected with multifactor authentication. No method of transmission or storage is
        completely secure, which is one reason we ask you not to send sensitive information through the website.
      </p>

      <h2>Retention</h2>
      <p>
        We keep form submissions and the consent records that go with them for{' '}
        {site.privacy.leadRetention ?? <Pending>retention period required before launch</Pending>}. Medicare rules
        require records related to Medicare plan marketing and enrollment to be kept for 10 years, and we apply the
        same period to the requests you send us so we can show when and how you asked to be contacted.
      </p>
      <p>
        We keep information longer only when a law, regulation, government audit, or legal claim requires it, and only
        for as long as that requirement lasts. When the retention period ends, we securely delete the information or
        de-identify it so it can no longer be linked to you.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>You can ask us not to contact you again at any time, by phone, email, or by telling us during a conversation.</li>
        <li>You can ask to see, correct, or delete the information you submitted through this website.</li>
      </ul>
      <p>
        To make a request, email <a href={`mailto:${site.email}`}>{site.email}</a> or call {site.phone.display}.
      </p>

      <h2>Children</h2>
      <p>This website is intended for adults. We do not knowingly collect information from children under 16.</p>

      <h2>Other websites</h2>
      <p>
        We link to official resources such as Medicare.gov and Social Security. Those websites have their own privacy
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
