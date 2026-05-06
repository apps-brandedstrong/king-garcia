import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import ServiceHero from '../components/ServiceHero'
import PPFSpecsStrip from '../components/PPFSpecsStrip'
import PPFCoverageGrid from '../components/PPFCoverageGrid'
import { exotic4, galleryImgs } from '../data'

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
const GridIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
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
const LayersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
)

const specs = [
  { icon: <GridIcon />, value: 'Integrated Pattern', label: 'Carbon fiber, camo, geometric — built into the film itself' },
  { icon: <ShieldIcon />, value: 'Impact Resistant', label: 'Same stone impact protection as Gloss Pro film' },
  { icon: <ZapIcon />, value: 'Self-Healing', label: 'Surface damage repairs with ambient heat' },
  { icon: <LayersIcon />, value: 'Custom Coverage', label: 'Panel-specific or full-car application options' },
]

const zones = [
  { icon: <CarIcon />, name: 'Full Car Coverage', desc: 'Complete bumper-to-bumper Urban PPF for a fully customized, protected vehicle with a consistent pattern.' },
  { icon: <ShieldIcon />, name: 'Hood & Roof', desc: 'The highest-visibility surfaces — where the pattern is seen most from outside and above the vehicle.' },
  { icon: <GridIcon />, name: 'Front Bumper & Fenders', desc: 'Front-end coverage in Urban PPF combines aggressive style with the highest-impact protection zones.' },
  { icon: <CarIcon />, name: 'Door Panels', desc: 'Side panel coverage for vehicles getting a partial Urban PPF build with contrasting original paint.' },
  { icon: <LayersIcon />, name: 'Accent Zones', desc: 'Mirror caps, A-pillars, rocker panels — accent coverage for a curated, intentional build.' },
  { icon: <ZapIcon />, name: 'Trunk & Quarter Panels', desc: 'Rear coverage completes a full wrap build and protects the rear from road debris kicked up by other vehicles.' },
]

export default function UrbanPPF() {
  useEffect(() => {
    document.title = 'Urban Paint Protection Film in Phoenix, AZ | King Garcia Auto Detail'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.content = 'Urban PPF combines custom patterns — carbon fiber, camouflage, geometric — integrated directly into the film structure, with the same impact resistance as Gloss Pro. Full car or panel-specific coverage. King Garcia Auto Detail, Phoenix AZ.'
  }, [])

  return (
    <>
      <ServiceHero
        eyebrow="KAVACA URBAN PPF • KING GARCIA AUTO DETAIL LLC"
        h1="Armor With an Attitude. Patterns Built Into the Film."
        intro="Urban Paint Protection Film integrates custom patterns — carbon fiber, camouflage, geometric designs — directly into the film structure. It carries the same impact resistance as KAVACA Gloss Pro while transforming the vehicle's appearance from factory to fully customized."
        pills={['Carbon Fiber, Camo & Geometric Patterns', 'Same Impact Resistance as Gloss Pro', 'Full Car or Panel Coverage', 'Phoenix, AZ Shop']}
        img={exotic4}
      />

      <section className="ppf-overview">
        <div className="container">
          <div className="ppf-overview-grid">
            <div className="ppf-overview-copy">
              <div className="eyebrow">Style and Protection, Not a Trade-Off</div>
              <h2>Custom Patterns Fused Into Film. Full Impact Protection Underneath.</h2>
              <p>Most custom automotive finishes are a compromise — you get the look, but you lose durability. A vinyl wrap gives you a pattern but can't handle a parking lot rock chip. Urban PPF solves that. The pattern is integrated into the film material itself, not printed on a surface layer that can scratch off.</p>
              <p>The protective layer underneath is identical to KAVACA Gloss Pro — the same high-performance aliphatic polyurethane that handles stone chips, road debris, UV, and chemical contamination. You get a dramatically customized vehicle that's also genuinely protected.</p>
              <ul className="ppf-diff-list">
                <li>Patterns are built into the film — not printed on top or easily scratched off</li>
                <li>Same stone chip and road debris resistance as standard KAVACA film</li>
                <li>Available in carbon fiber, camouflage, geometric, and other styles</li>
                <li>Self-healing surface — minor surface damage repairs with heat</li>
                <li>Protects the original paint underneath — removable without damage</li>
              </ul>
            </div>
            <div className="ppf-overview-panel">
              <div className="eyebrow">Film Details</div>
              <h3>Urban PPF Specifications</h3>
              <ul className="ppf-included-list">
                {[
                  'Pattern integrated into film structure',
                  'Available: carbon fiber, camo, geometric',
                  'Same TPU base as Gloss Pro film',
                  'Rock chip & stone impact resistant',
                  'Self-healing — heat activated',
                  'UV-stable — pattern will not fade',
                  'Chemical & corrosion resistant',
                  'Removable without paint damage',
                  'Panel-specific or full car coverage',
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
        eyebrow="Coverage Options"
        heading="Where Urban PPF Creates the Most Impact"
        zones={zones}
      />

      <section className="gallery-band">
        <div className="container">
          <div className="gallery-split">
            <div className="gallery-copy">
              <div className="eyebrow">Our Work</div>
              <h2>Custom PPF Builds From the King Garcia Shop</h2>
              <p>Browse real vehicles finished at King Garcia Auto Detail in Phoenix. Request a free estimate to plan your Urban PPF build and choose your pattern.</p>
              <Link className="btn gold" to="/projects/">View All Projects</Link>
            </div>
            <div className="gallery-fan">
              <Link className="gcard gcard-0" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[12]} alt="Urban PPF — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Urban PPF</span>
                  <span className="gcard-sub">Pattern integrated film</span>
                </div>
              </Link>
              <Link className="gcard gcard-1" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[13]} alt="Custom PPF — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Carbon Fiber PPF</span>
                  <span className="gcard-sub">Hood & roof accent</span>
                </div>
              </Link>
              <Link className="gcard gcard-2" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[14]} alt="PPF custom build — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Full Car Urban PPF</span>
                  <span className="gcard-sub">Complete custom build</span>
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
          <h2>Ready to Build Something Nobody Else Has?</h2>
          <p>Request a free estimate and King Garcia Auto Detail will walk you through available Urban PPF patterns and coverage options for your vehicle.</p>
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
