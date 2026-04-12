const U = 'https://images.unsplash.com'

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

// ─── Big section illustrations ────────────────────────────────────────────────

export function HeroIllo() {
  return (
    <Img
      id="photo-1559757148-5c350d0d3c56"
      w={600} h={460}
      alt="Happy senior couple enjoying the outdoors"
      style={{
        borderRadius: '16px',
        boxShadow: '0 8px 40px rgba(46,109,164,0.18)',
        height: 'auto',
        maxWidth: '480px',
      }}
    />
  )
}

export function IndependenceIllo() {
  return (
    <Img
      id="photo-1554224155-8d04cb21cd6c"
      w={500} h={400}
      alt="Independent insurance advisor reviewing options"
      style={{
        borderRadius: '14px',
        boxShadow: '0 6px 28px rgba(46,109,164,0.14)',
        height: 'auto',
        maxWidth: '420px',
      }}
    />
  )
}

export function AboutIllo() {
  return (
    <Img
      id="photo-1507003211169-0a1dd7228f2d"
      w={480} h={580}
      alt="Chris Archibald — AnchorPath Insurance"
      style={{
        borderRadius: '16px',
        boxShadow: '0 8px 36px rgba(46,109,164,0.16)',
        height: 'auto',
        maxWidth: '380px',
      }}
    />
  )
}

export function ContactIllo() {
  return (
    <Img
      id="photo-1573496359142-b8d87734a5a2"
      w={500} h={400}
      alt="Complimentary Medicare consultation"
      style={{
        borderRadius: '14px',
        boxShadow: '0 6px 28px rgba(46,109,164,0.14)',
        height: 'auto',
        maxWidth: '420px',
      }}
    />
  )
}

export function PlansBalanceIllo() {
  return (
    <Img
      id="photo-1450101499163-c8848c66ca85"
      w={500} h={380}
      alt="Comparing Medicare plan options"
      style={{
        borderRadius: '14px',
        boxShadow: '0 6px 28px rgba(46,109,164,0.14)',
        height: 'auto',
        maxWidth: '420px',
      }}
    />
  )
}

export function MedicareShieldIllo() {
  return (
    <Img
      id="photo-1576091160399-112ba8d25d1d"
      w={500} h={380}
      alt="Understanding Medicare coverage"
      style={{
        borderRadius: '14px',
        boxShadow: '0 6px 28px rgba(46,109,164,0.14)',
        height: 'auto',
        maxWidth: '420px',
      }}
    />
  )
}

// ─── Value card banners (160px tall, full width) ──────────────────────────────

export function GuidanceIllo() {
  return <Img id="photo-1551836022-d5d88e9218df" w={400} h={200} alt="Personalized Medicare guidance" />
}

export function ExplainIllo() {
  return <Img id="photo-1454165804606-c3d57bc86b40" w={400} h={200} alt="Clear Medicare explanations" />
}

export function SupportIllo() {
  return <Img id="photo-1559839734-2b71ea197ec2" w={400} h={200} alt="Ongoing Medicare support" />
}

// ─── Plan card banners ────────────────────────────────────────────────────────

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

// ─── Part card banners ────────────────────────────────────────────────────────

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

// ─── Testimonial avatars (keep as SVG — no real client photos) ────────────────

export function AvatarSVG({ color1, color2 }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" style={{ width: '100%', height: '100%' }}>
      <circle cx="18" cy="18" r="18" fill={color1} />
      <circle cx="18" cy="14" r="7" fill={color2} />
      <ellipse cx="18" cy="30" rx="11" ry="8" fill={color2} />
    </svg>
  )
}
