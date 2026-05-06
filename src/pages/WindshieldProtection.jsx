import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { galleryImgs, imgs } from '../data'

const specs = [
  {
    stat: 'SiO2',
    label: 'Nano-Bond',
    desc: 'Silicon dioxide nanoparticles bond chemically to glass pores — not a film that peels, but a cured surface layer',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    stat: '99%',
    label: 'UV Protection',
    desc: 'Blocks harmful UV rays through the windshield — reduces glare intensity and helps protect the vehicle interior from solar damage',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    ),
  },
  {
    stat: 'High',
    label: 'Hydrophobicity',
    desc: 'Rain beads and sheets off the glass at highway speed — dramatically reduces the need for wipers in light rain conditions',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
      </svg>
    ),
  },
  {
    stat: 'Easy',
    label: 'Glass Maintenance',
    desc: 'Coated glass resists water spots, road film, and bug buildup — cleaning takes less product and less effort after every drive',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
]

const related = [
  { title: 'Ceramic Pro Gold Package', copy: 'Head-to-toe protection with 9H, Top Coat, Wheel & Caliper, and Glass coating included.', href: '/ceramic-pro-gold-package/', img: imgs[0] },
  { title: 'After Care', copy: 'Keep your Ceramic Pro coating performing correctly with proper wash habits and maintenance guidance.', href: '/aftercare/', img: imgs[1] },
  { title: 'Ceramic Tint', copy: 'KAVACA Ceramic IR tint for 99% infrared rejection and 99.9% UV block — signal-friendly install.', href: '/ceramic-tint/', img: imgs[2] },
]

export default function WindshieldProtection() {
  useEffect(() => {
    document.title = 'Windshield Protection in Phoenix, AZ | Ceramic Pro Glass Coating | King Garcia'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.content = 'Windshield protection coating at King Garcia Auto Detail in Phoenix, AZ. Ceramic Pro glass coating adds hydrophobic behavior, UV protection, and easier maintenance. Free estimates.'
  }, [])

  return (
    <>
      <section className="hero hero-about">
        <div className="container">
          <div className="hero-copy">
            <div className="eyebrow">KING GARCIA AUTO DETAIL LLC · Phoenix, AZ</div>
            <h1>Protect the Glass You Look Through Every Day.</h1>
            <p>Ceramic Pro glass coating nano-bonds to your windshield at the molecular level — adding extreme hydrophobic behavior, UV protection, and resistance to water spots, bugs, and road film. Not a film. Not a wax. A permanently bonded surface layer installed at our Phoenix shop.</p>
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
            <div className="eyebrow">Ceramic Pro Glass Coating</div>
            <h2>Not a Film. A Bonded Surface Layer.</h2>
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
              <span className="eyebrow">How Glass Coating Works</span>
              <h2>Nano-Molecular Bonding on Your Windshield</h2>
              <p>Unlike windshield treatments that sit on top of the glass and wash away within weeks, Ceramic Pro glass coating uses silicon dioxide (SiO2) nanoparticles that bond into the microscopic pores of the glass surface itself. The result is a cured layer that cannot be removed by washing, rain, or normal glass cleaning — it is part of the glass surface.</p>
              <p>This creates extreme hydrophobicity: water beads into tight spheres and sheets off at speed, carrying road film and debris with it. Bug splatter, water spots from hard Phoenix water, and road grime all release far more easily from a coated windshield than from untreated glass. The coating also reduces glare from oncoming headlights on wet roads — a meaningful safety improvement on Arizona night drives.</p>
              <div className="about-shop-ctas">
                <a className="btn gold" href="#estimate-form">Request Free Estimate</a>
                <Link className="btn outline" to="/ceramic-pro-gold-package/">View Coating Packages</Link>
              </div>
            </div>
            <div className="about-shop-img">
              <img loading="lazy" src={galleryImgs[85]} alt="Windshield coating at King Garcia Auto Detail Phoenix" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Glass Coating Benefits</div>
              <h2>Every Drive Is Cleaner. Every Window Is Clearer.</h2>
            </div>
          </div>
          <div className="grid benefits">
            <div className="benefit">
              <b>Rain Performance at Speed</b>
              <p>At highway speeds, water beads and sheets off a coated windshield with minimal wiper use in light rain. The hydrophobic layer changes how water interacts with the glass surface on every drive — not just in the first few weeks after application.</p>
            </div>
            <div className="benefit">
              <b>Arizona Water Spot Defense</b>
              <p>Phoenix hard water leaves mineral deposits that etch into untreated glass over time. Coated glass resists mineral bonding — spots wipe clean instead of baking in under desert sun and requiring aggressive compound treatment to remove.</p>
            </div>
            <div className="benefit">
              <b>Long-Term Glass Protection</b>
              <p>The coating creates a micro-smooth surface that makes the glass marginally harder to scratch from regular wiper use and road debris. Combined with UV block, the result is glass that stays cleaner, clearer, and in better condition for longer than unprotected windshields.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-band">
        <div className="container">
          <div className="gallery-split">
            <div className="gallery-copy">
              <div className="eyebrow">Protection Projects</div>
              <h2>Coated Vehicles from Our Phoenix Shop</h2>
              <p>Ceramic Pro coating installs on luxury, exotic, and daily-driven vehicles. Windshield protection is available as a standalone service or as part of a full coating package.</p>
              <Link className="btn gold" to="/projects/">View All Projects</Link>
            </div>
            <div className="gallery-fan">
              <Link className="gcard gcard-0" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[8]} alt="Coating project — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Ceramic Pro Coating</span>
                  <span className="gcard-sub">Full vehicle + glass</span>
                </div>
              </Link>
              <Link className="gcard gcard-1" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[30]} alt="Glass coating — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Windshield Protection</span>
                  <span className="gcard-sub">Nano-bonded glass coating</span>
                </div>
              </Link>
              <Link className="gcard gcard-2" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[65]} alt="Luxury vehicle coating — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Luxury Vehicle</span>
                  <span className="gcard-sub">Complete protection package</span>
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
              <h2>Complete Protection at King Garcia</h2>
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
