import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'
import { galleryImgs } from '../data'

const specs = [
  {
    stat: '99%',
    label: 'IR Rejection',
    desc: 'Infrared energy blocked at the glass — interior stays measurably cooler on direct Phoenix sun days',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
      </svg>
    ),
  },
  {
    stat: '99.9%',
    label: 'UV Blocked',
    desc: 'SPF 1000+ equivalent — prevents skin damage and stops dashboard cracking, leather fade, and interior damage',
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
    stat: '0',
    label: 'Signal Loss',
    desc: 'Non-metallic, non-conductive ceramic particles — GPS, Bluetooth, satellite radio, and cell signals fully intact',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M1.42 9.06a10 10 0 0 1 14.14 0"/>
        <path d="M5 12.55a5 5 0 0 1 7.07 0"/>
        <path d="M10.5 16.5l1.5 1.5 1.5-1.5"/>
      </svg>
    ),
  },
  {
    stat: 'Zero',
    label: 'Optical Haze',
    desc: 'No purple cast, no fog, no bluish tint — sharp, natural vision day and night in every light condition',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
]

export default function CeramicTint() {
  useEffect(() => {
    document.title = 'Ceramic Window Tint in Phoenix, AZ | KAVACA Ceramic IR | King Garcia'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.content = 'Ceramic window tint at King Garcia Auto Detail in Phoenix, AZ. KAVACA Ceramic IR blocks 99% infrared heat, 99.9% UV, and keeps GPS and cell signals intact. Free estimates.'
  }, [])

  return (
    <>
      <section className="hero hero-about">
        <div className="container">
          <div className="hero-copy">
            <div className="eyebrow">KING GARCIA AUTO DETAIL LLC · Phoenix, AZ</div>
            <h1>Heat Out. Clarity In. Signals Stay.</h1>
            <p>KAVACA Ceramic IR tint blocks 99% of infrared heat and 99.9% of UV rays without touching your GPS, Bluetooth, or cell signal. Installed at our Phoenix shop on vehicles that need real performance from their window film — not just a darker look.</p>
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
            <div className="eyebrow">KAVACA Ceramic IR Technology</div>
            <h2>Built on Nano-Ceramic Science</h2>
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
              <span className="eyebrow">How It Works</span>
              <h2>Nano-Ceramic Particles. Real-World Performance.</h2>
              <p>Standard dyed window films darken glass but still let infrared heat through — and they fade, turn purple, and interfere with electronics. KAVACA Ceramic IR uses non-metallic, non-conductive ceramic nano-particles embedded in the film that filter light at the molecular level, blocking heat and UV without any signal interference.</p>
              <p>The film stays color-stable for the life of the vehicle. No purple cast, no metallic sheen, no interference with GPS, Bluetooth, satellite, or phones. At King Garcia, every ceramic tint install is cut and heat-formed precisely — no bubbles, no lifting edges, no exposed gaps around door frames.</p>
              <div className="about-shop-ctas">
                <a className="btn gold" href="#estimate-form">Request Free Estimate</a>
                <Link className="btn outline" to="/windows-tint/">All Tint Options</Link>
              </div>
            </div>
            <div className="about-shop-img">
              <img loading="lazy" src={galleryImgs[45]} alt="Ceramic window tint installation — King Garcia Auto Detail Phoenix" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Why Ceramic Over Standard Tint</div>
              <h2>A Measurable Difference on Every Drive</h2>
            </div>
          </div>
          <div className="grid benefits">
            <div className="benefit">
              <b>Phoenix-Proof Heat Control</b>
              <p>Arizona summers push interior temperatures to extreme levels. Ceramic IR blocks the specific infrared wavelengths responsible for heat buildup — keeping the cabin cooler and reducing AC load on every drive, every day.</p>
            </div>
            <div className="benefit">
              <b>Skin and Interior Protection</b>
              <p>UV rays that fade leather, crack dashboards, and cause cumulative skin damage pass straight through untreated glass. Ceramic Tint blocks 99.9% of UV — the equivalent of SPF 1000+ on every window in the vehicle.</p>
            </div>
            <div className="benefit">
              <b>Electronics Stay Intact</b>
              <p>Metallic window films block signals. Ceramic is completely non-metallic and non-conductive — GPS navigation, keyless entry, phone calls, satellite radio, and every wireless system in the car work exactly as before.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-band">
        <div className="container">
          <div className="gallery-split">
            <div className="gallery-copy">
              <div className="eyebrow">Window Tint Projects</div>
              <h2>Real Tint Work from Our Phoenix Shop</h2>
              <p>Ceramic tint and window film installations on luxury, exotic, and daily-driven vehicles. Real photos from real vehicles at King Garcia Auto Detail.</p>
              <Link className="btn gold" to="/projects/">View All Projects</Link>
            </div>
            <div className="gallery-fan">
              <Link className="gcard gcard-0" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[10]} alt="Ceramic tint project — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Ceramic Tint</span>
                  <span className="gcard-sub">KAVACA Ceramic IR install</span>
                </div>
              </Link>
              <Link className="gcard gcard-1" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[25]} alt="Window tint install — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Full Vehicle Tint</span>
                  <span className="gcard-sub">All glass, precision cut</span>
                </div>
              </Link>
              <Link className="gcard gcard-2" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[40]} alt="Luxury vehicle tint — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Luxury Vehicle</span>
                  <span className="gcard-sub">Heat-formed, edge-sealed</span>
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
            <h2>Family-owned since 2015. Every window film install gets hands-on attention from our Phoenix shop.</h2>
          </div>
          <div className="why-kg-grid">
            <div className="why-kg-left">
              <div className="why-kg-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"/></svg>
              </div>
              <p>King Garcia Auto Detail is a family-owned shop in Phoenix, AZ. Ceramic Tint installs are handled with the same precision we bring to Ceramic Pro coatings and PPF — every edge cut clean, every panel heat-formed correctly, no shortcuts on any vehicle.</p>
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
              <img src="/assets/imgspropias/21540.jpg" alt="Window tint at King Garcia Auto Detail — Phoenix, AZ" />
              <span className="why-kg-label">King Garcia Shop</span>
            </div>
            <div className="why-kg-right">
              <div className="why-kg-fan">
                <img src="/assets/imgspropias/21516.jpg" className="fan-a" alt="Vehicle at King Garcia Auto Detail" />
                <img src="/assets/imgspropias/21525.jpg" className="fan-b" alt="Vehicle at King Garcia Auto Detail" />
                <img src="/assets/imgspropias/21508.jpg" className="fan-c" alt="Vehicle at King Garcia Auto Detail" />
              </div>
              <div className="why-kg-fan-text">
                <p>Shop-only service in Phoenix. Every install is heat-formed, edge-cut, and inspected before you leave.</p>
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

      <Reviews />
      <Footer />
    </>
  )
}
