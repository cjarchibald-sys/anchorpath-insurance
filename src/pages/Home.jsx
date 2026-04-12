import { useState } from 'react'
import { HeroIllo, IndependenceIllo, GuidanceIllo, ExplainIllo, MedicarePathIllo, FamilyPathIllo } from '../illustrations'

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
          <div className="hero-tag">✦ <span>California Licensed</span> Life &amp; Health Agents</div>
          <h1>A clear path through Medicare and <em>health coverage decisions.</em></h1>
          <p className="hero-sub">
            Whether you're navigating Medicare or choosing a plan for yourself or your family,
            we help you understand your options, compare what matters, and make confident
            decisions — without pressure or confusion.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => setPage('contact')}>Schedule a Conversation</button>
            <button className="btn-ghost" onClick={() => setPage('contact')}>Explore Your Options</button>
          </div>
          <p className="hero-helper">Work directly with Chris and Helga — clear, personal guidance from two people who genuinely care about getting it right for you.</p>
        </div>
        <div className="hero-visual"><HeroIllo /></div>
      </div>

      {/* ── Two audience paths ───────────────────────────────────── */}
      <div className="paths-section">
        <div className="paths-inner">
          <div className="section-label paths-label">Which best describes you?</div>
          <div className="paths-grid">
            <div className="path-card path-card--blue">
              <div className="path-card-img"><MedicarePathIllo /></div>
              <div className="path-card-body">
                <h3>Medicare Coverage</h3>
                <p>Turning 65 or already on Medicare and not sure what to do next? We help you understand your options, avoid costly mistakes, and choose the coverage that fits your needs.</p>
                <button className="btn-path-blue" onClick={() => setPage('contact')}>Get Medicare Guidance →</button>
              </div>
            </div>
            <div className="path-card path-card--gold">
              <div className="path-card-img"><FamilyPathIllo /></div>
              <div className="path-card-body">
                <h3>Individual &amp; Family Health Plans</h3>
                <p>Need health coverage and want to make sure you're choosing the right plan? We help you compare your options and find a plan that fits your needs and budget.</p>
                <button className="btn-path-gold" onClick={() => setPage('contact')}>Explore Health Plan Options →</button>
              </div>
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
              ['Clear explanations, no jargon', "We explain your options in plain language so you actually understand what you're choosing."],
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
          'Medicare and individual health plan guidance',
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
              'Review Your Options',
              'We walk you through the coverage options available to you and explain what matters most, in plain language.',
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
            <h2>A different way to approach health coverage</h2>
            <p>
              Most people don't need more insurance options.<br />
              They need someone who can explain those options clearly and help them choose what's right.
            </p>
            <p style={{ marginTop: '0.75rem', fontStyle: 'italic', color: 'var(--blue)', fontFamily: "'Lora', serif" }}>
              That's what we do.
            </p>
            <div className="independence-checks" style={{ marginTop: '1.75rem' }}>
              {[
                'Clear, personalized guidance',
                'Help understanding your options',
                'Support for Medicare and health plan decisions',
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

      {/* ── Services ─────────────────────────────────────────────── */}
      <div className="section">
        <div className="section-label">Our focus</div>
        <div className="section-title">Two areas. Done well.</div>
        <div className="section-sub">
          We work in two areas — Medicare and individual or family health coverage.
          That's it. Keeping our focus narrow means we can give you our full attention.
        </div>
        <div className="cards-3 cards-2">
          <div className="card">
            <div className="card-illo"><GuidanceIllo /></div>
            <div className="card-body">
              <h3>Medicare Plans</h3>
              <p>We work with people turning 65, newly enrolled in Medicare, wondering whether their current plan still makes sense, or comparing Advantage, Medigap, and Part D options. We explain the differences clearly — so you can choose with confidence.</p>
              <div style={{ marginTop: '1rem' }}>
                <button className="btn-plan" onClick={() => setPage('basics')}>Learn About Medicare →</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-illo"><ExplainIllo /></div>
            <div className="card-body">
              <h3>Individual &amp; Family Health Insurance</h3>
              <p>We work with self-employed individuals, families buying their own coverage, people between jobs, and anyone who needs a health plan outside of an employer. We help you compare options and find something that actually fits.</p>
              <div style={{ marginTop: '1rem' }}>
                <button className="btn-plan" onClick={() => setPage('contact')}>Request a Coverage Review →</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Who we help ──────────────────────────────────────────── */}
      <div className="who-section">
        <div className="section-label">Who we help</div>
        <div className="section-title">You're in the right place if…</div>
        <div className="section-sub">
          If any of these describe your situation, we can help.
        </div>
        <div className="who-grid">
          {[
            "You're turning 65 and don't know where to start with Medicare",
            "You're already on Medicare and wondering if your current plan still makes sense",
            "You're self-employed and looking for health coverage that fits your budget",
            "You're between jobs and need coverage now",
            "You're shopping for a health plan for yourself or your family",
            "You just want to understand your options — with no pressure to buy",
          ].map(item => (
            <div key={item} className="who-item">
              <span className="who-check">✦</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Empathy ──────────────────────────────────────────────── */}
      <div className="empathy-section">
        <div className="empathy-inner">
          <p className="empathy-lead">Most people we talk to aren't sure what the right option is — they just know they don't want to get it wrong.</p>
          <p className="empathy-sub">We help make the process clearer, simpler, and easier to navigate.</p>
        </div>
      </div>

      {/* ── Micro-conversion ─────────────────────────────────────── */}
      <div className="micro-cta-section">
        <div className="micro-cta-inner">
          <h2>Not sure where to start?</h2>
          <p>
            That's completely normal. Many people come to us because they want help
            understanding their options before making a decision.
          </p>
          <button className="btn-primary" onClick={() => setPage('contact')}>Schedule a Conversation</button>
        </div>
      </div>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <div className="cta-band">
        <h2>Ready to find the right coverage?</h2>
        <p>Start with a conversation — complimentary, and completely on your terms.</p>
        <button className="btn-cta" onClick={() => setPage('contact')}>Schedule a Conversation</button>
      </div>
    </>
  )
}
