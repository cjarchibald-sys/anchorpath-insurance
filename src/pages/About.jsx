import { AboutIllo } from '../illustrations'

export default function About({ setPage }) {
  return (
    <>
      {/* ── Hero split ───────────────────────────────────────────── */}
      <div className="about-split">
        <div className="about-illo"><AboutIllo /></div>
        <div className="about-content-hero">
          <div className="about-role">California Licensed Agents · Medicare Specialists</div>
          <h1>We believe Medicare decisions should feel less confusing and more personal.</h1>
          <p>
            We're Chris and Helga Archibald — licensed insurance agents and partners in
            business and in life. We built AnchorPath Insurance Services to help people
            navigate Medicare with clarity, patience, and a straightforward approach.
          </p>
        </div>
      </div>

      {/* ── Values ───────────────────────────────────────────────── */}
      <div className="values-strip">
        <div className="values-inner">
          {[
            ['🌿', 'We tell you the truth', 'We tell you what we actually think makes sense for your situation — not what earns the biggest commission.'],
            ['🤲', 'We work at your pace', 'No rushing, no pressure. We move as quickly or slowly as you need until you feel completely clear.'],
            ['🔍', 'We explain things plainly', "Medicare explained so it actually makes sense. You deserve to understand what you're choosing."],
            ['🌅', 'We stay with you', "We're here before, during, and after enrollment — not just for the sale."],
          ].map(([icon, h, p]) => (
            <div key={h} className="value-item">
              <div className="value-icon">{icon}</div>
              <h4>{h}</h4>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Our story ────────────────────────────────────────────── */}
      <div className="about-body">
        <p>
          Medicare has a lot of moving parts — Part A, Part B, Part C, Part D, Medigap,
          enrollment windows, penalty rules. Most people we talk to aren't confused because
          they haven't tried to understand it. They're confused because the system itself is
          genuinely complicated.
        </p>
        <p>
          That's why we focus entirely on Medicare. Not general health insurance, not life
          insurance — Medicare. We've gone deep on the details so we can explain them clearly
          to the people who need to make real decisions about their coverage.
        </p>
        <p>
          We know how much these choices matter. The right Medicare plan can mean the difference
          between manageable costs and unexpected bills. That's exactly why we take the time to
          explain your options clearly, without rushing you toward a decision.
        </p>
        <p className="pullquote">
          "Our goal is simple: help you understand your options and feel confident in your decision."
        </p>
        <p>
          When you work with AnchorPath, you're working directly with us — not a call center,
          not a rotating team of representatives. We'll learn your situation, walk you through
          your Medicare options, and help you find coverage that actually fits.
        </p>
        <p>
          As independent agents, we're not tied to any single carrier. That means we can look
          across the market and recommend what genuinely makes sense for your circumstances —
          whether that's Original Medicare with a supplement, a Medicare Advantage plan, or
          something else entirely.
        </p>
        <p>
          Our consultations are always complimentary. No obligation, no pressure —
          just a real conversation about your situation and your Medicare options.
        </p>

        {/* ── Credentials ──────────────────────────────────────── */}
        <div className="creds">
          {[
            '🏅 CA Life & Health Licensed',
            '📍 Serving California',
            '🔒 Independent Agents',
            '📞 Complimentary consultations',
          ].map(c => (
            <div key={c} className="cred-badge">{c}</div>
          ))}
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <button className="btn-primary" onClick={() => setPage('contact')}>Schedule a Conversation</button>
        </div>
      </div>
    </>
  )
}
