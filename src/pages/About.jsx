import { AboutIllo } from '../illustrations'

export default function About({ setPage }) {
  return (
    <>
      <div className="about-split">
        <div className="about-illo"><AboutIllo /></div>
        <div className="about-content-hero">
          <div className="about-role">California Licensed Agents · Life &amp; Health</div>
          <h1>We built AnchorPath because health coverage decisions deserve real guidance — not guesswork.</h1>
          <p>We're Chris and Helga Archibald — licensed insurance agents and partners in business and in life. We started AnchorPath Insurance Services to help people navigate Medicare and health insurance with clarity, patience, and trust.</p>
        </div>
      </div>

      <div className="values-strip">
        <div className="values-inner">
          {[
            ['🌿', 'Honesty first', 'We tell you what we actually think is best for your situation — not what earns the biggest commission.'],
            ['🤲', 'Patience always', 'No rushing, no jargon. We move at your pace until you feel completely confident in your decision.'],
            ['🔍', 'Clear explanations', 'We believe you deserve to understand your coverage, not just have it. Complex terms, explained plainly.'],
            ['🌅', 'Long-term relationships', "We're building a practice based on trust, not transactions. We're here for the long haul."],
          ].map(([icon, h, p]) => (
            <div key={h} className="value-item">
              <div className="value-icon">{icon}</div>
              <h4>{h}</h4>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-body">
        <p>
          We believe choosing health coverage should feel less confusing and more personal.
          As licensed insurance agents working together, we built AnchorPath Insurance Services
          to help people navigate Medicare and health insurance decisions with clarity, patience,
          and trust.
        </p>
        <p className="pullquote">
          "We know these choices can feel overwhelming — especially when the stakes are high for
          your health, your family, and your budget."
        </p>
        <p>
          That's exactly why we work the way we do. We start by listening. We ask about your
          situation — your doctors, your medications, your priorities, your budget. Then we walk
          you through the options that are actually relevant to you, in plain language, with no
          pressure and no agenda other than helping you make the right choice.
        </p>
        <p>
          As independent agents, we're not tied to any single carrier. We can compare options
          across the market and recommend what genuinely makes sense for your situation.
          Whether you're turning 65, navigating Medicare for the first time, or looking for
          health coverage for yourself or your family — our goal is to make the process simpler,
          more understandable, and more personal for every client we serve.
        </p>
        <p>
          Our consultations are always complimentary. There's no obligation, no countdown clock,
          and no script — just a real conversation about your needs, your options, and how we
          can help.
        </p>
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
