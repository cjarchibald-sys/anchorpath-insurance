import { useState } from 'react'
import { ContactIllo } from '../illustrations'

// Sign up at formspree.io, create a form, and paste your endpoint here:
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgorwrog'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({ name: '', phone: '', email: '', topic: '', notes: '' })

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
        setForm({ name: '', phone: '', email: '', topic: '', notes: '' })
      } else {
        setError('Something went wrong. Please try again or call us directly.')
      }
    } catch {
      setError('Unable to send. Please try again or call us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* ── Banner ───────────────────────────────────────────────── */}
      <div className="contact-banner">
        <div className="contact-banner-text">
          <div className="section-label">Let's connect</div>
          <h1>Schedule a Conversation</h1>
          <p>No obligation, no sales pressure — just a friendly, complimentary conversation to help you understand your Medicare options.</p>
        </div>
        <div className="contact-banner-illo"><ContactIllo /></div>
      </div>

      {/* ── Contact content ──────────────────────────────────────── */}
      <div className="contact-wrap">
        <div className="contact-info">
          <h2>We'd love to hear from you</h2>
          <p>
            Whether you're turning 65, reviewing your current Medicare coverage, or just want
            to understand your options — we're happy to help. Consultations are always complimentary.
          </p>

          {[
            ['📍', 'Serving', 'Bay Area & all of California'],
            ['📞', 'Phone', '(408) 564-9295'],
            ['✉️', 'Email', 'chris@anchorpathinsurance.com'],
            ['🕐', 'Availability', 'Mon–Fri, 9am–5pm PT · Evenings by request'],
          ].map(([icon, label, val]) => (
            <div key={label} className="contact-item">
              <div className="contact-item-icon">{icon}</div>
              <div className="contact-item-body">
                <strong>{label}</strong>
                <span>{val}</span>
              </div>
            </div>
          ))}

          {/* What to expect */}
          <div className="contact-expect">
            <div className="section-label" style={{ display: 'block', marginBottom: '0.5rem', marginTop: '2rem' }}>What to expect</div>
            <ul className="expect-list">
              {[
                'We listen first, recommend second',
                'Plain language — no Medicare jargon',
                'No obligation after our conversation',
                'We follow up at whatever pace works for you',
              ].map(item => (
                <li key={item}>
                  <span className="expect-check">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Form ─────────────────────────────────────────────── */}
        <div className="contact-form">
          <h3>Send us a message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your name</label>
              <input
                type="text"
                placeholder="Jane Smith"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Phone number</label>
              <input
                type="tel"
                placeholder="(555) 000-0000"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>What can we help you with?</label>
              <select
                value={form.topic}
                onChange={e => setForm({ ...form, topic: e.target.value })}
              >
                <option value="">Select a topic…</option>
                <option>Turning 65 — first-time Medicare enrollment</option>
                <option>Comparing Medicare Advantage plans</option>
                <option>Medigap / Supplement options</option>
                <option>Prescription drug coverage (Part D)</option>
                <option>Annual Medicare plan review</option>
                <option>I'm not sure — I just have questions</option>
              </select>
            </div>
            <div className="form-group">
              <label>Anything else you'd like us to know?</label>
              <textarea
                placeholder="Current coverage, medications, timing, questions…"
                value={form.notes}
                onChange={e => setForm({ ...form, notes: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className={`btn-submit${submitted ? ' success' : ''}`}
              disabled={submitting || submitted}
            >
              {submitted
                ? "✓ Message sent — we'll be in touch soon!"
                : submitting
                ? 'Sending…'
                : 'Send Message →'}
            </button>
            {error && <p className="form-error">{error}</p>}
          </form>
        </div>
      </div>

      {/* ── Compliance note ──────────────────────────────────────── */}
      <div className="contact-disclaimer">
        We are not affiliated with or endorsed by the U.S. government or the federal Medicare program.
        Information provided is for general educational purposes and should not be considered a
        guarantee of coverage, benefits, or plan availability. Plan availability and benefits may
        vary by carrier, location, and eligibility.
      </div>
    </>
  )
}
