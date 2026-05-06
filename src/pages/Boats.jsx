import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Footer from '../components/Footer'
import ServiceHero from '../components/ServiceHero'
import { exotic2, imgPrimary, imgs } from '../data'
import boat0 from '../../assets/detailing/botas/Detailing_boats_without_people_202605061854.jpeg'
import boat1 from '../../assets/detailing/botas/Detailing_boats_without_people_202605061854 (1).jpeg'
import boat2 from '../../assets/detailing/botas/Detailing_boats_without_people_202605061854 (2).jpeg'
import boat3 from '../../assets/detailing/botas/Detailing_boats_without_people_202605061854 (3).jpeg'

const features = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="5"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
    ),
    title: 'UV & Gelcoat Protection',
    desc: 'Arizona sun turns unprotected gelcoat chalky and dull within a season. Marine detailing removes existing oxidation and coating options prevent it from coming back.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    title: 'Corrosion Barrier',
    desc: 'Lake water minerals and prolonged water exposure attack metal hardware, fittings, and hull components. Protective treatments slow corrosion and simplify maintenance.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
    ),
    title: 'Anti-Fouling Surface',
    desc: 'Coated hulls resist algae, scum line buildup, and waterline staining. Smoother surfaces mean less drag and a cleaner hull after every outing.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 9h18M3 15h18M9 3v18"/></svg>
    ),
    title: 'Interior Marine Care',
    desc: 'Vinyl upholstery, teak trim, plastic consoles, and carpeting treated to prevent mold, UV cracking, sunscreen staining, and food and drink marks.',
  },
]

const marineConditions = [
  {
    title: 'Extreme UV Exposure',
    desc: 'Phoenix-area lakes offer almost no shade. Boats stored without cover take more UV damage per year than boats in most other U.S. climates. Annual gelcoat care is not optional — it\'s maintenance.',
  },
  {
    title: 'Lake Water Mineral Deposits',
    desc: 'Arizona lakes carry dissolved minerals that leave hard water deposits on hull surfaces, glass, and metal hardware after every outing. These etch into surfaces if not treated regularly.',
  },
  {
    title: 'Seasonal Storage Challenges',
    desc: 'Boats stored through Arizona summers accumulate heat, UV, dust, and surface oxidation. Pre-season and post-season detailing restores condition and preps the surface for protection.',
  },
]

const relatedPages = [
  { href: '/cars/', title: 'Car Detailing', copy: 'Interior, exterior, and paint prep detailing for daily drivers, luxury cars, and exotics.', img: exotic2 },
  { href: '/motorcycles/', title: 'Motorcycle Detailing', copy: 'Precision detailing for motorcycles — painted panels, chrome, wheels, and engine components.', img: imgPrimary },
  { href: '/ceramic-pro-marine/', title: 'Ceramic Pro Marine', copy: 'Ceramic Pro Marine coating options designed specifically for gelcoat and marine surface protection.', img: imgs[4] },
]

