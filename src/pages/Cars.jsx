import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Footer from '../components/Footer'
import ServiceHero from '../components/ServiceHero'
import { imgPrimary, imgDetail, imgs } from '../data'
import car0 from '../../assets/detailing/cars/Detailing_american_business_cars_202605061843.jpeg'
import car1 from '../../assets/detailing/cars/Detailing_american_business_cars_202605061843 (1).jpeg'
import car2 from '../../assets/detailing/cars/Detailing_american_business_cars_202605061843 (2).jpeg'
import car3 from '../../assets/detailing/cars/Detailing_american_business_cars_202605061843 (3).jpeg'
import car4 from '../../assets/detailing/cars/Detailing_american_business_cars_202605061843 (4).jpeg'
import car5 from '../../assets/detailing/cars/Detailing_american_business_cars_202605061843 (5).jpeg'

const features = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/></svg>
    ),
    title: 'Hydrophobic Surface Behavior',
    desc: 'Nano-ceramic coating prep repels water, mud, and road grime — reducing how often you have to wash and how hard you have to scrub.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
    ),
    title: 'UV & Oxidation Protection',
    desc: 'Arizona sun fades and oxidizes unprotected paint fast. Detailing removes existing damage and preps surfaces to accept ceramic coating or PPF.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"/></svg>
    ),
    title: 'Chemical Resistance Prep',
    desc: 'Brake dust, bird droppings, tree sap, and road salt removed and neutralized before they etch into the clear coat.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
    ),
    title: 'Deep Gloss Finish',
    desc: 'A mirror-like result that outperforms wax by far — the right base before Ceramic Pro coatings or paint protection film.',
  },
]

const steps = [
  { num: '01', title: 'Vehicle Inspection', desc: 'Paint condition, surface contaminants, and protection needs assessed before work begins.' },
  { num: '02', title: 'Decontamination Wash', desc: 'Iron fallout, tar spots, and embedded road grime removed without scratching the surface.' },
  { num: '03', title: 'Interior & Exterior Detail', desc: 'Full attention to paint, wheels, trim, glass, and interior surfaces based on the service scope.' },
  { num: '04', title: 'Protection Prep & QC', desc: 'Final inspection and surface prep — ready for coating, film, tint, or delivery.' },
]

const relatedPages = [
  { href: '/ceramic-pro-coatings/', title: 'Ceramic Pro Coatings', copy: 'Nano-ceramic coating packages to add gloss, surface hardness, and easier maintenance to your detailed car.', img: imgDetail },
  { href: '/paint-protection-films/', title: 'Paint Protection Film', copy: 'Clear, matte, black, and color-shift film options for maximum paint defense against daily road wear.', img: imgPrimary },
  { href: '/windows-tint/', title: 'Window Tint', copy: 'Ceramic and Carbon X tint options for automotive, residential, and commercial projects.', img: imgs[2] },
]

