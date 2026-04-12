import { AboutIllo } from '../illustrations'

export default function About({ setPage }) {
  return (
    <>
      {/* ── Hero split ───────────────────────────────────────────── */}
      <div className="about-split">
        <div className="about-illo"><AboutIllo /></div>
        <div className="about-content-hero">
          <div className="about-role">California Licensed Agents · Life &amp; Health</div>
          <h1>We built AnchorPath because health coverage decisions deserve real guidance — not guesswork.</h1>
          <p>
            We're Chris and Helga Archibald — licensed insurance agents and partners in
            business and in life. We started AnchorPath Insurance Services to help people
            navigate Medicare and health insurance decisions with clarity, patience, and trust.
          </p>
        </div>
      </div>

      {/* ── Values ───────────────────────────────────────────────── */}
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

      {/* ── Our story ────────────────────────────────────────────── */}
      <div className="about-body">
        <p>
          The idea behind AnchorPath is simple. Most people making health coverage decisions —
          whether they're approaching Medicare or shopping for a family health plan — don't have
          a trusted guide in their corner. They're sorting through options on their own, often
          under time pressure, without a clear picture of what they're actually choosing or what
          it means for their health and their budget.
        </p>
        <p className="pullquote">
          "We know these choices can feel overwhelming — especially when the stakes are high
          for your health, your family, and your budget."
        </p>
        <p>
          That's why we work the way we do. We start by listening. We ask about your situation —
          your doctors, your medications, your priorities, your budget. Then we walk you through
          the options that are actually relevant to your circumstances, in plain language, with no
          pressure and no agenda other than helping you make the right choice.
        </p>
        <p>
          As independent agents, we're not tied to any single carrier. We compare options across
          the market and recommend what genuinely makes sense for you — whether that's a Medicare
          plan, a marketplace option, or something else entirely. Our only loyalty is to your
          coverage needs.
        </p>
        <p>
          Our consultations are always complimentary. There's no obligation, no script, and no
          countdown clock — just a real conversation about your needs, your options, and how we
          can help.
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
