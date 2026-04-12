export default function Footer() {
  return (
    <footer>
      <strong>AnchorPath Insurance Services</strong><br />
      Licensed California Life &amp; Health Insurance Agents · Serving California<br />
      <span style={{ fontSize: '12px', opacity: 0.7, display: 'block', marginTop: '0.75rem', lineHeight: '1.9', maxWidth: '680px', margin: '0.75rem auto 0' }}>
        We are not affiliated with or endorsed by the U.S. government or the federal Medicare program.
        Information on this website is provided for general educational purposes and should not be
        considered a guarantee of coverage, benefits, or plan availability.
        Plan availability and benefits may vary by carrier, location, and eligibility.
      </span>
      <span style={{ fontSize: '12px', opacity: 0.45, display: 'block', marginTop: '0.75rem' }}>
        © {new Date().getFullYear()} AnchorPath Insurance Services · Insurance products offered through licensed carrier partners.
      </span>
    </footer>
  )
}
