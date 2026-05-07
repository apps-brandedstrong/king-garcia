import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import ServiceHero from '../components/ServiceHero'
import PPFSpecsStrip from '../components/PPFSpecsStrip'
import PPFCoverageGrid from '../components/PPFCoverageGrid'
import shift0 from '../../assets/images/shift-colour-hero.PNG'
import shift1 from '../../assets/images/shift-colour-01.webp'
import shift2 from '../../assets/images/shift-colour-02.webp'

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
const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)
const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
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
  { icon: <StarIcon />, value: '12-Year Warranty', label: 'Far exceeds the 3–5 years of conventional vinyl wraps' },
  { icon: <SunIcon />, value: 'Color-Shift Pigment', label: 'TPU film with hue-changing pigments built into the material' },
  { icon: <ZapIcon />, value: 'Self-Healing', label: 'Surface repairs with ambient heat — no polish, no compounds' },
  { icon: <ShieldIcon />, value: 'Stone Impact Resistant', label: 'Handles road debris that tears through colored vinyl instantly' },
]

const zones = [
  { icon: <CarIcon />, name: 'Full Car', desc: 'Complete bumper-to-bumper color change — every panel shifts hue as the viewing angle changes.' },
  { icon: <ShieldIcon />, name: 'Roof & Hood', desc: 'The two largest panels on any car — where the color shift effect is most visible from a distance.' },
  { icon: <CarIcon />, name: 'Front Bumper & Fenders', desc: 'Front-end coverage combines the most dramatic visual impact with the most protection.' },
  { icon: <SunIcon />, name: 'Door Panels', desc: 'Side panel coverage for vehicles wanting a full-body color shift without replacing the entire paint.' },
  { icon: <ZapIcon />, name: 'Trunk & Quarter Panels', desc: 'Rear coverage completes the build. Shift Color PPF on all rear panels creates an immersive effect.' },
  { icon: <ShieldIcon />, name: 'Custom Panel Options', desc: 'Partial builds — accent panels, roof-only, or two-tone with original paint — are available on request.' },
]

export default function ShiftColorPPF() {
  useEffect(() => {
    document.title = 'Shift Color Paint Protection Film in Phoenix, AZ | King Garcia Auto Detail'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.content = 'Shift Color PPF changes hue based on the angle of light — TPU film with built-in color-shift pigments, self-healing surface, stone impact resistance, and up to a 12-year warranty. The evolution of the color-change wrap. King Garcia Auto Detail, Phoenix AZ.'
  }, [])

  return (
    <>
      <ServiceHero
        eyebrow="KAVACA SHIFT COLOR PPF • KING GARCIA AUTO DETAIL LLC"
        h1="Every Angle, a New Color. 12-Year Warranty PPF."
        intro="Shift Color Paint Protection Film uses TPU with built-in color-shift pigments that change hue depending on the angle of light. It does what a vinyl wrap does — but with the thickness, self-healing surface, and stone-impact resistance of a real protective film. Up to a 12-year warranty."
        pills={['12-Year Warranty', 'Color-Shift Pigment in TPU Film', 'Self-Healing Surface', 'Phoenix, AZ Shop']}
        img={shift0}
      />

      <section className="ppf-overview">
        <div className="container">
          <div className="ppf-overview-grid">
            <div className="ppf-overview-copy">
              <div className="eyebrow">The Evolution of the Vinyl Wrap</div>
              <h2>A Color Change That Survives the Road. Backed by a 12-Year Warranty.</h2>
              <p>Colored vinyl wraps have been the go-to for vehicle color changes for years — but they have a fundamental problem. The film is thin. One rock chip from highway driving tears through it. The average vinyl wrap lasts three to five years before it starts lifting at the edges and fading at panel seams.</p>
              <p>Shift Color PPF takes the concept of a vinyl wrap and rebuilds it with the construction of armor. The color-shift pigments are embedded in a thick thermoplastic polyurethane (TPU) film — the same material as impact-rated protective film. When a stone hits it, the film absorbs the impact. The surface self-heals. And the warranty covers you for up to 12 years — not 3.</p>
              <ul className="ppf-diff-list">
                <li>Color-shift pigments are part of the TPU material — not a surface coating</li>
                <li>Handles rock chips, road debris, and impacts that destroy vinyl wraps</li>
                <li>Self-healing surface — heat from the sun closes surface marks</li>
                <li>Up to 12-year warranty — 2 to 4 times longer than colored vinyl</li>
                <li>Hue shifts naturally with viewing angle — no lighting tricks required</li>
              </ul>
            </div>
            <div className="ppf-overview-panel">
              <div className="eyebrow">Film Details</div>
              <h3>Shift Color PPF Specifications</h3>
              <ul className="ppf-included-list">
                {[
                  'TPU construction with color-shift pigment',
                  'Hue changes based on angle of light',
                  'Up to 12-year warranty',
                  'Rock chip & stone impact resistant',
                  'Self-healing — ambient or applied heat',
                  'UV-stable — color does not fade',
                  'Chemical & corrosion resistant',
                  'Removable without damage to original paint',
                  'Full car or panel-specific options',
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
        heading="Where the Color Shift Makes the Biggest Statement"
        zones={zones}
      />

      <section className="gallery-band">
        <div className="container">
          <div className="gallery-split">
            <div className="gallery-copy">
              <div className="eyebrow">Our Work</div>
              <h2>Shift Color PPF Builds From the King Garcia Shop</h2>
              <p>Real vehicles transformed at King Garcia Auto Detail in Phoenix, AZ. Request a free estimate to plan your color-shift build.</p>
              <Link className="btn gold" to="/projects/">View All Projects</Link>
            </div>
            <div className="gallery-fan">
              <Link className="gcard gcard-0" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={shift1} alt="Shift Color PPF — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Shift Color Full Car</span>
                  <span className="gcard-sub">Complete color change PPF</span>
                </div>
              </Link>
              <Link className="gcard gcard-1" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={shift2} alt="Color shift PPF — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Color-Shift PPF</span>
                  <span className="gcard-sub">Hue changes by angle</span>
                </div>
              </Link>
              <Link className="gcard gcard-2" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={shift0} alt="PPF color change — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Panel Coverage</span>
                  <span className="gcard-sub">Hood & roof color shift</span>
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
          <h2>Ready for a Color Change Built to Last 12 Years?</h2>
          <p>Request a free estimate and King Garcia Auto Detail will plan your Shift Color PPF build — panel-specific or full car coverage.</p>
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
