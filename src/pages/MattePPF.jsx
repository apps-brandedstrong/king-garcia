import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import ServiceHero from '../components/ServiceHero'
import PPFSpecsStrip from '../components/PPFSpecsStrip'
import PPFCoverageGrid from '../components/PPFCoverageGrid'
import { exotic2, galleryImgs } from '../data'

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"/>
  </svg>
)
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)
const ZapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)
const DropIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>
)
const ToolIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
)
const CarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/>
    <path d="M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
    <path d="M15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
    <path d="M5 9l2-4h10l2 4"/>
  </svg>
)

const specs = [
  { icon: <CarIcon />, value: 'Satin Finish', label: 'Transforms glossy paint into a premium matte look' },
  { icon: <ZapIcon />, value: 'Self-Healing', label: 'Minor marks vanish with heat — no polishing needed' },
  { icon: <ShieldIcon />, value: 'Chemical Resistant', label: 'Bird droppings, tree sap & acid rain protection' },
  { icon: <DropIcon />, value: 'Easy Maintenance', label: 'Wipe clean — no special matte-safe products required' },
]

const zones = [
  { icon: <CarIcon />, name: 'Full Hood', desc: 'The largest panel — where the matte transformation is most dramatic and visible from any angle.' },
  { icon: <ShieldIcon />, name: 'All Painted Body Panels', desc: 'Doors, quarters, fenders, and trunk — full car coverage for a uniform satin appearance.' },
  { icon: <CarIcon />, name: 'Roof', desc: 'Roof coverage completes the look and protects against UV and overhead debris.' },
  { icon: <ShieldIcon />, name: 'Front Bumper', desc: 'Stone impact protection on the most exposed panel — keeps the matte finish looking new.' },
  { icon: <DropIcon />, name: 'Mirrors', desc: 'Mirror housings included in full coverage installs for a seamless appearance.' },
  { icon: <ToolIcon />, name: 'Headlights (Optional)', desc: 'Smoked or clear PPF on headlights rounds out a blacked-out or full matte build.' },
]

export default function MattePPF() {
  useEffect(() => {
    document.title = 'Matte Paint Protection Film in Phoenix, AZ | King Garcia Auto Detail'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.content = 'Matte PPF transforms glossy paint into a premium satin finish while protecting the surface from rock chips, UV, and contamination. Self-healing film that maintains the look without the difficulty of maintaining factory matte paint. King Garcia Auto Detail, Phoenix AZ.'
  }, [])

  return (
    <>
      <ServiceHero
        eyebrow="KAVACA MATTE PPF • KING GARCIA AUTO DETAIL LLC"
        h1="Run Matte Without the Risk. Satin Film That Self-Heals."
        intro="Matte Paint Protection Film gives any glossy vehicle a premium satin finish while adding the same protective film technology found in Gloss Pro. Unlike factory matte paint, this surface can be maintained without special products — and it heals itself."
        pills={['Satin Finish Transformation', 'Self-Healing Film', 'No Polishing Required', 'Phoenix, AZ Shop']}
        img={exotic2}
      />

      <section className="ppf-overview">
        <div className="container">
          <div className="ppf-overview-grid">
            <div className="ppf-overview-copy">
              <div className="eyebrow">The Problem With Factory Matte Paint</div>
              <h2>Factory Matte Can't Be Polished. This Film Can Be Replaced.</h2>
              <p>Factory matte paint finishes look incredible — but maintaining them is a nightmare. A single polish pass destroys the matte surface forever. Bird droppings and tree sap left too long can permanently etch the finish. Waxes and sealants change the appearance. Most detailers won't touch a factory matte car.</p>
              <p>Matte PPF solves every one of those problems. It lays a satin-finish protective film over glossy factory paint, giving you the matte look with the easy maintenance of a coated surface. If it ever gets damaged, the film can be replaced without touching the original paint underneath.</p>
              <ul className="ppf-diff-list">
                <li>Transforms any gloss color to satin without affecting the paint underneath</li>
                <li>Can be maintained with a regular car wash — no special matte-safe products</li>
                <li>Minor scratches in the film surface self-heal with ambient heat</li>
                <li>Rock chip and stone impact protection — matte paint offers zero resistance</li>
                <li>Film can be removed if you ever want to return to the original gloss finish</li>
              </ul>
            </div>
            <div className="ppf-overview-panel">
              <div className="eyebrow">Film Details</div>
              <h3>Matte PPF Specifications</h3>
              <ul className="ppf-included-list">
                {[
                  'Satin / matte surface finish',
                  'Applied over glossy factory paint',
                  'Self-healing — heat activated',
                  'Rock chip & stone impact resistance',
                  'UV protection — prevents paint fade',
                  'Chemical & corrosion resistance',
                  'No polishing or compounding needed',
                  'Removable without paint damage',
                  'Full car or panel-specific coverage',
                ].map((b, i) => (
                  <li key={i}><CheckIcon />{b}</li>
                ))}
              </ul>
              <a className="btn gold" href="#estimate-form">Request Free Estimate</a>
            </div>
          </div>
        </div>
      </section>

      <PPFSpecsStrip specs={specs} />

      <PPFCoverageGrid
        eyebrow="Coverage Zones"
        heading="Where the Matte Transformation Happens"
        zones={zones}
      />

      <section className="gallery-band">
        <div className="container">
          <div className="gallery-split">
            <div className="gallery-copy">
              <div className="eyebrow">Our Work</div>
              <h2>Matte Builds From the King Garcia Shop</h2>
              <p>Browse real vehicles transformed at King Garcia Auto Detail in Phoenix, AZ. Request a free estimate to plan your matte PPF build.</p>
              <Link className="btn gold" to="/projects/">View All Projects</Link>
            </div>
            <div className="gallery-fan">
              <Link className="gcard gcard-0" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[3]} alt="Matte PPF — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Matte PPF Full Car</span>
                  <span className="gcard-sub">Satin finish transformation</span>
                </div>
              </Link>
              <Link className="gcard gcard-1" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[7]} alt="Matte finish PPF — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Panel Coverage</span>
                  <span className="gcard-sub">Roof & hood matte build</span>
                </div>
              </Link>
              <Link className="gcard gcard-2" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[10]} alt="PPF detail — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Paint Protection Film</span>
                  <span className="gcard-sub">KAVACA premium install</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ppf-stats-bar">
        <div className="container">
          <div className="why-kg-stat"><b>2015</b><span>family-owned since</span></div>
          <div className="why-kg-stat"><b>15+</b><span>years of experience</span></div>
          <div className="why-kg-stat"><b>83</b><span>Google reviews</span></div>
          <div className="why-kg-stat"><b>4.9★</b><span>average rating</span></div>
        </div>
      </section>

      <section className="ppf-cta-band">
        <div className="container">
          <h2>Ready to Go Matte Without the Maintenance Headache?</h2>
          <p>Request a free estimate and King Garcia Auto Detail will walk you through coverage options, finish options, and the installation process for your specific vehicle.</p>
          <div className="cta-btns">
            <a className="btn gold" href="#estimate-form">Get a Free Estimate</a>
            <a className="btn outline" href="tel:6023740366">Call (602) 374-0366</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
