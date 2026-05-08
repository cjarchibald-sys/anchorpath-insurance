import { NavLink, Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
        <div className="logo-icon">⚓</div>
        <div>
          <div className="logo-text">AnchorPath Insurance Services</div>
          <div className="logo-sub">CA Licensed · Medicare Focus</div>
        </div>
      </Link>
      <div className="nav-links">
        {[
          ['/', 'Home'],
          ['/about', 'About'],
          ['/medicare-basics', 'Medicare Guide'],
          ['/medicare-plans', 'Medicare Plans'],
          ['/contact', 'Contact'],
        ].map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            style={{ textDecoration: 'none' }}
          >
            {label}
          </NavLink>
        ))}
      </div>
      <Link to="/contact" className="nav-cta" style={{ textDecoration: 'none' }}>
        Schedule a Conversation
      </Link>
    </nav>
  )
}
