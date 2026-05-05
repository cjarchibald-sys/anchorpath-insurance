import { AboutIllo } from '../illustrations'

export default function About({ setPage }) {
  return (
    <>
      {/* ── Hero split ───────────────────────────────────────────── */}
      <div className="about-split">
        <div className="about-illo"><AboutIllo /></div>
        <div className="about-content-hero">
          <div className="about-role">California-Licensed Insurance Agency · Operated by Chris Archibald</div>
          <h1>We believe Medicare decisions should feel less confusing and more personal.</h1>
          <p>
            Chris Archibald is a California-licensed insurance agent and the founder of
            AnchorPath Insurance Services. Helga Archibald is also a California-licensed
            insurance agent operating independently. Together as a husband-and-wife team,
            they are committed to helping people navigate Medicare with clarity, patience,
            and a straightforward approach.
          </p>
        </div>
      </div>

      {/* ── Values ───────────────────────────────────────────────── */}
      <div className="values-strip">
        <div className="values-inner">
          {[
            ['🌿', 'Honest guidance', 'You get straightforward advice about what actually makes sense for your situation — not what earns the biggest commission.'],
            ['🤲', 'At your pace', 'No rushing, no pressure. The process moves as quickly or slowly as you need until you feel completely clear.'],
            ['🔍', 'Plain language', "Medicare explained so it actually makes sense. You deserve to understand what you're choosing."],
            ['🌅', 'Ongoing support', "AnchorPath Insurance Services is here before, during, and after enrollment — not just for the sale."],
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
          enrollment windows, penalty rules. Most people aren't confused because
          they haven't tried to understand it. They're confused because the system itself is
          genuinely complicated.
        </p>
        <p>
          That's why AnchorPath Insurance Services focuses entirely on Medicare. Not general
          health insurance, not life insurance — Medicare. Chris has gone deep on the details
          to explain them clearly to people who need to make real decisions about their coverage.
        </p>
        <p>
          These choices matter. The right Medicare plan can mean the difference between
          manageable costs and unexpected bills. That's exactly why AnchorPath Insurance
          Services takes the time to explain your options clearly, without rushing you
          toward a decision.
        </p>
        <p className="pullquote">
          "Our goal is simple: help you understand your options and feel confident in your decision."
        </p>
        <p>
          When you work with AnchorPath Insurance Services, you're working directly with
          Chris Archibald — not a call center, not a rotating team of representatives.
          Chris will learn your situation, walk you through your Medicare options, and help
          you find coverage that actually fits.
        </p>
        <p>
          As an independent agency, AnchorPath Insurance Services is not tied to any single
          carrier. That means Chris can look across the market and recommend what genuinely
          makes sense for your circumstances — whether that's Original Medicare with a
          supplement, a Medicare Advantage plan, or something else entirely.
        </p>
        <p>
          Consultations through AnchorPath Insurance Services are always complimentary.
          No obligation, no pressure — just a real conversation about your situation and
          your Medicare options.
        </p>

        {/* ── Credentials ──────────────────────────────────────── */}
        <div className="creds">
          {[
            '🏅 CA Life & Health Licensed',
            '📍 Serving California',
            '🔒 Independent Agency',
            '📞 Complimentary consultations',
          ].map(c => (
            <div key={c} className="cred-badge">{c}</div>
          ))}
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <button className="btn-primary" onClick={() => setPage('contact')}>Schedule a Conversation</button>
        </div>
      </div>

      {/* ── Meet the Team ────────────────────────────────────────── */}
      <div style={{ background: 'var(--blue-pale)', padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '0.4rem' }}>Meet the Team</div>
          <div className="section-title" style={{ marginBottom: '1rem' }}>The people behind AnchorPath Insurance Services</div>
          <p style={{ color: 'var(--muted)', marginBottom: '2.5rem', lineHeight: '1.75', maxWidth: '600px' }}>
            We're Chris and Helga Archibald — a husband-and-wife team focused on helping
            individuals and families make confident insurance decisions.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>

            {/* ── Chris card ── */}
            <div style={{
              background: '#ffffff',
              border: '1px solid var(--border)',
              borderTop: '3px solid var(--blue)',
              borderRadius: 'var(--radius)',
              padding: '1.75rem',
            }}>
              <h4 style={{ marginBottom: '0.4rem' }}>Chris Archibald</h4>
              <div style={{ color: 'var(--blue)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.25rem' }}>Licensed Insurance Agent</div>
              <div style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>CA License #XXXXX</div>
              <div style={{
                marginTop: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border)',
                color: 'var(--muted)',
                fontSize: '0.85rem',
                lineHeight: '1.65',
              }}>
                Operating as <strong style={{ color: 'var(--navy)' }}>AnchorPath Insurance Services</strong>
              </div>
            </div>

            {/* ── Helga card ── */}
            <div style={{
              background: '#ffffff',
              border: '1px solid var(--border)',
              borderTop: '3px solid var(--blue-mid)',
              borderRadius: 'var(--radius)',
              padding: '1.75rem',
            }}>
              <h4 style={{ marginBottom: '0.4rem' }}>Helga Archibald</h4>
              <div style={{ color: 'var(--blue)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.25rem' }}>Licensed Insurance Agent</div>
              <div style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>CA License #XXXXX</div>
              <div style={{
                marginTop: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border)',
                color: 'var(--muted)',
                fontSize: '0.85rem',
                lineHeight: '1.65',
              }}>
                Operating independently. Not affiliated with AnchorPath Insurance Services.
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
