import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { galleryImgs, imgs } from '../data'

const specs = [
  {
    stat: '48h',
    label: 'Initial Cure',
    desc: 'Freshly coated surfaces need time to cure before first wash — specific timing varies by service and conditions',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    stat: 'pH',
    label: 'Neutral Products',
    desc: 'Harsh soaps and alkaline cleaners break down coating chemistry — using pH-neutral products protects the investment',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
      </svg>
    ),
  },
  {
    stat: 'No',
    label: 'Automatic Washes',
    desc: 'Brush-style automatic car washes create micro-scratches that dull coated surfaces — hand wash or touchless only',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
      </svg>
    ),
  },
  {
    stat: '1x',
    label: 'Annual Check-In',
    desc: 'A yearly inspection helps catch any areas that need attention before they affect the coating coverage or appearance',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
]

const related = [
  { title: 'Ceramic Pro Gold Package', copy: 'Head-to-toe coating protection with 9H, Top Coat, Wheel & Caliper, and Glass.', href: '/ceramic-pro-gold-package/', img: imgs[0] },
  { title: 'Windshield Protection', copy: 'Ceramic Pro nano-coating on front glass for hydrophobic behavior and visibility support.', href: '/windshield-protection/', img: imgs[1] },
  { title: 'Ceramic Pro Silver Package', copy: 'Popular 5-year Ceramic Pro package with 9H, Top Coat, Wheel & Caliper, and Glass.', href: '/ceramic-pro-silver-package/', img: imgs[2] },
]

