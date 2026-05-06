import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import CeramicPackageOrbs from '../components/CeramicPackageOrbs'
import Reviews from '../components/Reviews'
import { imgPrimary, imgDetail, exotic1, exotic2, exotic3, exotic4, galleryImgs } from '../data'

function onBentoMove(e) {
  const el = e.currentTarget
  const { left, top, width, height } = el.getBoundingClientRect()
  const rotY = -((e.clientX - left - width / 2) / (width / 2)) * 14
  const rotX = ((e.clientY - top - height / 2) / (height / 2)) * 10
  el.style.transition = 'transform 0.05s linear'
  el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg)`
}

function onBentoLeave(e) {
  const el = e.currentTarget
  el.style.transition = 'transform 0.55s ease'
  el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
}

const services = [
  ['Auto Detailing', 'Interior and exterior detailing for vehicles that need a cleaner, sharper, better-protected finish.', '/detailing/', exotic1],
  ['Ceramic Coatings', 'Ceramic Pro coating packages available at King Garcia Auto Detail to add gloss, support easier maintenance, and help protect painted surfaces.', '/ceramic-pro-coatings/', imgDetail],
  ['Paint Protection Film', 'Clear, matte, black, urban, and color-shift film options for added defense against daily road wear.', '/paint-protection-films/', exotic2],
  ['Window Tint', 'Automotive, residential, and commercial tint services for privacy, comfort, and a clean finished look.', '/windows-tint/', exotic3],
  ['Boats / Marine', 'Marine detailing and coating services for boats that need shine, surface protection, and easier upkeep.', '/boats/', exotic4],
  ['Motorcycles', 'Motorcycle detailing and protection with careful attention to exposed finishes, trim, and tight areas.', '/motorcycles/', imgPrimary],
]

const packageLinks = [
  ['Gold Package', 'Ultimate Ceramic Pro coating package with 9H, Top Coat, Wheel & Caliper, and Glass.', '/ceramic-pro-gold-package/'],
  ['Silver Package', 'Popular 5-year Ceramic Pro package with 9H, Top Coat, Wheel & Caliper, and Glass.', '/ceramic-pro-silver-package/'],
  ['Bronze Package', 'Value-focused Ceramic Pro package with Top Coat, Wheel & Caliper, and Glass.', '/ceramic-pro-bronze-package/'],
  ['Sport Package', 'Introductory Ceramic Pro Sport package for gloss and easier maintenance.', '/ceramic-pro-sport-package/'],
]

const areas = ['Phoenix', 'Scottsdale', 'Chandler', 'Cave Creek', 'Anthem', 'Paradise Valley Village', 'Deer Valley', 'Tempe']

const mapCities = [
  { name: 'Phoenix',          x: 210, y: 28,  side: 'right' },
  { name: 'Anthem',           x: 168, y: 128, side: 'left'  },
  { name: 'Cave Creek',       x: 151, y: 200, side: 'right' },
  { name: 'Deer Valley',      x: 172, y: 264, side: 'left'  },
  { name: 'Scottsdale',       x: 174, y: 332, side: 'right' },
  { name: 'Paradise Valley',  x: 190, y: 400, side: 'left'  },
  { name: 'Chandler',         x: 202, y: 460, side: 'right' },
  { name: 'Tempe',            x: 195, y: 522, side: 'left'  },
]


const mapCitiesH = [
  { name: 'Phoenix',         x: 25,  y: 72,  labelY: 52  },
  { name: 'Anthem',          x: 78,  y: 98,  labelY: 120 },
  { name: 'Cave Creek',      x: 132, y: 58,  labelY: 40  },
  { name: 'Deer Valley',     x: 186, y: 98,  labelY: 120 },
  { name: 'Scottsdale',      x: 237, y: 62,  labelY: 44  },
  { name: 'Paradise Valley', x: 286, y: 98,  labelY: 120 },
  { name: 'Chandler',        x: 336, y: 62,  labelY: 44  },
  { name: 'Tempe',           x: 376, y: 88,  labelY: 112 },
]

export default function Home() {
  const porscheRef = useRef(null)
  const areasRef   = useRef(null)
  const bluecarRef = useRef(null)

  useEffect(() => {
    document.title = 'Auto Detailing, Ceramic Coating & PPF in Phoenix, AZ | King Garcia Auto Detail'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.content = 'KING GARCIA AUTO DETAIL LLC provides auto detailing, Ceramic Pro coatings, paint protection film, window tint, boat and motorcycle detailing in Phoenix, AZ. Free estimates.'
  }, [])

  useEffect(() => {
    const img = porscheRef.current
    if (!img) return
    let raf
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const { top, height } = img.getBoundingClientRect()
        const vh = window.innerHeight
        // progress 0 = just entered viewport bottom, 1 = just left viewport top
        const progress = Math.min(1, Math.max(0, (vh - top) / (vh + height)))
        // scale: 1.07 entering → 0.96 leaving (very subtle 11% range)
        const scale = 1.07 - progress * 0.11
        img.style.transform = `scale(${scale})`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    const section = areasRef.current
    if (!section) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { section.classList.add('is-visible'); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(section)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const img = bluecarRef.current
    if (!img) return
    let raf
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const { top, height } = img.closest('.ppf-band').getBoundingClientRect()
        const vh = window.innerHeight
        const progress = Math.min(1, Math.max(0, (vh - top) / (vh + height)))
        // right → left: starts 6% right, ends 6% left
        const tx = 2 - progress * 4
        img.style.transform = `translateX(${tx}%)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-copy">
            <div className="eyebrow">KING GARCIA AUTO DETAIL LLC</div>
            <h1>Premium Auto Detailing, Ceramic Coatings &amp; Paint Protection Film in Phoenix, AZ</h1>
            <p>Family-owned since 2015, King Garcia Auto Detail helps protect and enhance cars, motorcycles, boats, and exotic vehicles with professional shop-based detailing, Ceramic Pro coatings, paint protection film, and window tint services.</p>
            <div className="hero-ctas">
              <a className="btn gold" href="#estimate-form">Get a Free Estimate</a>
              <a className="btn outline" href="tel:6023740366">Call (602) 374-0366</a>
            </div>
            <div className="trust">
              <span className="pill">Family-Owned</span>
              <span className="pill">Since 2015</span>
              <span className="pill">15+ Years Experience</span>
              <span className="pill">Free Estimates</span>
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

      <section>
        <div className="container">
          <div className="section-head">
            <div><div className="eyebrow">Luxury Protection Services</div><h2>Built for Exotic, Luxury &amp; Daily Driven Vehicles</h2></div>
            <p>Premium automotive protection with the visual impact Phoenix drivers expect from a high-end Ceramic Pro-style shop.</p>
          </div>
          <div className="bento-services">
            {services.map(([title, copy, href, img], i) => (
              <Link key={href} className="bento-cell" to={href} onMouseMove={onBentoMove} onMouseLeave={onBentoLeave}>
                <img loading="lazy" src={img} alt={`${title} at KING GARCIA AUTO DETAIL LLC`} />
                <div className="bento-body">
                  {i === 0 && <span className="eyebrow bento-eyebrow">Featured Service</span>}
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <span className="bento-link">View Service →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ceramic-packages">
        <div className="container ceramic-pkg-head">
          <span className="eyebrow">Ceramic Pro Packages</span>
          <h2>Ceramic Pro Coating Packages Available at King Garcia</h2>
        </div>
        <div className="ceramic-pkg-car">
          <img ref={porscheRef} src="/assets/porcheimage01.png" alt="Porsche at King Garcia Auto Detail — Ceramic Coating" />
        </div>
        <div className="container ceramic-pkg-foot">
          <p>Ceramic Pro coating options are available for vehicles needing gloss, hydrophobic behavior, easier maintenance, and premium paint protection package structure.</p>
          <div className="ceramic-pkg-ctas">
            <Link className="btn gold" to="/ceramic-pro-coatings/">Explore Ceramic Coatings</Link>
            <a className="btn outline" href="#estimate-form">Request Package Guidance</a>
          </div>
        </div>
        <div className="container">
          <CeramicPackageOrbs />
        </div>
      </section>

      <section className="ppf-band">
          <div className="ppf-copy">
            <span className="eyebrow ppf-eyebrow">PPF • Tint • Color Shift</span>
            <h2>High-Impact Protection. Exotic-Car Presence.</h2>
            <p>Clear, matte, black, urban, and shift-color paint protection film options combine with premium tint services for an aggressive luxury finish.</p>
            <div className="ppf-ctas">
              <Link className="btn ppf-btn" to="/paint-protection-films/">View PPF Services</Link>
              <Link className="btn ppf-btn" to="/windows-tint/">View Tint Services</Link>
            </div>
          </div>
          <div className="ppf-visual">
              <img ref={bluecarRef} src="/assets/bluecar.png" alt="Blue Camaro — PPF &amp; Tint at King Garcia Auto Detail" className="bluecar-img" />
          </div>
      </section>

      <section className="gallery-band">
        <div className="container">
          <div className="gallery-split">
            <div className="gallery-copy">
              <div className="eyebrow">Projects Gallery</div>
              <h2>Exotic &amp; Luxury Automotive Visuals</h2>
              <p>Real project visuals from ceramic coatings, paint protection film, window tint, and detailing work performed at our Phoenix shop.</p>
              <Link className="btn gold" to="/projects/">View All Projects</Link>
            </div>
            <div className="gallery-fan">
              <Link className="gcard gcard-0" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[6]} alt="Auto detail project — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Auto Detailing</span>
                  <span className="gcard-sub">Interior &amp; exterior detail</span>
                </div>
              </Link>
              <Link className="gcard gcard-1" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[1]} alt="Ceramic Pro coating — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Ceramic Pro Gold</span>
                  <span className="gcard-sub">Multi-layer nano-ceramic</span>
                </div>
              </Link>
              <Link className="gcard gcard-2" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={galleryImgs[3]} alt="Paint protection film — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Paint Protection Film</span>
                  <span className="gcard-sub">Full car coverage</span>
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
            <h2>Since 2015, our shop has protected hundreds of vehicles across Phoenix, from daily drivers to exotic supercars.</h2>
          </div>
          <div className="why-kg-grid">
            <div className="why-kg-left">
              <div className="why-kg-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"/></svg>
              </div>
              <p>King Garcia Auto Detail is a family-owned shop in Phoenix, AZ. Every vehicle gets personal attention from technicians with over 15 years of hands-on experience in automotive protection.</p>
              <div className="why-kg-features">
                <span className="why-kg-badge">
                  <span className="why-kg-badge-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  </span>
                  Family-Owned
                </span>
                <span className="why-kg-badge">
                  <span className="why-kg-badge-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  </span>
                  15+ Years Experience
                </span>
                <span className="why-kg-badge">
                  <span className="why-kg-badge-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  In-Shop Service Only
                </span>
              </div>
              <div className="why-kg-ctas">
                <a className="btn gold why-kg-btn" href="#estimate-form">Get a Free Estimate</a>
                <a className="why-kg-arrow" href="tel:6023740366" aria-label="Call us">↗</a>
              </div>
            </div>

            <div className="why-kg-main">
              <img src="/assets/imgspropias/21518.jpg" alt="Vehicle at King Garcia Auto Detail — Phoenix, AZ" />
              <span className="why-kg-label">King Garcia Shop</span>
            </div>

            <div className="why-kg-right">
              <div className="why-kg-fan">
                <img src="/assets/imgspropias/21504.jpg" className="fan-a" alt="Detail work at King Garcia Auto Detail" />
                <img src="/assets/imgspropias/21506.jpg" className="fan-b" alt="Detail work at King Garcia Auto Detail" />
                <img src="/assets/imgspropias/21516.jpg" className="fan-c" alt="Detail work at King Garcia Auto Detail" />
              </div>
              <div className="why-kg-fan-text">
                <p>Real photos of vehicles we've protected at our Phoenix shop: ceramic coatings, PPF, window tint, and full detailing.</p>
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

      <section className="areas-section" ref={areasRef}>
        <div className="areas-map" aria-hidden="true">
          <svg viewBox="0 0 420 640" className="route-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="routeGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#e4c46e"/>
                <stop offset="60%"  stopColor="#c9a24a"/>
                <stop offset="100%" stopColor="#c9a24a" stopOpacity=".4"/>
              </linearGradient>
            </defs>
            {/* Street grid */}
            <g stroke="rgba(255,255,255,.05)" strokeWidth="1" fill="none">
              <line x1="0" y1="110" x2="420" y2="110"/>
              <line x1="0" y1="230" x2="420" y2="230"/>
              <line x1="0" y1="350" x2="420" y2="350"/>
              <line x1="0" y1="470" x2="420" y2="470"/>
              <line x1="0" y1="590" x2="420" y2="590"/>
              <line x1="70"  y1="0" x2="70"  y2="640"/>
              <line x1="210" y1="0" x2="210" y2="640"/>
              <line x1="330" y1="0" x2="330" y2="640"/>
            </g>
            <g stroke="rgba(255,255,255,.03)" strokeWidth="1" fill="none">
              <line x1="0" y1="170" x2="180" y2="0"/>
              <line x1="260" y1="640" x2="420" y2="420"/>
            </g>
            {/* Animated route */}
            <path
              className="route-line"
              d="M 210 0 C 210 60, 178 92, 162 138 C 146 184, 172 218, 178 264 C 184 310, 152 340, 164 384 C 176 428, 205 452, 202 498 C 199 544, 180 566, 186 640"
              stroke="url(#routeGrad)" strokeWidth="3.5" fill="none" strokeLinecap="round"
            />
            {/* City dots */}
            {mapCities.map((city, i) => (
              <g key={city.name} className="city-dot" style={{ '--delay': `${0.6 + i * 0.32}s` }}>
                <circle cx={city.x} cy={city.y} r="10" fill="var(--gold)" opacity=".2"/>
                <circle cx={city.x} cy={city.y} r="4.5" fill="var(--gold2)" opacity=".95"/>
              </g>
            ))}
          </svg>
          {/* City labels */}
          {mapCities.map((city, i) => (
            <div
              key={city.name}
              className={`city-label city-label--${city.side}`}
              style={{
                top: `${city.y - 11}px`,
                ...(city.side === 'right'
                  ? { left: `${city.x + 18}px` }
                  : { right: `${420 - city.x + 18}px` }),
                animationDelay: `${0.85 + i * 0.32}s`,
              }}
            >
              {city.name}
            </div>
          ))}
          {/* Moving nav pin */}
          <div className="map-nav-pin">▲</div>
        </div>

        <div className="areas-map-h" aria-hidden="true">
          <svg viewBox="0 0 400 160" className="route-svg-h" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="routeGradH" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#e4c46e"/>
                <stop offset="60%" stopColor="#c9a24a"/>
                <stop offset="100%" stopColor="#c9a24a" stopOpacity=".4"/>
              </linearGradient>
              <filter id="glowH" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="4" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            {/* Street grid */}
            <g stroke="rgba(255,255,255,.05)" strokeWidth="1" fill="none">
              <line x1="0" y1="40" x2="400" y2="40"/>
              <line x1="0" y1="80" x2="400" y2="80"/>
              <line x1="0" y1="120" x2="400" y2="120"/>
              <line x1="80"  y1="0" x2="80"  y2="160"/>
              <line x1="160" y1="0" x2="160" y2="160"/>
              <line x1="240" y1="0" x2="240" y2="160"/>
              <line x1="320" y1="0" x2="320" y2="160"/>
            </g>
            {/* Animated route */}
            <path
              className="route-line route-line-h"
              d="M 25 72 C 42 72, 60 98, 78 98 C 96 98, 113 58, 132 58 C 151 58, 168 98, 186 98 C 204 98, 220 62, 237 62 C 254 62, 270 98, 286 98 C 302 98, 320 62, 336 62 C 352 62, 366 88, 376 88"
              stroke="url(#routeGradH)" strokeWidth="3" fill="none" strokeLinecap="round"
            />
            {/* City dots */}
            {mapCitiesH.map((city, i) => (
              <g key={city.name} className="city-dot" style={{ '--delay': `${0.6 + i * 0.3}s` }}>
                <circle cx={city.x} cy={city.y} r="9" fill="var(--gold)" opacity=".2"/>
                <circle cx={city.x} cy={city.y} r="4" fill="var(--gold2)" opacity=".95"/>
              </g>
            ))}
            {/* City labels as SVG text */}
            {mapCitiesH.map((city, i) => (
              <text
                key={city.name}
                className="city-text-h"
                x={city.x}
                y={city.labelY}
                textAnchor="middle"
                style={{ '--delay': `${0.85 + i * 0.3}s` }}
              >
                {city.name.toUpperCase()}
              </text>
            ))}
            {/* Moving nav pin */}
            <g className="map-nav-pin-h-g" filter="url(#glowH)">
              <circle r="11" fill="#c9a24a"/>
              <text textAnchor="middle" dy="0.38em" fontSize="10" fontWeight="900" fill="#0a0a0a">▲</text>
            </g>
          </svg>
        </div>

        <div className="areas-copy">
          <div className="eyebrow">Service Areas</div>
          <h2>Serving Phoenix &amp; the Greater Valley</h2>
          <p>King Garcia Auto Detail serves drivers across Phoenix, Scottsdale, Chandler, Cave Creek, Anthem, and nearby cities with shop-based detailing, Ceramic Pro coatings, paint protection film, and window tint.</p>
          <div className="areas-ctas">
            <a className="btn gold" href="#estimate-form">Get a Free Estimate</a>
            <a className="btn outline areas-outline" href="tel:6023740366">Call (602) 374-0366</a>
          </div>
        </div>
      </section>

      <Reviews />
      <Footer />
    </>
  )
}
