import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import ServiceHero from '../components/ServiceHero'
import PPFSpecsStrip from '../components/PPFSpecsStrip'
import PPFCoverageGrid from '../components/PPFCoverageGrid'
import ua0 from '../../assets/others/ceramic-pro-silver-hero.jpg'
import ua1 from '../../assets/others/ceramic-pro-gold-02.jpeg'
import ua2 from '../../assets/others/ceramic-pro-gold-03.jpeg'
import ua3 from '../../assets/others/ceramic-pro-gold-04.jpeg'

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
const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)
const LayersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
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
const DropIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>
)

const specs = [
  { icon: <StarIcon />, value: 'Carfax Lifetime', label: 'The only package documented by Carfax for life' },
  { icon: <ShieldIcon />, value: 'Full Front PPF', label: 'Hood, bumpers, fenders, mirrors & headlights' },
  { icon: <LayersIcon />, value: 'Ceramic Pro', label: 'Applied to all remaining painted surfaces' },
  { icon: <CarIcon />, value: 'Hybrid System', label: 'PPF impact defense + ceramic chemical protection' },
]

const zones = [
  { icon: <ShieldIcon />, name: 'Full Hood', desc: 'Complete hood coverage — the highest-impact zone against road debris and chips.' },
  { icon: <CarIcon />, name: 'Front Bumper', desc: 'Full front bumper protected with KAVACA film, including lower fascia.' },
  { icon: <ShieldIcon />, name: 'Front Fenders', desc: 'Both front fenders covered edge-to-edge for a clean, seamless look.' },
  { icon: <CarIcon />, name: 'Side Mirrors', desc: 'Mirror housings are some of the most chip-prone surfaces — fully covered.' },
  { icon: <LayersIcon />, name: 'Headlights', desc: 'Clarity-preserving film that protects against UV yellowing and stone damage.' },
  { icon: <DropIcon />, name: 'Ceramic Pro on All Remaining Paint', desc: 'Wheels, glass, plastics, and all remaining painted panels coated with Ceramic Pro for chemical and UV protection.' },
]

export default function UltimateArmor() {
  useEffect(() => {
    document.title = 'Ultimate Armor PPF in Phoenix, AZ — Carfax Lifetime Warranty | King Garcia Auto Detail'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.content = 'Ultimate Armor is the only protection package in the world with a lifetime warranty documented by Carfax. Full Front PPF combined with Ceramic Pro coating on all remaining surfaces. King Garcia Auto Detail, Phoenix AZ.'
  }, [])

  return (
    <>
      <ServiceHero
        eyebrow="KAVACA PAINT PROTECTION FILM • KING GARCIA AUTO DETAIL LLC"
        h1="The Only Protection Package Backed by Carfax for Life"
        intro="Ultimate Armor is the world's only paint protection package with a lifetime warranty documented by Carfax. Full Front PPF combined with Ceramic Pro coating on every remaining surface — the most complete vehicle protection system available."
        pills={['Carfax Lifetime Warranty', 'Full Front PPF', 'Ceramic Pro on All Remaining Surfaces', 'Phoenix, AZ Shop']}
        img={ua0}
      />

      <section className="ppf-overview">
        <div className="container">
          <div className="ppf-overview-grid">
            <div className="ppf-overview-copy">
              <div className="eyebrow">The Complete Package</div>
              <h2>Paint Protection Film on the Front. Ceramic Pro on Everything Else.</h2>
              <p>Ultimate Armor is not a single product — it's a hybrid protection system. High-impact zones on the front of the vehicle get KAVACA Paint Protection Film, which handles physical threats like rock chips, road debris, and parking lot door dings. Every remaining painted surface, including wheels, glass, and plastics, receives Ceramic Pro coating for chemical resistance, hydrophobic behavior, and long-term gloss.</p>
              <p>The result is whole-vehicle protection with one installer, one job, and a lifetime warranty that travels with the vehicle and is verifiable on Carfax — a first in the industry.</p>
              <ul className="ppf-diff-list">
                <li>Full hood coverage — the highest stone-impact zone on any vehicle</li>
                <li>Both front fenders, bumper, mirrors, and headlights under KAVACA film</li>
                <li>Ceramic Pro applied to wheels, glass, plastics, and all non-front paint</li>
                <li>Self-healing film — minor surface marks disappear with heat</li>
                <li>Documented on Carfax — adds verifiable protection history to the vehicle</li>
              </ul>
            </div>
            <div className="ppf-overview-panel">
              <div className="eyebrow">What's Included</div>
              <h3>Full Coverage Breakdown</h3>
              <ul className="ppf-included-list">
                {[
                  'KAVACA PPF on full hood',
                  'KAVACA PPF on front bumper',
                  'KAVACA PPF on front fenders',
                  'KAVACA PPF on side mirrors',
                  'KAVACA PPF on headlights',
                  'Ceramic Pro on all remaining painted surfaces',
                  'Ceramic Pro on wheels & calipers',
                  'Ceramic Pro on glass',
                  'Ceramic Pro on plastics & trim',
                  'Carfax-documented lifetime warranty',
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
        heading="Every Angle of Your Vehicle, Protected"
        zones={zones}
      />

      <section className="gallery-band">
        <div className="container">
          <div className="gallery-split">
            <div className="gallery-copy">
              <div className="eyebrow">Our Work</div>
              <h2>Real Protection Installs at Our Phoenix Shop</h2>
              <p>Every vehicle in our gallery was protected at King Garcia Auto Detail on W Melinda Ln in Phoenix, AZ — by the same hands that will work on yours.</p>
              <Link className="btn gold" to="/projects/">View All Projects</Link>
            </div>
            <div className="gallery-fan">
              <Link className="gcard gcard-0" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={ua1} alt="Ultimate Armor PPF install — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Ultimate Armor</span>
                  <span className="gcard-sub">Full front PPF + Ceramic Pro</span>
                </div>
              </Link>
              <Link className="gcard gcard-1" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={ua2} alt="PPF installation — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Paint Protection Film</span>
                  <span className="gcard-sub">KAVACA premium film</span>
                </div>
              </Link>
              <Link className="gcard gcard-2" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={ua3} alt="Ceramic coating — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Ceramic Pro Coating</span>
                  <span className="gcard-sub">All remaining surfaces</span>
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
          <h2>Ready to Protect Your Vehicle for Life?</h2>
          <p>Call the shop or request a free estimate. King Garcia Auto Detail will match the right coverage level to your vehicle, budget, and goals.</p>
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
