import { Link } from 'react-router-dom'
import EduPage from '../components/EduPage'
import { site } from '../site.config'

export default function Terms() {
  return (
    <EduPage
      path="/terms/"
      title="Terms / Website Notice"
      description="Terms of use and website notice for AnchorPath Insurance Services, including the limits of the educational information on this website."
      lede="Please read this notice before relying on information from this website."
      cta={{
        title: 'Questions about something you read here?',
        primary: { to: '/schedule/', label: 'Schedule a Conversation' },
        secondary: { to: '/licensing-disclosures/', label: 'Licensing & Disclosures' },
      }}
    >
      <h2>Educational information only</h2>
      <p>
        The information on this website is general educational information and is not a determination of eligibility,
        coverage, benefits, or costs. It is not legal, tax, or medical advice, and it is not a recommendation of any
        plan. Medicare rules and plan details can change. Visit Medicare.gov or call 1-800-MEDICARE for official
        Medicare information.
      </p>

      <h2>No agent relationship from browsing</h2>
      <p>
        Visiting this website or submitting our form does not create an agent–client relationship or enroll you in any
        coverage. Any plan-specific discussion happens only through the required appointment process, and enrollment
        happens only through approved, secure systems.
      </p>

      <h2>Not affiliated with the government</h2>
      <p>
        {site.name} and its agents are not affiliated with or endorsed by the U.S. government or the federal Medicare
        program. See <Link to="/licensing-disclosures/">Licensing &amp; Disclosures</Link>.
      </p>

      <h2>Links to other websites</h2>
      <p>
        We link to official and nonprofit resources for your convenience. We do not control those websites and are not
        responsible for their content or availability.
      </p>

      <h2>Use of this website</h2>
      <p>
        Please use this website lawfully and do not attempt to disrupt it or submit false information through it. The
        text and design of this website belong to {site.name}; you may print or share pages for personal,
        non-commercial use.
      </p>

      <h2>Accuracy and changes</h2>
      <p>
        We review our content regularly and date each page, but we cannot guarantee that everything is complete or
        current at every moment. We may update this website and this notice at any time.
      </p>

      <h2>Governing law</h2>
      <p>This notice is governed by the laws of the State of California.</p>
    </EduPage>
  )
}
