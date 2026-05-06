import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import ServiceHero from '../components/ServiceHero'
import PPFSpecsStrip from '../components/PPFSpecsStrip'
import PPFCoverageGrid from '../components/PPFCoverageGrid'
import { imgDetail, galleryImgs } from '../data'

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
const DropIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>
)
const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
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

const specs = [
  { icon: <SunIcon />, value: 'Ceramic Topcoat', label: 'Factory-integrated — no separate ceramic coating needed' },
  { icon: <ZapIcon />, value: 'Self-Healing', label: 'Surface marks disappear with ambient or applied heat' },
  { icon: <DropIcon />, value: 'Nanotechnology Adhesive', label: 'Adjustable during install, leaves zero residue' },
  { icon: <ShieldIcon />, value: 'Optical Clarity', label: 'High-performance aliphatic polyurethane — invisible on paint' },
]

const zones = [
  { icon: <ShieldIcon />, name: 'Front Bumper Only', desc: 'Entry-level option — protects the front bumper and headlights from the worst of road debris.' },
  { icon: <CarIcon />, name: 'Front Kit — Partial', desc: 'Bumper, mirrors, and the first third of the hood and fenders. Great value against highway chips.' },
  { icon: <CarIcon />, name: 'Front Kit — Full', desc: 'Full hood, full bumper, full front fenders, and mirrors. Eliminates visible film lines on the hood.' },
  { icon: <ShieldIcon />, name: 'Full Car', desc: 'Bumper-to-bumper coverage on every painted panel. Protection against key scratches, door dings, and parking lot damage.' },
  { icon: <ZapIcon />, name: 'Headlights', desc: 'UV-stable film maintains headlight clarity and prevents the yellowing that shortens headlight lifespan.' },
  { icon: <DropIcon />, name: 'Door Cups & Rockers', desc: 'High-touch areas where fingernails and keys cause damage — included in Full Kit and Full Car options.' },
]

export default function GlossProPPF() {
  useEffect(() => {
    document.title = 'Gloss Pro Paint Protection Film in Phoenix, AZ | King Garcia Auto Detail'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.content = "KAVACA Gloss Pro PPF — KAVACA's flagship paint protection film with factory-integrated ceramic topcoat, nanotechnology adhesive, and self-healing technology. Available in Front Bumper, Front Kit, and Full Car options. King Garcia Auto Detail, Phoenix AZ."
  }, [])

  return (
    <>
      <ServiceHero
        eyebrow="KAVACA GLOSS PRO PPF • KING GARCIA AUTO DETAIL LLC"
        h1="Invisible Armor. Factory Gloss. Film That Heals Itself."
        intro="KAVACA Gloss Pro is the flagship paint protection film — a high-performance aliphatic polyurethane with a factory-integrated ceramic topcoat and nanotechnology adhesive. Available for front bumpers, front kits, or full car coverage."
        pills={['Ceramic Topcoat Integrated', 'Self-Healing Film', '3 Coverage Levels', 'Phoenix, AZ Shop']}
        img={imgDetail}
      />

      <section className="ppf-overview">
        <div className="container">
          <div className="ppf-overview-grid">
            <div className="ppf-overview-copy">
              <div className="eyebrow">KAVACA's Flagship Line</div>
              <h2>The Clear Film With a Built-In Ceramic Layer. No Separate Coating Required.</h2>
              <p>Most paint protection films need a ceramic coating applied on top to become hydrophobic. KAVACA Gloss Pro comes with a factory-integrated ceramic topcoat — meaning the film itself repels water, resists contaminants, and stays cleaner longer without any additional product.</p>
              <p>The nanotechnology adhesive fills minor paint imperfections during install and allows the installer to reposition the film multiple times without leaving residue. The result is a cleaner, line-free install with optical clarity that makes the film nearly invisible on any paint color.</p>
              <ul className="ppf-diff-list">
                <li>Factory ceramic topcoat — already hydrophobic out of the box</li>
                <li>Self-healing: light scratches disappear with heat from the sun or a heat gun</li>
                <li>Nano adhesive fills micro-imperfections and leaves no glue residue</li>
                <li>50% more elastic than standard films — cleaner installs on complex curves</li>
                <li>Preserves factory paint color and finish with zero haze</li>
              </ul>
              <div className="ppf-variants">
                <div className="ppf-variant-card">
                  <strong>Front Bumper</strong>
                  <span>Front bumper and headlights — best against bugs, chips, and debris</span>
                </div>
                <div className="ppf-variant-card">
                  <strong>Front Kit — Partial</strong>
                  <span>Bumper, mirrors, and 1/3 hood + fenders</span>
                </div>
                <div className="ppf-variant-card">
                  <strong>Front Kit — Full</strong>
                  <span>Full hood, full bumper, full fenders, mirrors — no visible hood line</span>
                </div>
                <div className="ppf-variant-card">
                  <strong>Full Car</strong>
                  <span>Every painted panel, bumper to bumper — maximum protection</span>
                </div>
              </div>
            </div>
            <div className="ppf-overview-panel">
              <div className="eyebrow">Film Technology</div>
              <h3>What Makes Gloss Pro Different</h3>
              <ul className="ppf-included-list">
                {[
                  'Aliphatic polyurethane construction',
                  'Factory-integrated ceramic topcoat',
                  'Self-healing surface — heat activated',
                  'Nanotechnology repositionable adhesive',
                  'Fills micro paint imperfections on install',
                  '50% greater elasticity than standard PPF',
                  'UV-stable — no yellowing over time',
                  'Corrosion resistant — bird droppings & tree sap',
                  'Available in Front Bumper, Front Kit, Full Car',
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
        heading="Choose the Level of Protection That Fits Your Vehicle"
        zones={zones}
      />

      <section className="gallery-band">
        <div className="container">
          <div className="gallery-split">
            <div className="gallery-copy">
              <div className="eyebrow">Our Work</div>
              <h2>Gloss Pro PPF Installs From the Phoenix Shop</h2>
              <p>Every project is performed at King Garcia Auto Detail in Phoenix, AZ. Request a free estimate to discuss the right coverage level for your vehicle.</p>
              <Link className="btn gold" to="/projects/">View All Projects</Link>
            </div>
            <div className="gallery-fan">
              <Link className="gcard gcard-0" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[1]} alt="Gloss Pro PPF — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Gloss Pro Full Car</span>
                  <span className="gcard-sub">Bumper-to-bumper coverage</span>
                </div>
              </Link>
              <Link className="gcard gcard-1" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[5]} alt="PPF front kit — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Gloss Pro Front Kit</span>
                  <span className="gcard-sub">Full hood, bumper & fenders</span>
                </div>
              </Link>
              <Link className="gcard gcard-2" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[8]} alt="PPF front bumper — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Front Bumper PPF</span>
                  <span className="gcard-sub">High-impact zone protection</span>
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
          <h2>Not Sure Which Coverage Level Is Right?</h2>
          <p>Call the shop or request a free estimate. King Garcia Auto Detail will walk you through the front bumper, front kit, and full car options based on your vehicle and how you drive it.</p>
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
