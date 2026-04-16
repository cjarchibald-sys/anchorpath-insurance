const U = 'https://images.unsplash.com'
const P = 'https://images.pexels.com/photos'

function Img({ id, w, h, alt, style = {} }) {
  return (
    <img
      src={`${U}/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`}
      alt={alt}
      loading="lazy"
      style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', ...style }}
    />
  )
}

// ─── Primary section illustrations ───────────────────────────────────────────

// Hero: older couple (60s-70s) reviewing Medicare documents together at home —
// calm, natural light, thoughtful — not corporate or staged
export function HeroIllo() {
  return (
    <img
      src={`${P}/7551755/pexels-photo-7551755.jpeg?auto=compress&cs=tinysrgb&w=600&h=460&fit=crop&crop=top`}
      alt="Older couple reviewing Medicare documents at home"
      loading="lazy"
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        maxWidth: '480px',
        objectFit: 'cover',
        borderRadius: '16px',
        boxShadow: '0 8px 40px rgba(46,109,164,0.18)',
      }}
    />
  )
}

// Why AnchorPath section: calm advisory moment — older adult or couple reviewing
// options with a trusted person, warm and approachable, not corporate
export function IndependenceIllo() {
  return (
    <img
      src={`${P}/3831847/pexels-photo-3831847.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop&crop=top`}
      alt="Calm conversation about Medicare options"
      loading="lazy"
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        maxWidth: '420px',
        objectFit: 'cover',
        borderRadius: '14px',
        boxShadow: '0 6px 28px rgba(46,109,164,0.14)',
      }}
    />
  )
}

// About section: real photo of Chris and Helga — always use this, never replace
export function AboutIllo() {
  return (
    <img
      src="/chris-and-helga.jpg"
      alt="Chris and Helga Archibald — AnchorPath Insurance Services"
      loading="lazy"
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        maxWidth: '420px',
        objectFit: 'cover',
        borderRadius: '16px',
        boxShadow: '0 8px 36px rgba(46,109,164,0.16)',
      }}
    />
  )
}

// Contact section: warm, approachable — a person in a natural setting, not a
// corporate office or business suit scene
export function ContactIllo() {
  return (
    <img
      src={`${P}/5256816/pexels-photo-5256816.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop&crop=top`}
      alt="Friendly Medicare guidance conversation"
      loading="lazy"
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        maxWidth: '420px',
        objectFit: 'cover',
        borderRadius: '14px',
        boxShadow: '0 6px 28px rgba(46,109,164,0.14)',
      }}
    />
  )
}

// ─── Educational page headers ─────────────────────────────────────────────────

// Basics page header: older adult reviewing Medicare information — educational context
export function MedicareShieldIllo() {
  return (
    <img
      src={`${P}/4065615/pexels-photo-4065615.jpeg?auto=compress&cs=tinysrgb&w=500&h=380&fit=crop&crop=top`}
      alt="Understanding Medicare coverage options"
      loading="lazy"
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        maxWidth: '420px',
        objectFit: 'cover',
        borderRadius: '14px',
        boxShadow: '0 6px 28px rgba(46,109,164,0.14)',
      }}
    />
  )
}

// Plans page header: older couple reviewing plan options, calm and thoughtful
export function PlansBalanceIllo() {
  return (
    <img
      src={`${P}/3760262/pexels-photo-3760262.jpeg?auto=compress&cs=tinysrgb&w=500&h=380&fit=crop&crop=top`}
      alt="Reviewing and comparing Medicare plan options"
      loading="lazy"
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        maxWidth: '420px',
        objectFit: 'cover',
        borderRadius: '14px',
        boxShadow: '0 6px 28px rgba(46,109,164,0.14)',
      }}
    />
  )
}

// ─── Plan card banners (Plans page) ──────────────────────────────────────────

export function OriginalMedicareIllo() {
  return <Img id="photo-1521038199265-bc482db0f923" w={500} h={200} alt="Original Medicare" />
}

export function AdvantageIllo() {
  return <Img id="photo-1517292987719-0369a794ec0f" w={500} h={200} alt="Medicare Advantage plans" />
}

export function UmbrellaIllo() {
  return <Img id="photo-1554260570-e9689a3418b8" w={500} h={200} alt="Medigap supplement coverage" />
}

export function PartDIllo() {
  return <Img id="photo-1471864190281-a93a3070b6de" w={500} h={200} alt="Medicare Part D prescription drug coverage" />
}

// ─── Part card banners (Basics page) ─────────────────────────────────────────

export function HospitalIllo() {
  return <Img id="photo-1519494026892-80bbd2d6fd0d" w={400} h={180} alt="Medicare Part A hospital coverage" />
}

export function StethoscopeIllo() {
  return <Img id="photo-1584515933487-779824d29309" w={400} h={180} alt="Medicare Part B medical coverage" />
}

export function BundleIllo() {
  return <Img id="photo-1576091160550-2173dba999ef" w={400} h={180} alt="Medicare Advantage bundled coverage" />
}

export function PillIllo() {
  return <Img id="photo-1584308666744-24d5c474f2ae" w={400} h={180} alt="Medicare Part D drug coverage" />
}
