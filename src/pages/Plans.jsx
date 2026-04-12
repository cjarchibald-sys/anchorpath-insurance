import { PlansBalanceIllo, OriginalMedicareIllo, AdvantageIllo, UmbrellaIllo, PartDIllo } from '../illustrations'

const plans = [
  {
    badge:'Part A + B', title:'Original Medicare', aka:'The federal foundation', featured: false,
    Illo: OriginalMedicareIllo, bg:'linear-gradient(160deg,#e8f4fb,#f0f7fc)',
    desc:'Government-run coverage for hospital and medical care. Widely accepted by providers, typically paired with a Supplement and Part D drug plan.',
    pros:['Accepted by nearly all US providers','No network restrictions','Predictable base coverage'],
    cons:['No prescription drug coverage','No cap on out-of-pocket costs'],
  },
  {
    badge:'Part C', title:'Medicare Advantage', aka:'All-in-one private plans', featured: true,
    Illo: AdvantageIllo, bg:'linear-gradient(160deg,#e8f4fb,#fdf8f0)',
    desc:"Bundles Parts A & B through a private insurer, often including drug coverage, dental, vision, and hearing. Plans vary significantly — network and benefits matter.",
    pros:['Often $0 or low monthly premium','May include dental/vision/hearing','Annual out-of-pocket maximum'],
    cons:['Network restrictions apply','Prior authorization may be required'],
  },
  {
    badge:'Supplement', title:'Medigap', aka:'Gap coverage for Original Medicare', featured: false,
    Illo: UmbrellaIllo, bg:'linear-gradient(160deg,#fffbf4,#fdf3e0)',
    desc:"Helps pay deductibles, copays, and coinsurance that Original Medicare doesn't cover. Standardized plans (Plan G, Plan N) offer predictable, consistent costs.",
    pros:['Predictable, low out-of-pocket costs','Use any Medicare-accepting provider','Guaranteed renewable'],
    cons:["Monthly premium required","Doesn't cover drugs (need Part D)"],
  },
  {
    badge:'Part D', title:'Prescription Drug Plans', aka:'Standalone drug coverage', featured: false,
    Illo: PartDIllo, bg:'linear-gradient(160deg,#f0faf5,#e8f7ef)',
    desc:'Covers prescription medications when paired with Original Medicare. Plans vary by which drugs are covered (formulary), cost, and pharmacy network.',
    pros:['Covers brand & generic drugs','Many plans have $0 tier-1 generics','Catastrophic coverage cap'],
    cons:['Formularies vary by plan','Late enrollment penalty if delayed'],
  },
]

export default function Plans({ setPage }) {
  return (
    <>
      <div className="page-header">
        <div className="page-header-text">
          <div className="section-label">Your options</div>
          <h1>Medicare Plan Types</h1>
          <p>There's no one-size-fits-all Medicare plan. Here's how the main options compare — so you can make an informed choice.</p>
        </div>
        <div className="page-header-illo"><PlansBalanceIllo /></div>
      </div>

      <div className="section">
        <div className="plans-compare">
          {plans.map(p => (
            <div key={p.title} className={`plan-card${p.featured?' featured':''}`}>
              <div className="plan-illo" style={{background: p.bg}}><p.Illo /></div>
              <div className="plan-body">
                <div className={`plan-badge${p.featured?' featured':''}`}>{p.badge}</div>
                <h3>{p.title}</h3>
                <div className="plan-aka">{p.aka}</div>
                <p>{p.desc}</p>
                <ul className="plan-features">
                  {p.pros.map(t => <li key={t}><span className="check-y">✓</span>{t}</li>)}
                  {p.cons.map(t => <li key={t}><span className="check-n">–</span>{t}</li>)}
                </ul>
                <button className={`btn-plan${p.featured?' featured':''}`} onClick={() => setPage('contact')}>Discuss this option →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-band">
        <h2>Not sure which plan fits you?</h2>
        <p>That's exactly what we're here for. Let's compare your real options together.</p>
        <button className="btn-cta" onClick={() => setPage('contact')}>Schedule a Conversation</button>
      </div>

      <div className="edu-disclaimer">
        <strong>Educational information only.</strong> Plan descriptions are for general informational
        purposes and may not reflect current availability, pricing, or benefits in your area. Medicare
        plan options, costs, and features vary by carrier and location. We are not affiliated with or
        endorsed by the U.S. government or the federal Medicare program. Speak with a licensed agent
        to review options specific to your situation.
      </div>
    </>
  )
}
