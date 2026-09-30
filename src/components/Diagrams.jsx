// Simple line diagrams (Section 7.3). Each has a text equivalent nearby.

export function EnrollmentWindowDiagram() {
  const months = [
    { label: '3 months before', tone: 'before' },
    { label: '2 months before', tone: 'before' },
    { label: '1 month before', tone: 'before' },
    { label: 'Your birthday month', tone: 'birthday' },
    { label: '1 month after', tone: 'after' },
    { label: '2 months after', tone: 'after' },
    { label: '3 months after', tone: 'after' },
  ]
  return (
    <figure className="diagram">
      <ol className="iep" aria-label="The seven months of the Initial Enrollment Period">
        {months.map((m) => (
          <li key={m.label} className={`iep-month iep-${m.tone}`}>
            {m.label}
          </li>
        ))}
      </ol>
      <figcaption>
        Your Initial Enrollment Period usually lasts seven months: the three months before the month you turn 65,
        your birthday month, and the three months after. Signing up in the months before your birthday month lets
        coverage start as early as possible.
      </figcaption>
    </figure>
  )
}

export function TwoPathsDiagram() {
  return (
    <figure className="diagram">
      <div className="paths">
        <div className="path">
          <p className="path-title">Path 1: Original Medicare</p>
          <ol className="path-stack">
            <li>Part A (hospital) + Part B (medical)</li>
            <li className="optional">Optional: Part D drug plan</li>
            <li className="optional">Optional: Medicare Supplement (Medigap)</li>
          </ol>
        </div>
        <div className="path-divider" aria-hidden="true">or</div>
        <div className="path">
          <p className="path-title">Path 2: Medicare Advantage</p>
          <ol className="path-stack">
            <li>Part C plan that provides your Part A + Part B coverage</li>
            <li className="optional">Drug coverage is often included</li>
            <li className="optional">Some plans offer additional benefits</li>
          </ol>
        </div>
      </div>
      <figcaption>
        Everyone starts with Parts A and B. From there, people generally choose between two paths. Neither path is
        right for everyone; the better fit depends on your doctors, prescriptions, budget, travel, and preferences.
      </figcaption>
    </figure>
  )
}
