import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import ServiceHero from '../components/ServiceHero'
import PPFSpecsStrip from '../components/PPFSpecsStrip'
import elite0 from '../../assets/others/ceramic-pro-gold-02.jpeg'
import elite1 from '../../assets/others/ceramic-pro-gold-03.jpeg'
import elite2 from '../../assets/others/ceramic-pro-gold-04.jpeg'
import elite3 from '../../assets/others/ceramic-pro-silver-hero.jpg'
import elite4 from '../../assets/others/ceramic-pro-bronce-hero.jpg'
import elite5 from '../../assets/others/ceramic-pro-sport-01.jpg'

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"/>
  </svg>
)
const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)
const ZapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)
const KeyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="7.5" cy="15.5" r="5.5"/>
    <path d="M21 2l-9.6 9.6"/>
    <path d="M15.5 7.5l3 3"/>
    <path d="M18 5l3 3"/>
  </svg>
)

const specs = [
  { icon: <StarIcon />, value: 'Elite Certified', label: 'Highest certification tier in the Ceramic Pro installer network' },
  { icon: <ShieldIcon />, value: 'VIN-Linked Warranty', label: 'Every installation registered to your vehicle identification number' },
  { icon: <KeyIcon />, value: 'KAVACA WSP', label: 'Windshield Protection Film — only available through Elite Dealers' },
  { icon: <ZapIcon />, value: 'Aftercare Program', label: 'Professional coating maintenance ecosystem with annual inspection' },
]