export default function Aftercare() {
  useEffect(() => {
    document.title = 'Ceramic Coating Aftercare in Phoenix, AZ | King Garcia Auto Detail'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.content = 'Ceramic coating aftercare guidance at King Garcia Auto Detail in Phoenix, AZ. Learn how to maintain your coating, preserve gloss, and extend coverage. Free estimates.'
  }, [])

  return (
    <>
      <section className="hero hero-about">
        <div className="container">
          <div className="hero-copy">
            <div className="eyebrow">KING GARCIA AUTO DETAIL LLC · Phoenix, AZ</div>
            <h1>Keep Your Coating Performing Year After Year.</h1>
            <p>Ceramic Pro coatings are built to last — but only if you maintain them correctly after installation. King Garcia provides clear aftercare guidance for every coated vehicle that leaves our Phoenix shop, covering wash habits, product choices, and what to avoid to protect your coating investment long-term.</p>
            <div className="hero-ctas">
              <a className="btn gold" href="#estimate-form">Get a Free Estimate</a>
              <a className="btn outline" href="tel:6023740366">Call (602) 374-0366</a>
            </div>
            <div className="trust">
              <span className="pill">Family-Owned</span>
              <span className="pill">Since 2015</span>
              <span className="pill">15+ Years Experience</span>
              <span className="pill">4.9★ Google Rating</span>
            </div>
            <div className="hero-social">
              <a href="https://www.facebook.com/kinggarciaAZ/" target="_blank" rel="noopener" aria-label="Facebook" className="hero-social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/kinggarciaautodetailllc/" target="_blank" rel="noopener" aria-label="Instagram" className="hero-social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.tiktok.com/@kinggarciadetail" target="_blank" rel="noopener" aria-label="TikTok" className="hero-social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.86a8.27 8.27 0 0 0 4.86 1.56V7a4.85 4.85 0 0 1-1.09-.31z"/></svg>
              </a>
              <span className="hero-social-divider"></span>
              <a href="https://share.google/maEofKFoHqTgsRJ3G" target="_blank" rel="noopener" className="hero-google-badge" aria-label="Google Reviews">
                <svg width="16" height="16" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                <span><b>4.9★</b> · 83 Google Reviews</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-band">
        <div className="container">
          <div className="tech-band-head">
            <div className="eyebrow">Aftercare Guidelines</div>
            <h2>What Your Coating Needs to Last</h2>
          </div>
          <div className="tech-cards">
            {specs.map(({ stat, label, desc, icon }) => (
              <div key={label} className="tech-card">
                <span className="tech-card-icon">{icon}</span>
                <span className="tech-card-stat">{stat}</span>
                <span className="tech-card-label">{label}</span>
                <p className="tech-card-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-shop">
        <div className="container">
          <div className="about-shop-grid">
            <div className="about-shop-copy">
              <span className="eyebrow">Why Aftercare Matters</span>
              <h2>The Coating Does the Work. You Protect the Coating.</h2>
              <p>Ceramic Pro coatings bond chemically to painted surfaces, glass, and other substrates — creating a rigid, semi-permanent layer that adds gloss, hydrophobic behavior, and resistance to environmental contaminants. But incorrect washing habits, harsh chemical products, or brush-style automatic car washes can degrade that layer faster than normal wear would.</p>
              <p>After every Ceramic Pro installation at King Garcia, we walk through what to do and what to avoid specific to your vehicle and the package applied. The right habits keep the coating performing at full capacity — and protect the investment you made in having it installed correctly.</p>
              <div className="about-shop-ctas">
                <a className="btn gold" href="#estimate-form">Schedule a Service</a>
                <Link className="btn outline" to="/ceramic-pro-gold-package/">View Coating Packages</Link>
              </div>
            </div>
            <div className="about-shop-img">
              <img loading="lazy" src={galleryImgs[75]} alt="Ceramic coating care — King Garcia Auto Detail Phoenix" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Coating Maintenance</div>
              <h2>Three Habits That Protect Your Investment</h2>
            </div>
          </div>
          <div className="grid benefits">
            <div className="benefit">
              <b>Wash Correctly Every Time</b>
              <p>Use pH-neutral car wash soap and the two-bucket method. Rinse top-down, dry with a clean microfiber. Never use dish soap, household cleaners, or brush-style tunnel washes — all will degrade the hydrophobic layer faster than normal vehicle wear.</p>
            </div>
            <div className="benefit">
              <b>Address Contaminants Quickly</b>
              <p>Bird droppings, tree sap, and industrial fallout are acidic and etching. Even a coated surface benefits from prompt removal — let them sit in Arizona heat long enough and they can bond to the surface below the coating layer.</p>
            </div>
            <div className="benefit">
              <b>Annual Inspection Keeps Coverage Active</b>
              <p>A yearly check-in at the shop lets us assess the coating condition, address any areas of wear, and ensure your protection is still performing at the level you paid for. It takes minutes and can extend the effective life of the coating significantly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-band">
        <div className="container">
          <div className="gallery-split">
            <div className="gallery-copy">
              <div className="eyebrow">Coated Vehicles</div>
              <h2>Work Worth Protecting</h2>
              <p>Real Ceramic Pro coating installs from the King Garcia shop in Phoenix, AZ. Every vehicle shown left with a properly applied coating — and aftercare guidance to keep it that way.</p>
              <Link className="btn gold" to="/projects/">View All Projects</Link>
            </div>
            <div className="gallery-fan">
              <Link className="gcard gcard-0" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[5]} alt="Ceramic Pro coating project — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Ceramic Pro Coating</span>
                  <span className="gcard-sub">Multi-layer nano-ceramic</span>
                </div>
              </Link>
              <Link className="gcard gcard-1" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[20]} alt="Coated vehicle — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Paint Protection</span>
                  <span className="gcard-sub">Full vehicle coverage</span>
                </div>
              </Link>
              <Link className="gcard gcard-2" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[50]} alt="Luxury coating install — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Luxury Vehicle</span>
                  <span className="gcard-sub">Properly maintained finish</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Related Services</div>
              <h2>Coating Packages at King Garcia</h2>
            </div>
          </div>
          <div className="grid cards">
            {related.map(r => (
              <Card key={r.href} title={r.title} copy={r.copy} href={r.href} img={r.img} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
