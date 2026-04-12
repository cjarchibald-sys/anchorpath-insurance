export default function Nav({ page, setPage }) {
  return (
    <nav>
      <div className="logo" onClick={() => setPage('home')}>
        <div className="logo-icon">⚓</div>
        <div>
          <div className="logo-text">AnchorPath Insurance</div>
          <div className="logo-sub">Services</div>
        </div>
      </div>
      <div className="nav-links">
        {[
          ['home', 'Home'],
          ['about', 'About'],
          ['basics', 'Medicare Guide'],
          ['plans', 'Medicare Plans'],
          ['contact', 'Contact'],
        ].map(([id, label]) => (
          <button
            key={id}
            className={`nav-link${page === id ? ' active' : ''}`}
            onClick={() => setPage(id)}
          >
            {label}
          </button>
        ))}
      </div>
      <button className="nav-cta" onClick={() => setPage('contact')}>Schedule a Conversation</button>
    </nav>
  )
}
