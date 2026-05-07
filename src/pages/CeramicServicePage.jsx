import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import ServiceHero from '../components/ServiceHero'
import { ceramicPages, allPkgs } from '../data/ceramicPages'

/* ── Icon map ── */
const icons = {
  shield: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"/>
    </svg>
  ),
  award: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/><path d="M8.56 14.85L7 22l5-3 5 3-1.56-7.15"/>
    </svg>
  ),
  doc: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>
    </svg>
  ),
  grid4: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
    </svg>
  ),
  drop: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <path d="M12 2C6.5 9 4 13.5 4 16a8 8 0 0 0 16 0c0-2.5-2.5-7-8-14z"/>
    </svg>
  ),
  clock: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  thermo: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
    </svg>
  ),
  anchor: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3"/><line x1="12" y1="8" x2="12" y2="22"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
    </svg>
  ),
  zap: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  layers: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
  refresh: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
    </svg>
  ),
  film: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/>
    </svg>
  ),
}

export default function CeramicServicePage({ slug }) {
  const d = ceramicPages[slug]
  useEffect(() => {
    if (!d) return
    document.title = d.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.content = d.metaDesc
  }, [d])

  if (!d) {
    return (
      <>
        <section style={{ padding: '120px 0', textAlign: 'center' }}>
          <div className="container"><h1>Page not found.</h1></div>
        </section>
        <Footer />
      </>
    )
  }

  return (
    <>
      <ServiceHero
        eyebrow="KING GARCIA AUTO DETAIL LLC · CERAMIC PRO"
        h1={d.h1}
        intro={d.intro}
        pills={['Ceramic Pro Certified', 'Shop-Based', 'Phoenix, AZ', 'Free Estimates']}
        img={d.bgImg}
      />

      {/* ── 2 · TECH SPECS ── */}
      <section className="svc-tech">
        <div className="container">
          <div className="svc-tech-grid">
            <div className="svc-tech-copy">
              <span className="eyebrow">{d.eyebrow}</span>
              <h2>{d.techH2}</h2>
              <p>{d.techP}</p>
              <div className="svc-tech-specs">
                {d.specs.map((spec) => (
                  <div key={spec.label} className="svc-tech-spec">
                    <div className="svc-tech-spec-num">{spec.num}</div>
                    <div className="svc-tech-spec-text">
                      <b>{spec.label}</b>
                      <span>{spec.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="svc-tech-img">
              <img src={d.techImg} alt={`${d.eyebrow} — King Garcia Auto Detail Phoenix`} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 · FEATURE TILES ── */}
      <section className="cp-features">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,.45)' }}>Why It Works</span>
              <h2>{d.featuresH2}</h2>
            </div>
          </div>
          <div className="cp-features-grid">
            {d.features.map((feat) => (
              <div key={feat.label} className="cp-feature">
                <div className="cp-feature-icon">{icons[feat.icon]}</div>
                <b>{feat.label}</b>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5 · GALLERY BAND ── */}
      <section className="gallery-band">
        <div className="container">
          <div className="gallery-split">
            <div className="gallery-copy">
              <div className="eyebrow">Our Work</div>
              <h2>Real Vehicles Protected at Our Shop</h2>
              <p>Ceramic coatings, paint protection film, window tint, and detailing work performed on real vehicles at King Garcia Auto Detail in Phoenix, AZ.</p>
              <Link className="btn gold" to="/projects/">View All Projects</Link>
            </div>
            <div className="gallery-fan">
              <Link className="gcard gcard-0" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={d.gal?.[0] || '/assets/imgspropias/21504.jpg'} alt="Detail work — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Ceramic Pro Coating</span>
                  <span className="gcard-sub">Multi-layer nano-ceramic</span>
                </div>
              </Link>
              <Link className="gcard gcard-1" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={d.gal?.[1] || '/assets/imgspropias/21516.jpg'} alt="Wheel coating — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">{d.galleryLabel}</span>
                  <span className="gcard-sub">{d.gallerySub}</span>
                </div>
              </Link>
              <Link className="gcard gcard-2" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={d.gal?.[2] || '/assets/imgspropias/21525.jpg'} alt="King Garcia shop work" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">King Garcia Shop</span>
                  <span className="gcard-sub">Phoenix, AZ</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6 · PACKAGE COMPARISON (packages only) ── */}
      {d.pkgActive && (
        <section className="pkg-compare">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Ceramic Pro Packages</span>
                <h2>Compare All Ceramic Pro Packages</h2>
              </div>
              <p>Choose the right level of protection for your vehicle and how long you plan to keep it.</p>
            </div>
            <div className="pkg-compare-grid">
              {allPkgs.map((pkg) => (
                <div key={pkg.slug} className={`pkg-card${pkg.slug === d.pkgActive ? ' is-active' : ''}`}>
                  <span className="pkg-label">{pkg.slug === d.pkgActive ? 'Current Package' : 'Ceramic Pro'}</span>
                  <div className="pkg-tier-name">{pkg.label}</div>
                  <div className="pkg-warranty">{pkg.warranty}</div>
                  <ul className="pkg-items">
                    {pkg.items.map((item) => (
                      <li key={item} className="pkg-item">{item}</li>
                    ))}
                  </ul>
                  <Link className={`btn${pkg.slug === d.pkgActive ? ' gold' : ' outline'}`} to={pkg.href}>
                    {pkg.slug === d.pkgActive ? 'Get an Estimate' : 'View Package'}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 7 · WHY KING GARCIA ── */}
      <section className="why-kg">
        <div className="container">
          <div className="why-kg-header">
            <div className="eyebrow">Why King Garcia</div>
            <h2>{d.whyH2}</h2>
          </div>
          <div className="why-kg-grid">
            <div className="why-kg-left">
              <div className="why-kg-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
                  <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"/>
                </svg>
              </div>
              <p>Every vehicle that comes into King Garcia Auto Detail gets personal attention from technicians with over 15 years of hands-on experience. Family-owned since 2015, the shop is built on trust, quality workmanship, and honest free estimates.</p>
              <div className="why-kg-features">
                <span className="why-kg-badge">
                  <span className="why-kg-badge-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  </span>
                  Family-Owned Since 2015
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
              <img src="/assets/imgspropias/21540.jpg" alt="King Garcia Auto Detail shop — Phoenix, AZ" />
              <span className="why-kg-label">King Garcia Shop</span>
            </div>

            <div className="why-kg-right">
              <div className="why-kg-fan">
                <img src="/assets/imgspropias/21504.jpg" className="fan-a" alt="Detail work at King Garcia Auto Detail" />
                <img src="/assets/imgspropias/21506.jpg" className="fan-b" alt="Ceramic coating at King Garcia Auto Detail" />
                <img src="/assets/imgspropias/21514.jpg" className="fan-c" alt="PPF at King Garcia Auto Detail" />
              </div>
              <div className="why-kg-fan-text">
                <p>Real photos from vehicles protected at our Phoenix shop — ceramic coatings, PPF, window tint, and full detailing.</p>
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
