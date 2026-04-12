import { useState } from 'react'
import { HeroIllo, IndependenceIllo, GuidanceIllo, ExplainIllo, MedicarePathIllo, FamilyPathIllo } from '../illustrations'

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
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-tag">✦ <span>California Licensed</span> Life &amp; Health Agents</div>
          <h1>Health coverage guidance you can <em>actually trust.</em></h1>
          <p className="hero-sub">
            Medicare decisions and health insurance choices can feel complicated.
            We help you slow down, understand your real options, and choose coverage
            with clarity — without the pressure.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => setPage('contact')}>Schedule a Conversation</button>
            <button className="btn-ghost" onClick={() => setPage('contact')}>Explore Your Options</button>
          </div>
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
                <h3>Medicare</h3>
                <p>Turning 65, new to Medicare, or reviewing your current plan? We help you understand your options and choose coverage with confidence.</p>
                <button className="btn-path-blue" onClick={() => setPage('contact')}>Get Medicare Guidance →</button>
              </div>
            </div>
            <div className="path-card path-card--gold">
              <div className="path-card-img"><FamilyPathIllo /></div>
              <div className="path-card-body">
                <h3>Individual &amp; Family Health Plans</h3>
                <p>Need coverage for yourself or your family? We help you compare options and find a plan that fits your needs and budget.</p>
                <button className="btn-path-gold" onClick={() => setPage('contact')}>Explore Health Plan Options →</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Lead magnet ──────────────────────────────────────────── */}
      <div className="lead-strip">
        <div className="lead-strip-inner">
          <div className="lead-strip-icon">📋</div>
          <div className="lead-strip-text">
            <strong>Free Medicare Roadmap — yours at no charge</strong>
            <span>A plain-language guide to help you understand your Medicare options before you enroll.</span>
          </div>
          {!leadSent ? (
            <form className="lead-form" onSubmit={handleLead}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button type="submit" className="btn-gold">Send Me the Guide →</button>
            </form>
          ) : (
            <div className="lead-success">✓ On its way to your inbox!</div>
          )}
        </div>
      </div>

      {/* ── Trust bar ────────────────────────────────────────────── */}
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
        <div className="section-sub">
          We don't start with products. We start with you.
        </div>
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
              'We walk you through the coverage options available to you and explain what matters most, in plain language you can actually use.',
            ],
            [
              '3',
              'Make a Confident Decision',
              'We help you choose a plan that fits your needs — with clarity and confidence, at whatever pace works for you.',
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
            <h2>Guidance first. Products second.</h2>
            <p>
              Most people navigating health coverage don't need more options thrown at them —
              they need someone who will slow down, listen, and explain things clearly.
              That's how we work.
            </p>
            <div className="independence-checks" style={{ marginTop: '1.5rem' }}>
              {[
                'Clear, personalized guidance — tailored to your actual situation',
                'Support for Medicare and individual or family health coverage decisions',
                'Independent — we compare options across multiple carriers',
                'A calm, no-pressure approach — education first, always',
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
          We work in two areas — Medicare and individual/family health coverage.
          That's it. Keeping our focus narrow means we can serve you well in the decisions that matter most.
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
          We serve a focused group of people. If any of these describe your situation, we'd love to talk.
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
        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
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
