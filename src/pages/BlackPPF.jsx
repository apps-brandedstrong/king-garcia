import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import ServiceHero from '../components/ServiceHero'
import PPFSpecsStrip from '../components/PPFSpecsStrip'
import PPFCoverageGrid from '../components/PPFCoverageGrid'
import black0 from '../../assets/images/black-paint-hero.jpg'
import black1 from '../../assets/images/black-paint-01.jpg'
import black2 from '../../assets/images/black-paint-02.jpg'

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
const CarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/>
    <path d="M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
    <path d="M15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
    <path d="M5 9l2-4h10l2 4"/>
  </svg>
)
const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)
const LayersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
)

const specs = [
  { icon: <EyeIcon />, value: 'Piano Black', label: 'Deep gloss or true matte — without the orange peel of vinyl' },
  { icon: <ZapIcon />, value: 'No Orange Peel', label: 'Thick TPU construction eliminates texture found in vinyl wraps' },
  { icon: <ShieldIcon />, value: 'Impact Resistant', label: 'Handles stone chips and road debris that destroy vinyl' },
  { icon: <LayersIcon />, value: 'Deep Color', label: 'Pigment depth vinyl cannot replicate — looks like real paint' },
]

const zones = [
  { icon: <CarIcon />, name: 'Roof Panel', desc: 'The most popular single-panel Black PPF application — creates a striking glass-roof or blacked-out roof effect.' },
  { icon: <ShieldIcon />, name: 'Full Hood', desc: 'A blacked-out hood against a contrasting body color is one of the most aggressive visual upgrades available.' },
  { icon: <CarIcon />, name: 'Trunk / Tailgate', desc: 'Matches the roof for a symmetrical visual build. Common on performance sedans and sport trucks.' },
  { icon: <EyeIcon />, name: 'Door Panels', desc: 'Side panel coverage for a full stealth wrap effect without the fragility of vinyl.' },
  { icon: <LayersIcon />, name: 'A-Pillars & Trim', desc: 'Black PPF on exterior trim pieces creates a cohesive blacked-out finish with durability vinyl lacks.' },
  { icon: <ZapIcon />, name: 'Full Car Wrap', desc: 'Complete bumper-to-bumper Black PPF for a color change that protects the original paint underneath.' },
]

export default function BlackPPF() {
  useEffect(() => {
    document.title = 'Black Paint Protection Film in Phoenix, AZ | King Garcia Auto Detail'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.content = "Black PPF delivers a piano black or matte black finish with the thickness and impact resistance that vinyl wraps cannot match — no orange peel, no peeling edges. Common for roof panels, hoods, and full color-change builds. King Garcia Auto Detail, Phoenix AZ."
  }, [])

  return (
    <>
      <ServiceHero
        eyebrow="KAVACA BLACK PPF • KING GARCIA AUTO DETAIL LLC"
        h1="Deeper Than Vinyl. Tougher Than Paint."
        intro="Black Paint Protection Film delivers piano black or matte black that looks like real paint — without the orange-peel texture of vinyl wraps and with the impact resistance vinyl can never provide. Used for roofs, hoods, accents, or full color-change builds."
        pills={['Piano or Matte Black Finish', 'No Orange Peel Texture', 'Stone Impact Resistant', 'Phoenix, AZ Shop']}
        img={black0}
      />

      <section className="ppf-overview">
        <div className="container">
          <div className="ppf-overview-grid">
            <div className="ppf-overview-copy">
              <div className="eyebrow">Not a Wrap — Armor</div>
              <h2>The Visual Impact of a Black Wrap. The Protection of Armor.</h2>
              <p>Colored vinyl wraps are a thin, decorative film. They look great until a rock chip hits them — and then you're looking at a cut or a tear that exposes the paint underneath. Black PPF is a thick, automotive-grade thermoplastic polyurethane film with black pigment built into the material itself.</p>
              <p>The difference in visual quality is immediately obvious. Vinyl wraps have an inherent orange-peel texture that catches light. Black PPF has the smooth depth of real paint — whether you choose piano gloss or matte black. It's the finish that luxury car customizers use when they want it to look factory.</p>
              <ul className="ppf-diff-list">
                <li>Thick TPU construction — no orange-peel texture common in vinyl</li>
                <li>Piano black gloss or matte black options — each looks like real paint</li>
                <li>Handles rock chips and road debris that cut through vinyl wraps</li>
                <li>Most popular for roof panels, creating the glass-roof visual effect on any car</li>
                <li>Protects original paint underneath — removable without damage</li>
              </ul>
            </div>
            <div className="ppf-overview-panel">
              <div className="eyebrow">Film Details</div>
              <h3>Black PPF Specifications</h3>
              <ul className="ppf-included-list">
                {[
                  'Piano black or matte black finish',
                  'Thick TPU construction — no orange peel',
                  'Rock chip & stone impact resistant',
                  'Deeper color than any vinyl wrap',
                  'Self-healing surface — heat activated',
                  'UV-stable — will not fade or yellow',
                  'Protects original paint underneath',
                  'Removable without paint damage',
                  'Roof, hood, accents, or full car options',
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
        eyebrow="Common Applications"
        heading="Where Black PPF Makes the Biggest Impact"
        zones={zones}
      />

      <section className="gallery-band">
        <div className="container">
          <div className="gallery-split">
            <div className="gallery-copy">
              <div className="eyebrow">Our Work</div>
              <h2>Black PPF Builds From the King Garcia Shop</h2>
              <p>Real black PPF projects from our Phoenix shop. Request a free estimate to plan your build — panel-specific or full car.</p>
              <Link className="btn gold" to="/projects/">View All Projects</Link>
            </div>
            <div className="gallery-fan">
              <Link className="gcard gcard-0" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={black1} alt="Black PPF — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Black PPF Roof</span>
                  <span className="gcard-sub">Glass-roof visual effect</span>
                </div>
              </Link>
              <Link className="gcard gcard-1" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={black2} alt="PPF build — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Black PPF Hood</span>
                  <span className="gcard-sub">Piano black panel coverage</span>
                </div>
              </Link>
              <Link className="gcard gcard-2" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={black0} alt="Full PPF — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Full Car Black PPF</span>
                  <span className="gcard-sub">Complete color change</span>
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
          <h2>Ready to Build Something That Stands Out?</h2>
          <p>Request a free estimate and King Garcia Auto Detail will plan your black PPF build — roof panel, full hood, or complete color change.</p>
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
