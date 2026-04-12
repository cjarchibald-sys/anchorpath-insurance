import { useState } from 'react'
import { HeroIllo, IndependenceIllo, GuidanceIllo, ExplainIllo } from '../illustrations'

export default function Home({ setPage }) {
  const [email, setEmail] = useState('')
  const [leadSent, setLeadSent] = useState(false)

  function handleLead(e) {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setLeadSent(true)
  }

  return (
    <>
      {/* Hero */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-tag">✦ <span>California Licensed</span> Life &amp; Health Agents</div>
          <h1>A clear path to the <em>right health coverage.</em></h1>
          <p className="hero-sub">
            Whether you're navigating Medicare or choosing a plan for yourself or your family,
            we help you understand your options and make confident decisions.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => setPage('contact')}>Schedule a Conversation</button>
            <button className="btn-ghost" onClick={() => setPage('contact')}>Explore Your Options</button>
          </div>
        </div>
        <div className="hero-visual"><HeroIllo /></div>
      </div>

      {/* Two audience paths */}
      <div className="paths-section">
        <div className="paths-inner">
          <div className="section-label paths-label">Who are you looking for help with?</div>
          <div className="paths-grid">
            <div className="path-card path-card--blue">
              <div className="path-icon">🏥</div>
              <h3>Medicare Coverage</h3>
              <p>Turning 65? Already on Medicare? Need help understanding your options or reviewing your current plan? We help make Medicare easier to understand and easier to navigate.</p>
              <button className="btn-path-blue" onClick={() => setPage('contact')}>Get Medicare Guidance →</button>
            </div>
            <div className="path-card path-card--gold">
              <div className="path-icon">👨‍👩‍👧</div>
              <h3>Individual &amp; Family Health Plans</h3>
              <p>Need health coverage for yourself or your family? Whether you're self-employed, between jobs, or simply exploring your options, we help you find a plan that fits your needs and budget.</p>
              <button className="btn-path-gold" onClick={() => setPage('contact')}>Explore Health Plan Options →</button>
            </div>
          </div>
        </div>
      </div>

      {/* Lead magnet */}
      <div className="lead-strip">
        <div className="lead-strip-inner">
          <div className="lead-strip-icon">📋</div>
          <div className="lead-strip-text">
            <strong>Get the Medicare Roadmap — at no charge</strong>
            <span>A practical guide to help you understand your Medicare options before you enroll.</span>
          </div>
          {!leadSent ? (
            <form className="lead-form" onSubmit={handleLead}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button type="submit" className="btn-gold">Send Me the Roadmap →</button>
            </form>
          ) : (
            <div className="lead-success">✓ On its way to your inbox!</div>
          )}
        </div>
      </div>

      {/* Trust bar */}
      <div className="trust-bar">
        {[
          'CA Licensed — Life & Health',
          'Complimentary consultations',
          'Independent & unbiased',
          'Medicare & individual health coverage',
        ].map(t => (
          <div key={t} className="trust-item"><span className="trust-check">✦</span> {t}</div>
        ))}
      </div>

      {/* How We Help — 3 steps */}
      <div className="section">
        <div className="section-label">How we help</div>
        <div className="section-title">A simple, personal process</div>
        <div className="section-sub">
          We don't start with products. We start with you — your situation, your questions, and what matters most.
        </div>
        <div className="how-steps">
          {[
            [
              '1',
              'Understand Your Situation',
              'We start by learning about your needs, priorities, and questions — no forms to fill out, no pressure, just a real conversation.',
            ],
            [
              '2',
              'Review Your Options',
              'We walk you through the coverage options available and explain what matters most, in plain language you can actually use.',
            ],
            [
              '3',
              'Make a Confident Decision',
              'We help you choose a path that fits your needs, with clarity and confidence — at whatever pace works for you.',
            ],
          ].map(([n, h, p]) => (
            <div key={n} className="step">
              <div className="step-num">{n}</div>
              <div className="step-body"><h4>{h}</h4><p>{p}</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* Why AnchorPath differentiation */}
      <div className="why-section">
        <div className="why-inner">
          <div className="why-text">
            <div className="section-label">Why AnchorPath</div>
            <h2>A different kind of insurance experience</h2>
            <p>
              Most people don't need more insurance jargon. They need someone who can explain
              their options clearly and help them make the right decision. That's how we work.
            </p>
            <div className="independence-checks" style={{ marginTop: '1.5rem' }}>
              {[
                'Clear, personalized guidance — not a one-size-fits-all pitch',
                'Support for Medicare and individual or family health coverage decisions',
                'A no-pressure, education-first approach',
                'Help understanding your options, not just selling plans',
              ].map(t => (
                <div key={t} className="icheck">
                  <div className="icheck-dot">✦</div>
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <button className="btn-primary" onClick={() => setPage('contact')}>Schedule a Conversation</button>
            </div>
          </div>
          <div className="why-illo"><IndependenceIllo /></div>
        </div>
      </div>

      {/* Services — two focus areas */}
      <div className="section">
        <div className="section-label">What we offer</div>
        <div className="section-title">Two areas of focus</div>
        <div className="section-sub">
          We keep our focus intentional — so we can serve you well in the decisions that matter most.
        </div>
        <div className="cards-3 cards-2">
          <div className="card">
            <div className="card-illo" style={{ background: 'linear-gradient(160deg,#e8f4fb,#f0f7fc)' }}><GuidanceIllo /></div>
            <div className="card-body">
              <h3>Medicare Plans</h3>
              <p>Guidance for those turning 65, enrolling in Medicare, reviewing existing coverage, or comparing plan options including Medicare Advantage, Medigap, and Part D.</p>
              <div style={{ marginTop: '1rem' }}>
                <button className="btn-plan" onClick={() => setPage('basics')}>Learn About Medicare →</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-illo" style={{ background: 'linear-gradient(160deg,#fdf3e0,#fffbf4)' }}><ExplainIllo /></div>
            <div className="card-body">
              <h3>Individual &amp; Family Health Insurance</h3>
              <p>Help evaluating health plan options for individuals, couples, and families seeking coverage outside an employer plan — including marketplace and private options.</p>
              <div style={{ marginTop: '1rem' }}>
                <button className="btn-plan" onClick={() => setPage('contact')}>Request a Coverage Review →</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Experience — placeholder for real testimonials */}
      {/* TODO: Replace with real client testimonials when available */}
      <div className="testimonial-strip">
        <div className="testimonial-placeholder">
          <div className="section-label" style={{ display: 'block', marginBottom: '0.5rem' }}>Client Experience</div>
          <div className="section-title" style={{ marginBottom: '0.75rem' }}>What our clients say</div>
          <p style={{ maxWidth: '520px', margin: '0 auto', color: 'var(--muted)', fontSize: '1rem' }}>
            We'll share client experiences here as they become available.
            Hearing from the people we've helped is something we value deeply.
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="cta-band">
        <h2>Ready to find the right coverage?</h2>
        <p>Start with a conversation — complimentary, and completely on your terms.</p>
        <button className="btn-cta" onClick={() => setPage('contact')}>Schedule a Conversation</button>
      </div>
    </>
  )
}
