import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Card from '../components/Card'
import Footer from '../components/Footer'
import ServiceHero from '../components/ServiceHero'
import { pages, imgs, galleryImgs } from '../data'

const related = ['/ceramic-pro-gold-package/', '/ceramic-pro-silver-package/', '/paint-protection-films/', '/windows-tint/', '/projects/', '/contact-us/']

export default function ServicePage() {
  const { pathname } = useLocation()
  let path = pathname
  if (!path.endsWith('/')) path += '/'
  const p = pages[path] || pages['/']

  useEffect(() => {
    document.title = p.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.content = p.intro || 'KING GARCIA AUTO DETAIL LLC provides premium auto detailing, Ceramic Pro coatings, paint protection film, and window tint in Phoenix, AZ.'
  }, [p])

  const isProjects = path === '/projects/'
  const reversedImgs = [...imgs].reverse()

  return (
    <>
      <ServiceHero
        eyebrow="KING GARCIA AUTO DETAIL LLC • Phoenix, AZ"
        h1={p.h1}
        intro={p.intro}
        pills={['Family-Owned', 'Since 2015', '15+ Years Experience', '4.9★ Google Rating']}
        img={p.img}
      />

      <section>
        <div className="container content-grid">
          <div className="content-panel">
            <div className="eyebrow">Service Overview</div>
            <h2>{p.h1}</h2>
            <p>{p.intro}</p>
            <p>All services are performed at KING GARCIA AUTO DETAIL LLC in Phoenix, AZ. Call the shop or request a free estimate to match the right service, package, and coverage level to your vehicle.</p>
          </div>
          <div className="content-panel">
            <div className="eyebrow">Details</div>
            <h3>Included / Available</h3>
            <ul>{(p.bullets || []).map((b, i) => <li key={i}>{b}</li>)}</ul>
            <a className="btn gold" href="#estimate-form">Request Free Estimate</a>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div><div className="eyebrow">Benefits</div><h2>Protection Built Around Your Vehicle</h2></div>
          </div>
          <div className="grid benefits">
            <div className="benefit"><b>Gloss &amp; Presence</b><p>Designed to enhance the look of luxury, exotic, and daily-driven vehicles.</p></div>
            <div className="benefit"><b>Easier Maintenance</b><p>Protection-focused services can help surfaces stay cleaner and easier to maintain.</p></div>
            <div className="benefit"><b>Phoenix Conditions</b><p>Service recommendations consider sun, road wear, heat, bugs, and daily driving.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">{isProjects ? 'All Projects' : 'Visual Proof'}</div>
              <h2>{isProjects ? 'Real Work. Real Results.' : 'Luxury Auto Protection Gallery'}</h2>
            </div>
            {isProjects && <p>{galleryImgs.length} photos from the King Garcia Auto Detail shop in Phoenix, AZ.</p>}
          </div>
          <div className={`grid gallery${isProjects ? ' gallery-projects' : ''}`}>
            {(isProjects ? galleryImgs : reversedImgs).map((im, i) => (
              <div key={i} className={isProjects ? 'gallery-item' : ''}>
                <img loading="lazy" src={im} alt={`${p.h1} — project photo ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div><div className="eyebrow">Explore More</div><h2>Related Protection Services</h2></div>
          </div>
          <div className="grid cards">
            {related.slice(0, 3).map((r, i) =>
              pages[r] && <Card key={r} title={pages[r].h1} copy={pages[r].intro} href={r} img={imgs[i]} />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
