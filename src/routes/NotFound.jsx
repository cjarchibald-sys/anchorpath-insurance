import Seo from '../components/Seo'
import { CtaLink, PageHero } from '../components/ui'
import { useLocation } from 'react-router-dom'

export default function NotFound() {
  const { pathname } = useLocation()
  return (
    <>
      <Seo path={pathname} title="Page not found" description="The page you are looking for could not be found." noindex />
      <PageHero title="We couldn’t find that page." lede="It may have moved, or the address may be mistyped." />
      <div className="container narrow prose">
        <div className="btn-row">
          <CtaLink to="/">Go to the home page</CtaLink>
          <CtaLink to="/contact/" variant="secondary">Contact Us</CtaLink>
        </div>
      </div>
    </>
  )
}
