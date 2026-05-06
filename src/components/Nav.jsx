export default function Nav({ page, setPage }) {
  return (
    <nav>
      <div className="logo" onClick={() => setPage('home')}>
        <div className="logo-icon"><img src="/anchorpath-logo.png" alt="AnchorPath Insurance Services logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
        <div>
          <div className="logo-text">AnchorPath Insurance Services</div>
          <div className="logo-sub">CA Licensed · Medicare Focus</div>
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