export default function Cars() {
  useEffect(() => {
    document.title = 'Car Detailing in Phoenix, AZ | Interior, Exterior & Paint Prep | King Garcia'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.content = 'Professional car detailing at King Garcia Auto Detail in Phoenix, AZ. Interior, exterior, paint prep, and protection-ready finishing for daily drivers, luxury cars, and exotics. Free estimates.'
  }, [])

  return (
    <>
      <ServiceHero
        eyebrow="Car Detailing · Phoenix, AZ"
        h1="Sharp Finish, Real Protection. Car Detailing in Phoenix."
        intro="Family-owned since 2015. King Garcia Auto Detail performs interior and exterior detailing, paint decontamination, and protection-ready finishing for daily drivers, luxury cars, and exotics — all in-shop at our Phoenix location."
        pills={['Family-Owned', 'Since 2015', '15+ Years Experience', '4.9★ Google Rating']}
        img={car0}
      />

      {/* SERVICE INTRO SPLIT */}
      <section>
        <div className="container">
          <div className="svc-split">
            <div className="svc-split-copy">
              <span className="eyebrow">Car Detailing in Phoenix</span>
              <h2>More Than a Wash. Real Surface Preparation.</h2>
              <p>Car detailing at King Garcia Auto Detail goes beyond appearance. Every service is designed to remove surface contamination, restore clarity, and leave paint in its best condition — whether the goal is a clean daily driver or a vehicle ready for Ceramic Pro coating or paint protection film.</p>
              <p>The shop has worked on everything from everyday commuters to Porsche, Lamborghini, Ferrari, and other exotic platforms. Each vehicle gets careful, hands-on attention from technicians with over 15 years of experience handling high-end finishes.</p>
              <div className="hero-ctas">
                <a className="btn gold" href="#estimate-form">Request Free Estimate</a>
                <Link className="btn outline" to="/detailing/">View All Detailing</Link>
              </div>
            </div>
            <div className="svc-features">
              {features.map(f => (
                <div key={f.title} className="svc-feature">
                  <div className="svc-feature-icon">{f.icon}</div>
                  <div className="svc-feature-body">
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL BENEFITS */}
      <section style={{ background: '#f5f5f2' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Why It Matters</div>
              <h2>What Detailing Actually Does for Your Paint</h2>
            </div>
            <p>Surface-level cleaning is not the same as proper detailing. These are the outcomes that make the difference.</p>
          </div>
          <div className="grid benefits">
            <div className="benefit">
              <b>Paint Clarity</b>
              <p>Detailing removes embedded contaminants, light swirls, and surface dullness that washing alone cannot clear. The result is a sharper, deeper paint appearance.</p>
            </div>
            <div className="benefit">
              <b>Protection-Ready Prep</b>
              <p>Ceramic Pro coatings and paint protection film bond to clean, decontaminated paint. A proper detail is the required first step before applying either.</p>
            </div>
            <div className="benefit">
              <b>Exotic & Luxury Focus</b>
              <p>Soft clear coats on high-end vehicles require careful technique. King Garcia has experience with exotic paint systems, factory finishes, and custom colors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">The Process</div>
              <h2>How We Detail Your Car</h2>
            </div>
          </div>
          <div className="svc-steps">
            {steps.map(s => (
              <div key={s.num} className="svc-step">
                <div className="svc-step-num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY BAND */}
      <section className="gallery-band">
        <div className="container">
          <div className="gallery-split">
            <div className="gallery-copy">
              <div className="eyebrow">Real Work</div>
              <h2>Cars Detailed at Our Phoenix Shop</h2>
              <p>A look at real detailing, prep, and protection work performed at King Garcia Auto Detail. Vehicles ranging from daily drivers to exotics.</p>
              <Link className="btn gold" to="/projects/">View All Projects</Link>
            </div>
            <div className="gallery-fan">
              <Link className="gcard gcard-0" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={car1} alt="Car detailing — King Garcia Auto Detail Phoenix" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Exterior Detail</span>
                  <span className="gcard-sub">Paint decontamination & polish</span>
                </div>
              </Link>
              <Link className="gcard gcard-1" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={car2} alt="Luxury car detail — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Luxury Vehicle</span>
                  <span className="gcard-sub">Full interior & exterior detail</span>
                </div>
              </Link>
              <Link className="gcard gcard-2" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={car3} alt="Paint prep — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Protection Prep</span>
                  <span className="gcard-sub">Coating-ready surface finish</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY KING GARCIA */}
      <section className="why-kg">
        <div className="container">
          <div className="why-kg-header">
            <div className="eyebrow">Why King Garcia</div>
            <h2>Since 2015, we've detailed hundreds of vehicles across Phoenix — from daily drivers to exotic supercars.</h2>
          </div>
          <div className="why-kg-grid">
            <div className="why-kg-left">
              <div className="why-kg-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"/></svg>
              </div>
              <p>King Garcia Auto Detail is a family-owned shop in Phoenix, AZ. Every car detailing service gets personal attention from technicians with over 15 years of hands-on experience in surface prep, paint care, and automotive protection.</p>
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
                  4.9★ on Google · 83 Reviews
                </span>
                <span className="why-kg-badge">
                  <span className="why-kg-badge-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  In-Shop Service Only · Phoenix, AZ
                </span>
              </div>
              <div className="why-kg-ctas">
                <a className="btn gold why-kg-btn" href="#estimate-form">Get a Free Estimate</a>
                <a className="why-kg-arrow" href="tel:6023740366" aria-label="Call us">↗</a>
              </div>
            </div>
            <div className="why-kg-main">
              <img src={car4} alt="Car detailing at King Garcia Auto Detail — Phoenix, AZ" />
              <span className="why-kg-label">King Garcia Shop · Phoenix, AZ</span>
            </div>
            <div className="why-kg-right">
              <div className="why-kg-fan">
                <img src={car5} className="fan-a" alt="Detail work at King Garcia Auto Detail" />
                <img src={car3} className="fan-b" alt="Detail work at King Garcia Auto Detail" />
                <img src={car2} className="fan-c" alt="Detail work at King Garcia Auto Detail" />
              </div>
              <div className="why-kg-fan-text">
                <p>Real photos from cars we've detailed at our Phoenix shop — from exterior paint prep to full interior and exterior finishing.</p>
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

      {/* RELATED SERVICES */}
      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Pair With Detailing</div>
              <h2>Take It Further After the Detail</h2>
            </div>
            <p>Detailing is the starting point. These services protect and enhance what the detail reveals.</p>
          </div>
          <div className="grid cards">
            {relatedPages.map(r => (
              <Card key={r.href} title={r.title} copy={r.copy} href={r.href} img={r.img} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

