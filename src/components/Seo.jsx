import { Helmet } from 'react-helmet-async'
import { site } from '../site.config'

export default function Seo({ path, title, description, noindex, breadcrumbs, jsonLd }) {
  const fullTitle = path === '/' ? `${site.name} | California Medicare Guidance` : `${title} | ${site.name}`
  const url = `${site.url}${path}`

  const structured = [...(jsonLd ?? [])]
  if (breadcrumbs?.length) {
    structured.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.label,
        item: `${site.url}${b.to}`,
      })),
    })
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={url} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${site.url}/images/CandH-1126.jpg`} />
      {structured.map((data, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(data)}</script>
      ))}
    </Helmet>
  )
}
