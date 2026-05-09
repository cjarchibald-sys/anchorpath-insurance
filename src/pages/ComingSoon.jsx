import { Helmet } from 'react-helmet-async'

export default function ComingSoon() {
  return (
    <>
      <Helmet>
        <title>AnchorPath Insurance Services | Coming Soon</title>
        <meta name="description" content="AnchorPath Insurance Services — California licensed Medicare guidance. Site coming soon." />
        <link rel="canonical" href="https://anchorpathinsurance.com/" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}>

        {/* ── Brand mark ── */}
        <div style={{
          fontSize: '3rem',
          color: 'var(--blue)',
          lineHeight: 1,
          marginBottom: '1.5rem',
        }}>
          ⚓
        </div>

        {/* ── Wordmark ── */}
        <div style={{
          fontFamily: "'Lora', serif",
          fontSize: 'clamp(1.4rem, 4vw, 2rem)',
          fontWeight: 600,
          color: 'var(--navy)',
          letterSpacing: '-0.01em',
          lineHeight: 1.2,
          marginBottom: '1.5rem',
        }}>
          AnchorPath Insurance Services
        </div>

        {/* ── Coming soon ── */}
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '1.1rem',
          color: 'var(--muted)',
          fontStyle: 'italic',
          marginBottom: '1.5rem',
        }}>
          Coming soon
        </div>

        {/* ── Tagline ── */}
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.7rem',
          color: 'var(--blue)',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          fontWeight: 500,
        }}>
          California Licensed · Medicare Focus
        </div>

      </div>

      {/* ── Compliance footer ── */}
      <div style={{
        position: 'fixed',
        bottom: '1.25rem',
        left: 0,
        right: 0,
        textAlign: 'center',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '0.7rem',
        color: 'var(--muted)',
        opacity: 0.55,
        padding: '0 1.5rem',
      }}>
        Not affiliated with or endorsed by the U.S. government or the federal Medicare program.
      </div>
    </>
  )
}
