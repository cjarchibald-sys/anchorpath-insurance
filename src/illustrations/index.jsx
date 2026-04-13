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

// ─── Big section illustrations ────────────────────────────────────────────────

// Hero: advisory/guidance feel — middle-aged couple reviewing options with a professional;
// represents both Medicare and individual/family health audiences
export function HeroIllo() {
  return (
    <img
      src={`${P}/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600&h=460&fit=crop`}
      alt="Professional health insurance consultation"
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

// Medicare path card & service card — senior couple, clearly Medicare audience
export function MedicarePathIllo() {
  return (
    <img
      src={`${P}/4148984/pexels-photo-4148984.jpeg?auto=compress&cs=tinysrgb&w=600&h=280&fit=crop`}
      alt="Senior couple — Medicare coverage guidance"
      loading="lazy"
      style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
    />
  )
}

// Individual & Family path card — collage of individuals and families
export function FamilyPathIllo() {
  const photos = [
    { id: '1128316', alt: 'Young family with children' },
    { id: '3807517', alt: 'Couple reviewing options' },
    { id: '1648374', alt: 'Individual professional' },
    { id: '3768914', alt: 'Family with kids outdoors' },
  ]
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', width: '100%', height: '100%', gap: '2px' }}>
      {photos.map(({ id, alt }) => (
        <img
          key={id}
          src={`${P}/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=300&h=160&fit=crop`}
          alt={alt}
          loading="lazy"
          style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ))}
    </div>
  )
}

export function IndependenceIllo() {
  return (
    <Img
      id="photo-1554224155-8d04cb21cd6c"
      w={500} h={400}
      alt="Insurance advisor reviewing coverage options with clients"
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

export function ContactIllo() {
  return (
    <Img
      id="photo-1573496359142-b8d87734a5a2"
      w={500} h={400}
      alt="Complimentary health insurance consultation"
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

// Medicare service card banner — senior-focused
export function GuidanceIllo() {
  return (
    <img
      src={`${P}/4148984/pexels-photo-4148984.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop`}
      alt="Senior couple — Medicare guidance"
      loading="lazy"
      style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
    />
  )
}

// Individual & Family service card banner — collage of individuals and families
export function ExplainIllo() {
  const photos = [
    { id: '1128316', alt: 'Young family with children' },
    { id: '3807517', alt: 'Couple reviewing options' },
    { id: '1648374', alt: 'Individual professional' },
    { id: '3768914', alt: 'Family with kids outdoors' },
  ]
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', width: '100%', height: '100%', gap: '2px' }}>
      {photos.map(({ id, alt }) => (
        <img
          key={id}
          src={`${P}/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=200&h=120&fit=crop`}
          alt={alt}
          loading="lazy"
          style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ))}
    </div>
  )
}

export function SupportIllo() {
  return <Img id="photo-1559839734-2b71ea197ec2" w={400} h={200} alt="Ongoing insurance support" />
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
