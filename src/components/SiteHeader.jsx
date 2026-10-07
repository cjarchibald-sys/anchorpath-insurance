import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site } from '../site.config'
import { navGroups, meetUs } from './navigation'
import { AgentPhones, CtaLink } from './ui'

// Logo mark plus wordmark. `reverse` is the light version for dark backgrounds.
// The mark is decorative here: the surrounding link or heading names the business.
export function Wordmark({ reverse = false }) {
  return (
    <span className="wordmark">
      <img
        className="wordmark-mark"
        src={reverse ? '/logo/logo-mark-reverse.svg' : '/logo/logo-mark.svg'}
        alt=""
        width="38"
        height="45"
      />
      <span className="wordmark-text">
        <span className="wordmark-name">AnchorPath</span>
        <span className="wordmark-sub">Insurance Services</span>
      </span>
    </span>
  )
}

function Dropdown({ group, open, onToggle }) {
  const { pathname } = useLocation()
  const active = group.items.some((i) => i.to === pathname)
  const id = `menu-${group.label.toLowerCase().replace(/\s+/g, '-')}`
  return (
    <li className="nav-item">
      <button
        type="button"
        className={`nav-trigger${active ? ' is-active' : ''}`}
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
      >
        {group.label}
        <svg aria-hidden="true" viewBox="0 0 12 12" width="12" height="12">
          <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </button>
      <ul id={id} className="dropdown" hidden={!open}>
        {group.items.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default function SiteHeader() {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)
  const { pathname } = useLocation()

  // Close menus on navigation. Adjusting state during render (not in an
  // effect) is React's recommended pattern for resetting on prop change.
  const [lastPath, setLastPath] = useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setOpenMenu(null)
    setMobileOpen(false)
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') {
        // Put focus back on the button that opened the menu, so keyboard users
        // keep their place instead of landing at the top of the page.
        const nav = navRef.current
        const active = document.activeElement
        const mobileMenuOpen = nav?.querySelector('.primary-nav.is-open')
        const dropdownOpen = nav?.querySelector('.dropdown:not([hidden])')
        if (nav?.contains(active) && (mobileMenuOpen || dropdownOpen)) {
          const target = mobileMenuOpen
            ? nav.querySelector('.menu-toggle')
            : active.closest('.nav-item')?.querySelector('button.nav-trigger')
          target?.focus()
        }
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }
    function onClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>{site.serviceArea}</span>
          <span>
            Call <AgentPhones cta="utility-bar" />
            <span className="utility-hours"> · {site.phoneHours}</span>
          </span>
        </div>
      </div>
      <div className="container header-inner" ref={navRef}>
        <Link to="/" className="brand" aria-label={`${site.name}, home`}>
          <Wordmark />
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={mobileOpen}
          aria-controls="primary-nav"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22">
            {mobileOpen ? (
              <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="2" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
            )}
          </svg>
          Menu
        </button>

        <nav id="primary-nav" aria-label="Primary" className={`primary-nav${mobileOpen ? ' is-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" end className="nav-trigger">
                Home
              </NavLink>
            </li>
            {navGroups.map((group) => (
              <Dropdown
                key={group.label}
                group={group}
                open={openMenu === group.label}
                onToggle={() => setOpenMenu((m) => (m === group.label ? null : group.label))}
              />
            ))}
            <li className="nav-item">
              <NavLink to={meetUs.to} className="nav-trigger">
                {meetUs.label}
              </NavLink>
            </li>
          </ul>
          <div className="nav-cta">
            <CtaLink to="/schedule/" label="Schedule a Conversation (header)">
              Schedule a Conversation
            </CtaLink>
          </div>
        </nav>
      </div>
    </header>
  )
}
