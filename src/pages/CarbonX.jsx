import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { galleryImgs } from '../data'

const specs = [
  {
    stat: 'True',
    label: 'Black Finish',
    desc: 'Carbon pigment stays deep black for the life of the film — no purple fade, no brown shift, no metallic sheen over time',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    stat: 'High',
    label: 'Heat Absorption',
    desc: 'Carbon particles absorb infrared energy rather than reflect it — effective thermal control with no reflective glare or haze',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
      </svg>
    ),
  },
  {
    stat: '0',
    label: 'Signal Interference',
    desc: 'Zero metallic content — GPS navigation, Bluetooth, satellite radio, keyless entry, and phone signals stay fully operational',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M1.42 9.06a10 10 0 0 1 14.14 0"/>
        <path d="M5 12.55a5 5 0 0 1 7.07 0"/>
        <path d="M10.5 16.5l1.5 1.5 1.5-1.5"/>
      </svg>
    ),
  },
  {
    stat: 'Lifetime',
    label: 'Color Stability',
    desc: 'Carbon X is engineered to hold its appearance — no discoloration, no fading, no visual degradation from Arizona sun exposure',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

export default function CarbonX() {
  useEffect(() => {
    document.title = 'Carbon X Window Tint in Phoenix, AZ | KAVACA Carbon X | King Garcia'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.content = 'Carbon X window tint at King Garcia Auto Detail in Phoenix, AZ. Deep, stable black finish with heat rejection and zero signal interference. Free estimates.'
  }, [])

  return (
    <>
      <section className="hero hero-about">
        <div className="container">
          <div className="hero-copy">
            <div className="eyebrow">KING GARCIA AUTO DETAIL LLC · Phoenix, AZ</div>
            <h1>True Black. Every Panel. Zero Compromise.</h1>
            <p>KAVACA Carbon X delivers a deep, stable black finish that doesn't turn purple, brown, or metallic over time — combined with strong heat rejection and zero interference with your electronics. For drivers who want a clean, aggressive look and real thermal performance from their tint.</p>
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
            <div className="eyebrow">KAVACA Carbon X Technology</div>
            <h2>Carbon-Infused. Aesthetics-First. Performance-Proven.</h2>
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
              <span className="eyebrow">Carbon X vs. Standard Tint</span>
              <h2>Carbon Particles. Not Dyes. Not Metal.</h2>
              <p>Dyed films fade and turn purple over time — they absorb heat poorly and often interfere with electronics. Metallic films block signals. Carbon X sits between the two: carbon particles embedded in the film absorb infrared heat rather than simply reflecting it, which means effective thermal control without the hazy, reflective look of metallic tint.</p>
              <p>The color stays. The performance holds. Unlike budget tints that go brownish or metallic-looking within a few years of Arizona sun, Carbon X maintains its true black finish across the entire life of the film. At King Garcia, every Carbon X install is cut and formed to fit the glass exactly — no gaps, no bubbles, clean edges on every panel.</p>
              <div className="about-shop-ctas">
                <a className="btn gold" href="#estimate-form">Request Free Estimate</a>
                <Link className="btn outline" to="/ceramic-tint/">Compare: Ceramic Tint</Link>
              </div>
            </div>
            <div className="about-shop-img">
              <img loading="lazy" src={galleryImgs[60]} alt="Carbon X tint install — King Garcia Auto Detail Phoenix" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Carbon X Advantages</div>
              <h2>The Right Tint for Looks and Performance</h2>
            </div>
          </div>
          <div className="grid benefits">
            <div className="benefit">
              <b>Color That Lasts</b>
              <p>Budget window films go purple or brown within a few years of Phoenix sun. Carbon X uses stable carbon pigmentation that holds its true black appearance across the full life of the install — no discoloration, no fading, no embarrassing tint jobs.</p>
            </div>
            <div className="benefit">
              <b>Heat Absorbed, Not Reflected</b>
              <p>Carbon particles absorb infrared energy at the glass rather than bouncing it back toward other vehicles or pedestrians. The result is effective heat reduction with a clean, non-reflective look that works on any vehicle color or body style.</p>
            </div>
            <div className="benefit">
              <b>Every Device Works as Before</b>
              <p>No metals, no signal interference. GPS navigation, phone calls, satellite radio, Bluetooth, keyless entry, and toll transponders all operate normally through Carbon X. The film adds no electromagnetic interference whatsoever.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-band">
        <div className="container">
          <div className="gallery-split">
            <div className="gallery-copy">
              <div className="eyebrow">Tint Projects</div>
              <h2>Carbon X Work from Our Phoenix Shop</h2>
              <p>Window tint installations on daily drivers, luxury cars, and exotics. Every vehicle photographed at King Garcia Auto Detail in Phoenix, AZ.</p>
              <Link className="btn gold" to="/projects/">View All Projects</Link>
            </div>
            <div className="gallery-fan">
              <Link className="gcard gcard-0" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[15]} alt="Carbon X tint — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Carbon X Tint</span>
                  <span className="gcard-sub">KAVACA Carbon X install</span>
                </div>
              </Link>
              <Link className="gcard gcard-1" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[35]} alt="Window tint — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Full Vehicle</span>
                  <span className="gcard-sub">Deep black, all glass</span>
                </div>
              </Link>
              <Link className="gcard gcard-2" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[55]} alt="Tint project — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Exotic Vehicle</span>
                  <span className="gcard-sub">Precision cut &amp; heat-formed</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="why-kg">
        <div className="container">
          <div className="why-kg-header">
            <div className="eyebrow">Why King Garcia</div>
            <h2>Shop-based. Family-owned. Every tint install handled right the first time.</h2>
          </div>
          <div className="why-kg-grid">
            <div className="why-kg-left">
              <div className="why-kg-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"/></svg>
              </div>
              <p>King Garcia Auto Detail has been a family-owned shop in Phoenix since 2015. Every Carbon X install goes through the same precision process as our Ceramic Pro and PPF work — proper surface prep, heat-forming on curved glass, and a clean finish you can see the difference in immediately.</p>
              <div className="why-kg-features">
                <span className="why-kg-badge">
                  <span className="why-kg-badge-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></span>
                  Family-Owned Since 2015
                </span>
                <span className="why-kg-badge">
                  <span className="why-kg-badge-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span>
                  15+ Years Experience
                </span>
                <span className="why-kg-badge">
                  <span className="why-kg-badge-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
                  In-Shop Only · Phoenix, AZ
                </span>
              </div>
              <div className="why-kg-ctas">
                <a className="btn gold why-kg-btn" href="#estimate-form">Get a Free Estimate</a>
                <a className="why-kg-arrow" href="tel:6023740366" aria-label="Call us">↗</a>
              </div>
            </div>
            <div className="why-kg-main">
              <img src="/assets/imgspropias/21518.jpg" alt="King Garcia Auto Detail shop — Phoenix, AZ" />
              <span className="why-kg-label">King Garcia Shop</span>
            </div>
            <div className="why-kg-right">
              <div className="why-kg-fan">
                <img src="/assets/imgspropias/21504.jpg" className="fan-a" alt="Vehicle at King Garcia Auto Detail" />
                <img src="/assets/imgspropias/21506.jpg" className="fan-b" alt="Vehicle at King Garcia Auto Detail" />
                <img src="/assets/imgspropias/21514.jpg" className="fan-c" alt="Vehicle at King Garcia Auto Detail" />
              </div>
              <div className="why-kg-fan-text">
                <p>Real project photos from our Phoenix shop. Tint, coatings, PPF, and detailing on luxury and exotic vehicles.</p>
              </div>
            </div>
          </div>
          <div className="why-kg-stats">
            <div className="why-kg-stat"><b>2015</b><span>family-owned since</span></div>
            <div className="why-kg-stat"><b>15+</b><span>years of experience</span></div>
            <div className="why-kg-stat"><b>83</b><span>Google reviews</span></div>
            <div className="why-kg-stat"><b>4.9★</b><span>average rating</span></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
