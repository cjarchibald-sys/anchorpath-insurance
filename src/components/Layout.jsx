import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

// On navigation: scroll to the #hash target if there is one, otherwise to the
// top, and move focus to the page heading so screen readers announce the page.
function useRouteFocus() {
  const { pathname, hash } = useLocation()
  const firstRender = useRef(true)
  useEffect(() => {
    // Leave the initial page load to the browser so the skip link stays first in tab order.
    const initial = firstRender.current
    firstRender.current = false
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) {
        el.scrollIntoView()
        if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1')
        if (!initial) el.focus({ preventScroll: true })
        return
      }
    }
    if (initial) return
    window.scrollTo(0, 0)
    document.getElementById('page-title')?.focus({ preventScroll: true })
  }, [pathname, hash])
}

export default function Layout() {
  useRouteFocus()
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  )
}
