import { MedicareShieldIllo, HospitalIllo, StethoscopeIllo, BundleIllo, PillIllo } from '../illustrations'

const parts = [
  { cls:'a', color:'#2e6da4', label:'Part A', title:'Hospital Insurance', bg:'#f0f7fc', Illo: HospitalIllo,
    text:"Covers inpatient hospital stays, skilled nursing facility care, hospice, and some home health services. Most people pay no monthly premium." },
  { cls:'b', color:'#4a8bbf', label:'Part B', title:'Medical Insurance', bg:'#f0f7fc', Illo: StethoscopeIllo,
    text:"Covers doctor visits, outpatient care, preventive services, and medical equipment. Part B has a monthly premium set annually by Medicare." },
  { cls:'c', color:'#d4921e', label:'Part C', title:'Medicare Advantage', bg:'#fffbf4', Illo: BundleIllo,
    text:"Private plans that bundle Parts A & B (often plus Part D). May include dental, vision, and hearing through approved private insurers." },
  { cls:'d', color:'#5aab8a', label:'Part D', title:'Drug Coverage', bg:'#f0faf5', Illo: PillIllo,
    text:"Standalone prescription drug coverage added to Original Medicare. Plans vary by covered drugs and cost." },
]

const periods = [
  { code:'IEP', title:'Initial Enrollment Period', text:"A 7-month window around your 65th birthday — 3 months before, the month of, and 3 months after. Your first chance to enroll in Medicare." },
  { code:'GEP', title:'General Enrollment Period', text:"January 1 – March 31 each year, for those who missed their IEP. Coverage begins July 1. Late enrollment penalties may apply." },
  { code:'OEP', title:'Open Enrollment Period', text:"October 15 – December 7 each year. Use this time to switch, join, or drop Medicare Advantage or Part D plans for the coming year." },
  { code:'SEP', title:'Special Enrollment Period', text:"Triggered by life events — losing employer coverage, moving, or qualifying for low-income programs. Timing and eligibility vary by situation." },
]

export default function Basics({ setPage }) {
  return (
    <>
      <div className="page-header">
        <div className="page-header-text">
          <div className="section-label">Medicare 101</div>
          <h1>Understanding Medicare</h1>
          <p>Medicare can feel like alphabet soup. Here's a clear overview of what each part covers — and how they work together.</p>
        </div>
        <div className="page-header-illo"><MedicareShieldIllo /></div>
      </div>

      <div className="section">
        <div className="section-label">The four parts</div>
        <div className="section-title">What does each part cover?</div>
        <div className="parts-grid">
          {parts.map(p => (
            <div key={p.cls} className="part-card" style={{borderTopColor: p.color}}>
              <div className="part-illo" style={{background: p.bg}}><p.Illo /></div>
              <div className="part-body">
                <div className="part-label" style={{color: p.color}}>{p.label}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="section-label" style={{marginTop:'2.5rem'}}>Enrollment windows</div>
        <div className="section-title">When can you enroll?</div>
        <div className="section-sub">Missing enrollment windows can result in permanent late penalties. Here are the key periods to know.</div>

        <div className="timeline">
          {periods.map(p => (
            <div key={p.code} className="tl-item">
              <div className="tl-dot">{p.code}</div>
              <div className="tl-body">
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-band">
        <h2>Still have questions? Let's talk.</h2>
        <p>Every situation is different. We're happy to walk through your specific enrollment window or coverage needs.</p>
        <button className="btn-cta" onClick={() => setPage('contact')}>Get Personalized Help</button>
      </div>
    </>
  )
}
