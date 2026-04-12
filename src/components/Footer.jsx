export default function Footer() {
  return (
    <footer>
      <strong>AnchorPath Insurance Services</strong><br />
      Licensed CA Life &amp; Health Insurance Agent · Serving California<br />
      <span style={{fontSize:'12px',opacity:0.5}}>
        © {new Date().getFullYear()} AnchorPath Insurance Services · Not affiliated with Medicare or the federal government.
        Insurance products offered through licensed carrier partners.
      </span>
    </footer>
  )
}
