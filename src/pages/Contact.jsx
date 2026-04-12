import { useState } from 'react'
import { ContactIllo } from '../illustrations'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name:'', phone:'', email:'', topic:'', notes:'' })

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <div className="contact-banner">
        <div className="contact-banner-text">
          <div className="section-label">Let's connect</div>
          <h1>Book a Complimentary Consultation</h1>
          <p>No obligation, no sales pressure — just a friendly conversation to help you understand your options.</p>
        </div>
        <div className="contact-banner-illo"><ContactIllo /></div>
      </div>

      <div className="contact-wrap">
        <div className="contact-info">
          <h2>I'd love to hear from you</h2>
          <p>Whether you're brand new to Medicare or re-evaluating your current coverage, I'm happy to help. Consultations are always complimentary.</p>
          {[
            ['📍','Serving','Bay Area & all of California'],
            ['📞','Phone','(408) 564-9295'],
            ['✉️','Email','chris@anchorpathinsurance.com'],
            ['🕐','Availability','Mon–Fri, 9am–5pm PT · Evenings by request'],
          ].map(([icon, label, val]) => (
            <div key={label} className="contact-item">
              <div className="contact-item-icon">{icon}</div>
              <div className="contact-item-body">
                <strong>{label}</strong>
                <span>{val}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-form">
          <h3>Send me a message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your name</label>
              <input type="text" placeholder="Jane Smith" value={form.name} onChange={e => setForm({...form, name:e.target.value})} />
            </div>
            <div className="form-group">
              <label>Phone number</label>
              <input type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={e => setForm({...form, phone:e.target.value})} />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" placeholder="you@email.com" value={form.email} onChange={e => setForm({...form, email:e.target.value})} />
            </div>
            <div className="form-group">
              <label>What can I help you with?</label>
              <select value={form.topic} onChange={e => setForm({...form, topic:e.target.value})}>
                <option value="">Select a topic...</option>
                <option>Turning 65 — first-time Medicare</option>
                <option>Comparing Medicare Advantage plans</option>
                <option>Medigap / Supplement options</option>
                <option>Prescription drug coverage (Part D)</option>
                <option>Annual plan review</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="form-group">
              <label>Anything else you'd like me to know?</label>
              <textarea placeholder="Medications, current coverage, timing questions..." value={form.notes} onChange={e => setForm({...form, notes:e.target.value})} />
            </div>
            <button type="submit" className={`btn-submit${submitted?' success':''}`}>
              {submitted ? '✓ Message sent — I\'ll be in touch soon!' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