export default function Elite() {
  useEffect(() => {
    document.title = 'Elite Dealer Exclusives | Windshield Protection & Aftercare | King Garcia'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.content = 'King Garcia Auto Detail is a Ceramic Pro Elite Dealer — the highest certification tier in the network. Elite status unlocks KAVACA Windshield Protection Film and the professional Ceramic Pro Aftercare program, both VIN-linked and warranty-backed. Phoenix, AZ.'
  }, [])

  return (
    <>
      <ServiceHero
        eyebrow="CERAMIC PRO ELITE DEALER • KING GARCIA AUTO DETAIL LLC"
        h1="Elite-Level Protection. Services Only Elite Dealers Can Install."
        intro="King Garcia Auto Detail holds Ceramic Pro Elite Dealer certification — the highest tier in the network. This unlocks two services unavailable at standard shops: KAVACA Windshield Protection Film and the professional Ceramic Pro Aftercare Program. Both are VIN-linked and warranty-backed."
        pills={['Elite Dealer Certified', 'KAVACA Windshield Protection', 'Ceramic Pro Aftercare', 'Phoenix, AZ Shop']}
        img={elite0}
      />

      <section className="ppf-overview">
        <div className="container">
          <div className="ppf-overview-grid">
            <div className="ppf-overview-copy">
              <div className="eyebrow">What Elite Certification Means</div>
              <h2>Not Every Shop Can Install These Services. Elite Dealers Can.</h2>
              <p>Most automotive shops can offer detailing or basic protection services. Only certified Ceramic Pro installers can offer the full Ceramic Pro ecosystem — and within that group, only Elite Dealers have passed the training, audit, and certification requirements to unlock the top-tier product set.</p>
              <p>King Garcia Auto Detail has earned Elite Dealer status through verified installation quality and commitment to professional standards. The result: access to KAVACA Windshield Protection Film and the structured Ceramic Pro Aftercare program — two products that no general installer, dealership, or non-certified shop can legally install under Ceramic Pro warranty coverage.</p>
              <ul className="ppf-diff-list">
                <li>Elite Dealer certification is the highest tier in the Ceramic Pro network</li>
                <li>KAVACA Windshield Protection Film is reserved exclusively for Elite Dealers</li>
                <li>Ceramic Pro Aftercare program requires certified technician installation</li>
                <li>All warranty claims are VIN-registered and verifiable by Ceramic Pro</li>
                <li>Lifetime Warranty maintenance requires annual Elite Dealer inspection</li>
              </ul>
            </div>
            <div className="ppf-overview-panel">
              <div className="eyebrow">Elite Dealer Credentials</div>
              <h3>What Sets King Garcia Apart</h3>
              <ul className="ppf-included-list">
                {[
                  'Ceramic Pro Elite Dealer — highest certification tier',
                  'KAVACA Windshield Protection Film authorized installer',
                  'Ceramic Pro Aftercare Program — certified applicator',
                  'VIN-linked warranty registration for every install',
                  'Annual inspection capability for Lifetime Warranty',
                  'Trained and audited by Ceramic Pro directly',
                  'Family-owned shop with 15+ years of experience',
                  'Phoenix, AZ — serving the greater metro area',
                  'Free estimates on all Elite Dealer services',
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

      <section className="elite-services">
        <div className="container">
          <div className="section-head" style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="eyebrow">Exclusive Services</div>
            <h2>Two Services. Both Elite-Only. Both Warranty-Backed.</h2>
          </div>
          <div className="elite-services-grid">
            <div className="elite-svc-card">
              <div className="elite-svc-card-img">
                <img src={elite4} alt="KAVACA Windshield Protection Film — King Garcia Auto Detail" />
              </div>
              <div className="elite-svc-card-body">
                <div className="eyebrow">Elite Exclusive</div>
                <h3>KAVACA Windshield Protection Film</h3>
                <p>KAVACA Windshield Protection Film is a high-strength film engineered specifically for windshield glass — not a repurposed automotive adaptation. It absorbs stone and road debris impact, pre-treated with Ceramic Pro hydrophobic technology, and is the right choice for any vehicle where glass replacement is expensive, complicated by ADAS sensors, or simply where the factory glass is irreplaceable.</p>
                <ul className="ppf-diff-list" style={{ marginBottom: 24 }}>
                  <li>Impact resistance against stones, chips, and debris</li>
                  <li>Crystal-clear optical clarity — no distortion</li>
                  <li>Ceramic Pro hydrophobic tech built in</li>
                  <li>Protects ADAS-equipped windshields from costly replacement</li>
                </ul>
                <Link className="btn gold" to="/windshield-protection/">Learn More</Link>
              </div>
            </div>
            <div className="elite-svc-card">
              <div className="elite-svc-card-img">
                <img src={elite5} alt="Ceramic Pro Aftercare Program — King Garcia Auto Detail" />
              </div>
              <div className="elite-svc-card-body">
                <div className="eyebrow">Elite Exclusive</div>
                <h3>Ceramic Pro Aftercare Program</h3>
                <p>Ceramic Pro Aftercare is a complete product ecosystem designed to preserve the performance and warranty of a ceramic coating. The Ceramic Pro Americana Series keeps surfaces hydrophobic, prevents coating degradation, and qualifies the vehicle owner for the annual inspection required to maintain a Lifetime Warranty. Using non-certified products breaks warranty coverage.</p>
                <ul className="ppf-diff-list" style={{ marginBottom: 24 }}>
                  <li>Ceramic Pro Americana Series — pH-neutral maintenance products</li>
                  <li>Annual decontamination inspection by Elite Dealer required</li>
                  <li>Maintains active Lifetime Warranty status</li>
                  <li>Prevents premature coating degradation and failure</li>
                </ul>
                <Link className="btn gold" to="/aftercare/">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-band">
        <div className="container">
          <div className="gallery-split">
            <div className="gallery-copy">
              <div className="eyebrow">Our Work</div>
              <h2>Elite Dealer Builds From the King Garcia Shop</h2>
              <p>King Garcia Auto Detail has completed full Ceramic Pro system installs across Phoenix. Request a free estimate to plan your build — coating, windshield protection, and aftercare.</p>
              <Link className="btn gold" to="/projects/">View All Projects</Link>
            </div>
            <div className="gallery-fan">
              <Link className="gcard gcard-0" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={elite1} alt="Ceramic Pro Elite install — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Elite Package Build</span>
                  <span className="gcard-sub">Full Ceramic Pro system</span>
                </div>
              </Link>
              <Link className="gcard gcard-1" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={elite2} alt="Ceramic Pro Gold — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Gold Package</span>
                  <span className="gcard-sub">4-layer 9H + Top Coat</span>
                </div>
              </Link>
              <Link className="gcard gcard-2" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={elite3} alt="Elite dealer coating — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Elite Coating Install</span>
                  <span className="gcard-sub">VIN-linked warranty</span>
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
          <h2>Ready for Elite-Level Protection?</h2>
          <p>Request a free estimate and King Garcia Auto Detail will plan your Elite Dealer package — Windshield Protection Film, Aftercare Program, or a full Ceramic Pro system install.</p>
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
