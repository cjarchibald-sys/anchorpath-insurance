import Seo from './Seo'
import Breadcrumbs from './Breadcrumbs'
import { PageHero, ReviewNote, CtaBand } from './ui'

// Shared shell for educational pages: breadcrumbs, hero, body, review note,
// and a closing call to action (Section 8.2: every page has a next step, an
// official-resource path, and access to disclosures via the footer).
export default function EduPage({ path, section, title, seoTitle, description, eyebrow, lede, cta, toc, children }) {
  const crumbs = [{ to: '/', label: 'Home' }]
  if (section) crumbs.push(section)
  crumbs.push({ to: path, label: title })

  return (
    <>
      <Seo path={path} title={seoTitle ?? title} description={description} breadcrumbs={crumbs} />
      <Breadcrumbs items={crumbs} />
      <PageHero eyebrow={eyebrow} title={title} lede={lede} />
      <div className="container narrow prose">
        {toc && (
          <nav aria-labelledby="toc-title" className="toc">
            <p id="toc-title" className="toc-title">On this page</p>
            <ul>
              {toc.map(([id, label]) => (
                <li key={id}><a href={`#${id}`}>{label}</a></li>
              ))}
            </ul>
          </nav>
        )}
        {children}
        <ReviewNote path={path} />
      </div>
      {cta && <CtaBand {...cta} />}
    </>
  )
}
