import { Link, useLocation } from 'react-router-dom'
import Seo from '../components/Seo'
import { CtaLink, PageHero } from '../components/ui'

export default function NotFound() {
  const { pathname } = useLocation()
  return (
    <>
      <Seo path={pathname} title="Page not found" description="The page you are looking for could not be found." noindex />
      <PageHero title="We couldn’t find that page." lede="It may have moved, or the address may be mistyped. Here are some places to start." />
      <div className="container narrow prose">
        <ul>
          <li><Link to="/medicare-basics/">Medicare Basics</Link></li>
          <li><Link to="/turning-65/">Turning 65</Link></li>
          <li><Link to="/already-on-medicare/">Already on Medicare</Link></li>
          <li><Link to="/faq/">Frequently Asked Questions</Link></li>
        </ul>
        <div className="btn-row">
          <CtaLink to="/">Go to the home page</CtaLink>
          <CtaLink to="/schedule/" variant="secondary">Schedule a Conversation</CtaLink>
        </div>
      </div>
    </>
  )
}
