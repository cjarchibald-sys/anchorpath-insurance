import { useEffect, useState } from 'react'

// Appears after the visitor scrolls past about a screen and a half. Returns to
// the top and moves keyboard focus to the page heading.
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 1.5)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function goTop() {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
    document.getElementById('page-title')?.focus({ preventScroll: true })
  }

  return (
    <button type="button" className={`back-to-top${visible ? ' is-visible' : ''}`} onClick={goTop} tabIndex={visible ? 0 : -1} aria-hidden={!visible}>
      <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16">
        <path d="M3 10l5-5 5 5" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      Back to top
    </button>
  )
}
