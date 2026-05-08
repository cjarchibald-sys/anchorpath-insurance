export default function Footer() {
  return (
    <footer>
      <strong>AnchorPath Insurance Services</strong>

      <span style={{ fontSize: '12px', opacity: 0.75, display: 'block', marginTop: '0.75rem', lineHeight: '1.9', maxWidth: '680px', margin: '0.75rem auto 0' }}>
        AnchorPath Insurance Services is a licensed insurance agency in California, operated by Chris Archibald, CA License #XXXXX.
        Helga Archibald, CA License #XXXXX, is a licensed insurance agent operating independently and is not affiliated with AnchorPath Insurance Services.
      </span>

      <span style={{ fontSize: '12px', opacity: 0.7, display: 'block', marginTop: '0.75rem', lineHeight: '1.9', maxWidth: '680px', margin: '0.75rem auto 0' }}>
        We do not offer every plan available in your area. Currently we represent [X] organizations which offer [X] products
        in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program (SHIP)
        to get information on all of your options.
      </span>

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
