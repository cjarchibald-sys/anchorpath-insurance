import { useState } from 'react'
import { HeroIllo, IndependenceIllo, GuidanceIllo, ExplainIllo, SupportIllo, AvatarSVG } from '../illustrations'

export default function Home({ setPage }) {
  const [email, setEmail] = useState('')
  const [leadSent, setLeadSent] = useState(false)
  const [submitText, setSubmitText] = useState(null)

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
          <div className="hero-tag">✦ <span>California Licensed</span> Life &amp; Health Agent</div>
          <h1>The Right Medicare Plan Starts With the <em>Right Advisor.</em></h1>
          <p className="hero-sub">
            As an independent agent, I work with multiple carriers so I can find the coverage
            that truly fits — your doctors, your prescriptions, your budget.
            No bias. No pressure. Just honest guidance.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => setPage('contact')}>Get Your Complimentary Medicare Review</button>
            <button className="btn-ghost" onClick={() => setPage('basics')}>Learn Medicare Basics</button>
          </div>
        </div>
        <div className="hero-visual"><HeroIllo /></div>
      </div>

      {/* Lead magnet */}
      <div className="lead-strip">
        <div className="lead-strip-inner">
          <div className="lead-strip-icon">📋</div>
          <div className="lead-strip-text">
            <strong>Get the Medicare Roadmap — at no charge</strong>
            <span>7 things to do before you turn 65. A practical checklist used by hundreds of Californians.</span>
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
        {['CA Licensed — Life & Health','Complimentary consultations','Independent & unbiased','Serving the Bay Area & beyond'].map(t => (
          <div key={t} className="trust-item"><span className="trust-check">✦</span> {t}</div>
        ))}
      </div>

      {/* Independence callout */}
      <div className="independence-band">
        <div className="independence-inner">
          <div className="independence-text">
            <div className="section-label">Why it matters</div>
            <h2>What it means to work with an independent agent</h2>
            <p>
              Not all Medicare advisors work the same way. As an independent agent, I'm appointed
              with multiple carriers — which means I can compare options across the full market
              and recommend what genuinely fits your situation.
            </p>
            <div className="independence-checks">
              {[
                'I compare plans across multiple carriers, not just one',
                'My recommendations start with your needs, not a product catalog',
                'You get one dedicated person — before, during, and after enrollment',
                'My service to you is always complimentary',
              ].map(t => (
                <div key={t} className="icheck">
                  <div className="icheck-dot">✦</div>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="independence-illo"><IndependenceIllo /></div>
        </div>
      </div>

      {/* Value cards */}
      <div className="section">
        <div className="section-label">Why work with me</div>
        <div className="section-title">You deserve a guide, not a salesperson</div>
        <div className="section-sub">
          Medicare decisions affect your health and your finances for years to come.
          I take the time to understand your situation before making any recommendation.
        </div>
        <div className="cards-3">
          <div className="card">
            <div className="card-illo" style={{background:'linear-gradient(160deg,#e8f4fb,#f0f7fc)'}}><GuidanceIllo /></div>
            <div className="card-body">
              <h3>Personalized guidance</h3>
              <p>Every person's health needs and budget are different. I'll help you compare plans based on your doctors, prescriptions, and priorities.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-illo" style={{background:'linear-gradient(160deg,#fdf3e0,#fffbf4)'}}><ExplainIllo /></div>
            <div className="card-body">
              <h3>Plain-language explanations</h3>
              <p>No acronyms left unexplained. I'll walk you through Parts A, B, C, and D — and what each one actually means for your coverage.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-illo" style={{background:'linear-gradient(160deg,#f0f7fc,#e8f4fb)'}}><SupportIllo /></div>
            <div className="card-body">
              <h3>Ongoing support</h3>
              <p>My relationship with you doesn't end when you enroll. I'm here year-round for questions, changes, and annual reviews.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="section" style={{paddingTop:0}}>
        <div className="section-label">How it works</div>
        <div className="section-title">Three simple steps to the right coverage</div>
        <div className="how-steps">
          {[
            ['1','We talk','A complimentary, no-obligation call to understand your health situation, current doctors, medications, and what matters most to you.'],
            ['2','I do the research','I compare plans across multiple carriers — Advantage, Supplement, and Part D — to find the best fit for your specific needs.'],
            ['3','You choose with confidence','I present your options clearly, answer every question, and help you enroll — at your own pace, with no pressure.'],
          ].map(([n,h,p]) => (
            <div key={n} className="step">
              <div className="step-num">{n}</div>
              <div className="step-body"><h4>{h}</h4><p>{p}</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonial-strip">
        <div className="testimonial-inner">
          {[
            { q: '"I was completely lost turning 65. One conversation and everything clicked. I finally felt like I understood what I was signing up for."', name:'Margaret T.', loc:'San Jose, CA', c1:'#ddeef8', c2:'#4a8bbf' },
            { q: '"No pressure at all. Just a really knowledgeable person who genuinely wanted to help me find the right plan. Couldn\'t ask for more."', name:'Robert K.', loc:'Oakland, CA', c1:'#fdf3e0', c2:'#d4921e' },
            { q: '"Switching plans during open enrollment felt overwhelming until I reached out. I saved money and got better coverage. Truly grateful."', name:'Linda M.', loc:'Palo Alto, CA', c1:'#e8f4fb', c2:'#2e6da4' },
          ].map(t => (
            <div key={t.name} className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <blockquote>{t.q}</blockquote>
              <div className="testimonial-author">
                <div className="t-avatar"><AvatarSVG color1={t.c1} color2={t.c2} /></div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-loc">{t.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-band">
        <h2>Ready to make sense of Medicare?</h2>
        <p>Let's start with a friendly conversation — completely complimentary, completely on your terms.</p>
        <button className="btn-cta" onClick={() => setPage('contact')}>Schedule Your Complimentary Call</button>
      </div>
    </>
  )
}
