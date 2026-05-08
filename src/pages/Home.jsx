import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { HeroIllo, IndependenceIllo } from '../illustrations'

const BASE = 'https://anchorpath-insurance.vercel.app'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'AnchorPath Insurance Services',
  url: `${BASE}/`,
  description: 'California-licensed independent Medicare guidance.',
  areaServed: { '@type': 'State', name: 'California' },
  founder: { '@type': 'Person', name: 'Chris Archibald' },
}

export default function Home() {
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
      <Helmet>
        <title>AnchorPath Insurance Services | California Medicare Guidance</title>
        <meta name="description" content="California-licensed independent Medicare guidance. Compare plans honestly, understand the tradeoffs, and choose coverage that fits your life. Serving the Bay Area and all of California." />
        <link rel="canonical" href={`${BASE}/`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-tag">✦ <span>California Licensed</span> · Medicare Focus</div>
          <h1>Medicare is complicated. Choosing the right coverage doesn't have to be.</h1>
          <p className="hero-sub">
            We walk through your situation, compare the plans available to you side by side,
            and help you understand the tradeoffs — so you can choose the coverage that actually fits.
          </p>
          <div className="hero-btns">
            <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>Schedule a Conversation</Link>
            <Link to="/medicare-basics" className="btn-ghost" style={{ textDecoration: 'none' }}>Get Medicare Guidance</Link>
          </div>
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
              <p>Not sure how Medicare works or what to do first? AnchorPath Insurance Services walks you through the process step by step to help you make the right decision from the start.</p>
              <Link to="/contact" className="btn-path-blue" style={{ textDecoration: 'none' }}>Start Here →</Link>
            </div>
            <div className="scenario-card scenario-card--featured">
              <div className="scenario-num">New</div>
              <h3>New to Medicare</h3>
              <p>Already enrolled but not sure if you chose the right plan? Get personalized guidance on your options and what matters most for your situation.</p>
              <Link to="/contact" className="btn-path-blue" style={{ textDecoration: 'none' }}>Review Your Options →</Link>
            </div>
            <div className="scenario-card">
              <div className="scenario-num">↺</div>
              <h3>Reviewing Your Coverage</h3>
              <p>Plans change, and your needs change. A coverage review can help you evaluate whether your current plan still fits.</p>
              <Link to="/contact" className="btn-path-blue" style={{ textDecoration: 'none' }}>Request a Review →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── What to Expect ───────────────────────────────────────── */}
      <div className="expect-section">
        <div className="expect-inner">
          <div className="section-label" style={{ display: 'block', marginBottom: '0.4rem' }}>What to expect</div>
          <div className="section-title" style={{ marginBottom: '2rem' }}>Here's what a conversation looks like</div>
          <div className="expect-grid">
            {[
              ['A simple conversation about your situation', 'The process starts with listening — no forms, no scripts, no pressure to decide anything.'],
              ['Clear explanations without jargon', "Your Medicare options are explained in plain language so you actually understand what you're choosing."],
              ['Help comparing your options', "You'll get a walkthrough of what's available and what makes sense for your specific situation."],
              ['No pressure to choose anything', 'The goal is to help you feel informed. The decision is always yours, on your timeline.'],
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
            <strong>Complimentary Medicare Roadmap</strong>
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
          'CA-Licensed Insurance Agency',
          'No-cost, no-obligation consultations',
          'Independent — not tied to any single carrier',
          'Medicare guidance, clearly explained',
        ].map(t => (
          <div key={t} className="trust-item"><span className="trust-check">✦</span> {t}</div>
        ))}
      </div>

      {/* ── How it works ─────────────────────────────────────────── */}
      <div className="section">
        <div className="section-label">How it works</div>
        <div className="section-title">A simple, personal process</div>
        <div className="section-sub">AnchorPath Insurance Services doesn't start with products. It starts with you.</div>
        <div className="how-steps">
          {[
            [
              '1',
              'Understand Your Situation',
              'The process begins with learning about your needs, priorities, and questions — no forms, no pressure, just a real conversation.',
            ],
            [
              '2',
              'Review Your Medicare Options',
              "You'll get a clear walkthrough of the Medicare coverage options available to you, with plain-language explanations of what matters most.",
            ],
            [
              '3',
              'Make a Confident Decision',
              'AnchorPath Insurance Services helps you choose a plan that fits — with clarity and confidence, at whatever pace works for you.',
            ],
          ].map(([n, h, p]) => (
            <div key={n} className="step">
              <div className="step-num">{n}</div>
              <div className="step-body"><h4>{h}</h4><p>{p}</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Why AnchorPath Insurance Services ────────────────────── */}
      <div className="why-section">
        <div className="why-inner">
          <div className="why-text">
            <div className="section-label">Why AnchorPath Insurance Services</div>
            <h2>A different way to approach Medicare</h2>
            <p>
              Most people don't need more Medicare information.<br />
              They need someone who can explain their options clearly and help them choose what's right.
            </p>
            <p style={{ marginTop: '0.75rem', fontStyle: 'italic', color: 'var(--blue)', fontFamily: "'Lora', serif" }}>
              That's what AnchorPath Insurance Services is here for.
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
              <Link to="/about" className="btn-primary" style={{ textDecoration: 'none' }}>Meet the Team</Link>
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
            ['Turning 65', "Not sure where to start with Medicare? AnchorPath Insurance Services walks you through it from the beginning."],
            ['Already on Medicare', "Want a second opinion on your current plan? Get a fresh review of your options with clear, independent guidance."],
            ['Confused by the options', "Advantage, Medigap, Part D — it's a lot. AnchorPath Insurance Services explains the differences clearly so you can decide."],
            ['Losing employer coverage', "Transitioning off a work plan? Get guidance on your Medicare options and timing."],
            ['Reviewing your plan', "Your plan changed, or your needs did. A coverage review can help you evaluate whether your current plan still fits."],
            ['Managing drug costs', "Trying to keep prescription costs manageable? AnchorPath Insurance Services can help you find a Part D plan that works for your medications."],
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
          <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>Schedule a Conversation</Link>
        </div>
      </div>

      {/* ── Empathy ──────────────────────────────────────────────── */}
      <div className="empathy-section">
        <div className="empathy-inner">
          <p className="empathy-lead">Most people aren't sure what the right Medicare option is — they just know they don't want to get it wrong.</p>
          <p className="empathy-sub">AnchorPath Insurance Services helps make the process clearer, simpler, and easier to navigate.</p>
        </div>
      </div>

      {/* ── Micro-conversion ─────────────────────────────────────── */}
      <div className="micro-cta-section">
        <div className="micro-cta-inner">
          <h2>Not sure where to start?</h2>
          <p>
            That's completely normal. Most people just want help understanding
            their Medicare options before making a decision. AnchorPath Insurance Services
            is happy to have that conversation — no obligation, no pressure.
          </p>
          <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>Schedule a Conversation</Link>
          <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--muted)' }}>When you reach out, you'll work directly with Chris Archibald through AnchorPath Insurance Services.</p>
        </div>
      </div>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <div className="cta-band">
        <h2>Ready to get clear on Medicare?</h2>
        <p>Start with a conversation — complimentary, and completely on your terms.</p>
        <Link to="/contact" className="btn-cta" style={{ textDecoration: 'none' }}>Schedule a Conversation</Link>
      </div>
    </>
  )
}