export default function Boats() {
  useEffect(() => {
    document.title = 'Boat Detailing & Marine Protection in Phoenix, AZ | King Garcia Auto Detail'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.content = 'Marine detailing and Ceramic Pro Marine options at King Garcia Auto Detail in Phoenix, AZ. Gelcoat restoration, UV protection, corrosion treatment, and interior marine care. Free estimates.'
  }, [])

  return (
    <>
      <ServiceHero
        eyebrow="Boat & Marine Detailing · Phoenix, AZ"
        h1="Marine Protection Built for Arizona Conditions. Boats & Watercraft."
        intro="Arizona lakes and extreme UV conditions create a unique challenge for boat owners. King Garcia Auto Detail provides marine detailing, gelcoat restoration, and Ceramic Pro Marine options for boats and watercraft — all performed at the Phoenix shop."
        pills={['Family-Owned', 'Since 2015', '15+ Years Experience', '4.9★ Google Rating']}
        img={boat0}
      />

      {/* SERVICE INTRO SPLIT */}
      <section>
        <div className="container">
          <div className="svc-split">
            <div className="svc-split-copy">
              <span className="eyebrow">Marine Detailing in Phoenix</span>
              <h2>Arizona Is Hard on Boats. We Know How to Fix That.</h2>
              <p>Most boat detailing guides are written for coastal or freshwater climates. Arizona is different. Phoenix-area lakes expose boats to intense UV radiation, mineral-heavy water, and extreme heat — conditions that oxidize gelcoat, corrode metal hardware, and crack interior surfaces faster than almost any other environment.</p>
              <p>King Garcia Auto Detail approaches marine detailing with the same technical focus applied to exotic cars. Gelcoat oxidation, scum line buildup, waterline staining, and interior surface damage are addressed systematically — not just cleaned on the surface. Ceramic Pro Marine options are available as a longer-term protective step after the detail.</p>
              <div className="hero-ctas">
                <a className="btn gold" href="#estimate-form">Request Free Estimate</a>
                <Link className="btn outline" to="/ceramic-pro-marine/">View Ceramic Pro Marine</Link>
              </div>
            </div>
            <div className="svc-features">
              {features.map(f => (
                <div key={f.title} className="svc-feature">
                  <div className="svc-feature-icon">{f.icon}</div>
                  <div className="svc-feature-body">
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL BENEFITS */}
      <section style={{ background: '#f5f5f2' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">What We Restore</div>
              <h2>Three Outcomes Every Arizona Boat Owner Needs</h2>
            </div>
            <p>Marine detailing isn't about looks alone. These are the structural surface improvements that make a real difference on Arizona water.</p>
          </div>
          <div className="grid benefits">
            <div className="benefit">
              <b>Gelcoat Restoration</b>
              <p>Dull, chalky, oxidized gelcoat is brought back to a clean, glossy finish through compound and polish treatment. The result looks like a new hull — and accepts ceramic coating properly.</p>
            </div>
            <div className="benefit">
              <b>Easier Seasonal Cleanup</b>
              <p>Coated and detailed surfaces are significantly easier to clean after each outing and season-end storage. Less scrubbing, less product, less time on maintenance every year.</p>
            </div>
            <div className="benefit">
              <b>Ceramic Pro Marine Option</b>
              <p>Ceramic Pro Marine is available as a long-term coating step after detailing. It is engineered specifically for gelcoat and marine surfaces — not adapted from automotive product.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ARIZONA CONDITIONS DARK BAND */}
      <section className="svc-marine-band">
        <div className="container">
          <div className="svc-marine-copy">
            <span className="eyebrow">Why Arizona Is Different</span>
            <h2>The Conditions Phoenix Boat Owners Are Up Against</h2>
            <p>Most marine detailing advice doesn't account for what Arizona actually does to a boat. These are the three conditions that matter most for Phoenix-area boat owners.</p>
          </div>
          <div className="svc-marine-facts">
            {marineConditions.map(c => (
              <div key={c.title} className="svc-marine-fact">
                <div className="svc-marine-fact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <strong>{c.title}</strong>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY BAND */}
      <section className="gallery-band">
        <div className="container">
          <div className="gallery-split">
            <div className="gallery-copy">
              <div className="eyebrow">Real Work</div>
              <h2>Marine & Boat Work from Our Phoenix Shop</h2>
              <p>A look at detailing and surface protection work performed at King Garcia Auto Detail for boats and watercraft in the Phoenix area.</p>
              <Link className="btn gold" to="/projects/">View All Projects</Link>
            </div>
            <div className="gallery-fan">
              <Link className="gcard gcard-0" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={boat1} alt="Marine detailing — King Garcia Auto Detail Phoenix" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Gelcoat Restoration</span>
                  <span className="gcard-sub">Oxidation removal & polish</span>
                </div>
              </Link>
              <Link className="gcard gcard-1" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={boat2} alt="Surface protection — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Marine Surface Detail</span>
                  <span className="gcard-sub">Full hull & interior care</span>
                </div>
              </Link>
              <Link className="gcard gcard-2" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={boat3} alt="Ceramic coating — King Garcia Auto Detail Phoenix" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Ceramic Pro Marine</span>
                  <span className="gcard-sub">Long-term surface protection</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Explore More</div>
              <h2>Other Services at King Garcia Auto Detail</h2>
            </div>
            <p>Marine detailing is part of a full range of vehicle protection services offered at the Phoenix shop.</p>
          </div>
          <div className="grid cards">
            {relatedPages.map(r => (
              <Card key={r.href} title={r.title} copy={r.copy} href={r.href} img={r.img} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
