import { useState } from 'react'
import { HeroIllo, IndependenceIllo } from '../illustrations'

export default function Home({ setPage }) {
  const [email, setEmail] = useState('')
  const [leadSent, setLeadSent] = useState(false)
  const [leadSending, setLeadSending] = useState(false)
  const [leadError, setLeadError] = useState(null)

  async function handleLead(e) {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setLeadSending(true)
    setLeadError(null)
    try {
      const res = await fetch('/api/send-roadmap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setLeadSent(true)
      } else {
        setLeadError('Something went wrong. Please try again.')
      }
    } catch {
      setLeadError('Unable to send. Please try again.')
    } finally {
      setLeadSending(false)
    }
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-tag">✦ <span>California Licensed</span> Medicare Specialists</div>
          <h1>Medicare is complicated. <em>We help you make the right decision—clearly and confidently.</em></h1>
          <p className="hero-sub">
            Whether you're turning 65, new to Medicare, or reviewing your current coverage,
            we help you understand your options, compare what matters, and choose with
            confidence — without pressure or confusion.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => setPage('contact')}>Schedule a Conversation</button>
            <button className="btn-ghost" onClick={() => setPage('basics')}>Get Medicare Guidance</button>
          </div>
          <p className="hero-helper">When you reach out, you'll be working directly with us, Chris and Helga.</p>
        </div>
        <div className="hero-visual"><HeroIllo /></div>
      </div>

      {/* ── How We Can Help ──────────────────────────────────────── */}
      <div className="scenarios-section">
        <div className="scenarios-inner">
          <div className="section-label" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>How we can help</div>
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Where are you in your Medicare journey?</div>
          <p style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: '2.5rem', fontSize: '1rem' }}>Tell us where you are and we'll help you figure out the rest.</p>
          <div className="scenarios-grid">
            <div className="scenario-card">
              <div className="scenario-num">65</div>
              <h3>Turning 65</h3>
              <p>Not sure how Medicare works or what to do first? We walk you through the process step by step so you can make the right decision from the start.</p>
              <button className="btn-path-blue" onClick={() => setPage('contact')}>Start Here →</button>
            </div>
            <div className="scenario-card scenario-card--featured">
              <div className="scenario-num">New</div>
              <h3>New to Medicare</h3>
              <p>Already enrolled but not sure if you chose the right plan? We help you review your options and understand what matters most.</p>
              <button className="btn-path-blue" onClick={() => setPage('contact')}>Review Your Options →</button>
            </div>
            <div className="scenario-card">
              <div className="scenario-num">↺</div>
              <h3>Reviewing Your Coverage</h3>
              <p>Plans change, and your needs change. We help you evaluate your current coverage and decide if it still fits.</p>
              <button className="btn-path-blue" onClick={() => setPage('contact')}>Request a Review →</button>
            </div>
          </div>
        </div>
      </div>

      {/* ── What to Expect ───────────────────────────────────────── */}
      <div className="expect-section">
        <div className="expect-inner">
          <div className="section-label" style={{ display: 'block', marginBottom: '0.4rem' }}>What to expect</div>
          <div className="section-title" style={{ marginBottom: '2rem' }}>Here's what a conversation with us looks like</div>
          <div className="expect-grid">
            {[
              ['A simple conversation about your situation', 'We start by listening — no forms, no scripts, no pressure to decide anything.'],
              ['Clear explanations without jargon', "We explain your Medicare options in plain language so you actually understand what you're choosing."],
              ['Help comparing your options', "We walk you through what's available and what makes sense for your specific situation."],
              ['No pressure to choose anything', 'Our goal is to help you feel informed. The decision is always yours, on your timeline.'],
            ].map(([h, p]) => (
              <div key={h} className="expect-item">
                <div className="expect-check-mark">✦</div>
                <h4>{h}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Lead magnet ──────────────────────────────────────────── */}
      <div className="lead-strip">
        <div className="lead-strip-inner">
          <div className="lead-strip-icon">📋</div>
          <div className="lead-strip-text">
            <strong>Free Medicare Roadmap</strong>
            <span>A plain-language guide to help you understand your Medicare options before you enroll.</span>
          </div>
          {!leadSent ? (
            <div>
              <form className="lead-form" onSubmit={handleLead}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  disabled={leadSending}
                />
                <button type="submit" className="btn-gold" disabled={leadSending}>
                  {leadSending ? 'Sending…' : 'Send Me the Guide →'}
                </button>
              </form>
              {leadError && <p style={{ color: '#c62828', fontSize: '0.82rem', marginTop: '0.5rem' }}>{leadError}</p>}
            </div>
          ) : (
            <div className="lead-success">✓ On its way to your inbox!</div>
          )}
        </div>
      </div>

      {/* ── Credentials bar ──────────────────────────────────────── */}
      <div className="trust-bar">
        {[
          'CA Licensed Life & Health Agents',
          'No-cost, no-obligation consultations',
          'Independent — not tied to any single carrier',
          'Focused exclusively on Medicare',
        ].map(t => (
          <div key={t} className="trust-item"><span className="trust-check">✦</span> {t}</div>
        ))}
      </div>

      {/* ── How it works ─────────────────────────────────────────── */}
      <div className="section">
        <div className="section-label">How it works</div>
        <div className="section-title">A simple, personal process</div>
        <div className="section-sub">We don't start with products. We start with you.</div>
        <div className="how-steps">
          {[
            [
              '1',
              'Understand Your Situation',
              'We start by learning about your needs, priorities, and questions — no forms, no pressure, just a real conversation.',
            ],
            [
              '2',
              'Review Your Medicare Options',
              'We walk you through the Medicare coverage options available to you and explain what matters most, in plain language.',
            ],
            [
              '3',
              'Make a Confident Decision',
              'We help you choose a plan that fits — with clarity and confidence, at whatever pace works for you.',
            ],
          ].map(([n, h, p]) => (
            <div key={n} className="step">
              <div className="step-num">{n}</div>
              <div className="step-body"><h4>{h}</h4><p>{p}</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Why AnchorPath ───────────────────────────────────────── */}
      <div className="why-section">
        <div className="why-inner">
          <div className="why-text">
            <div className="section-label">Why AnchorPath</div>
            <h2>A different way to approach Medicare</h2>
            <p>
              Most people don't need more Medicare information.<br />
              They need someone who can explain their options clearly and help them choose what's right.
            </p>
            <p style={{ marginTop: '0.75rem', fontStyle: 'italic', color: 'var(--blue)', fontFamily: "'Lora', serif" }}>
              That's what we do.
            </p>
            <div className="independence-checks" style={{ marginTop: '1.75rem' }}>
              {[
                'Clear, personalized guidance',
                'Help understanding your Medicare options',
                'Support comparing plans',
                'A calm, no-pressure approach',
              ].map(t => (
                <div key={t} className="icheck">
                  <div className="icheck-dot">✦</div>
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <button className="btn-primary" onClick={() => setPage('about')}>Learn About Us</button>
            </div>
          </div>
          <div className="why-illo"><IndependenceIllo /></div>
        </div>
      </div>

      {/* ── Who we help ──────────────────────────────────────────── */}
      <div className="who-section">
        <div className="section-label">Who we help</div>
        <div className="section-title">You're in the right place if…</div>
        <div className="who-slim">
          {[
            ['Turning 65', "Not sure where to start with Medicare? We walk you through it from the beginning."],
            ['Already on Medicare', "Want a second opinion on your current plan? We help you review your options with fresh eyes."],
            ['Confused by the options', "Advantage, Medigap, Part D — it's a lot. We explain the differences clearly so you can decide."],
          ].map(([h, p]) => (
            <div key={h} className="who-slim-item">
              <span className="who-check">✦</span>
              <div>
                <strong>{h}</strong>
                <p>{p}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn-primary" onClick={() => setPage('contact')}>Schedule a Conversation</button>
        </div>
      </div>

      {/* ── Empathy ──────────────────────────────────────────────── */}
      <div className="empathy-section">
        <div className="empathy-inner">
          <p className="empathy-lead">Most people we talk to just want to make sure they're not making the wrong decision.</p>
          <p className="empathy-sub">We help make the process clearer, simpler, and easier to navigate.</p>
        </div>
      </div>

      {/* ── Micro-conversion ─────────────────────────────────────── */}
      <div className="micro-cta-section">
        <div className="micro-cta-inner">
          <h2>Not sure where to start?</h2>
          <p>
            That's completely normal. Most people we talk to just want help understanding
            their Medicare options before making a decision. We're happy to have that
            conversation — no obligation, no pressure.
          </p>
          <button className="btn-primary" onClick={() => setPage('contact')}>Schedule a Conversation</button>
          <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--muted)' }}>When you reach out, you'll be working directly with Chris and Helga.</p>
        </div>
      </div>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <div className="cta-band">
        <h2>Ready to feel confident about Medicare?</h2>
        <p>Start with a conversation — complimentary, and completely on your terms.</p>
        <button className="btn-cta" onClick={() => setPage('contact')}>Schedule a Conversation</button>
      </div>
    </>
  )
}
