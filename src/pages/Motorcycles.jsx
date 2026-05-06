import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Footer from '../components/Footer'
import ServiceHero from '../components/ServiceHero'
import { exotic2, exotic4, imgs } from '../data'
import moto0 from '../../assets/detailing/moto/Detailing_motorcycles_without_pe…_202605061851.jpeg'
import moto1 from '../../assets/detailing/moto/Detailing_motorcycles_without_pe…_202605061851 (1).jpeg'
import moto2 from '../../assets/detailing/moto/Detailing_motorcycles_without_pe…_202605061851 (2).jpeg'
import moto3 from '../../assets/detailing/moto/Detailing_motorcycles_without_pe…_202605061851 (3).jpeg'
import moto4 from '../../assets/detailing/moto/Detailing_motorcycles_without_pe…_202605061851 (4).jpeg'

const features = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
    ),
    title: 'Heat Resistance',
    desc: 'Coatings applied to engine areas and exhaust-adjacent surfaces withstand high operating temperatures and repel baked-on grime for easier maintenance.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
    ),
    title: 'Chrome & Trim Care',
    desc: 'Dedicated treatment for chrome, polished metal, and exposed trim — surfaces that pick up road film, water spots, and oxidation faster than painted panels.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    ),
    title: 'Component-Level Precision',
    desc: 'Fuel tank, fenders, wheels, painted panels, and hard-to-reach engine compartments each get targeted attention — not a general wipe-down.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    title: 'Simplified Maintenance',
    desc: 'Hydrophobic surface behavior reduces how much effort is needed to clean hard-to-reach areas on the next wash — especially critical on bikes with tight chassis geometry.',
  },
]

const relatedPages = [
  { href: '/cars/', title: 'Car Detailing', copy: 'Interior, exterior, and paint prep detailing for daily drivers, luxury cars, and exotics.', img: exotic2 },
  { href: '/ceramic-pro-coatings/', title: 'Ceramic Pro Coatings', copy: 'Nano-ceramic coating packages for gloss, surface protection, and easier maintenance.', img: imgs[1] },
  { href: '/boats/', title: 'Boat & Marine Detailing', copy: 'Marine detailing and Ceramic Pro Marine options for boats and watercraft in Arizona.', img: exotic4 },
]

export default function Motorcycles() {
  useEffect(() => {
    document.title = 'Motorcycle Detailing in Phoenix, AZ | King Garcia Auto Detail'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.content = 'Motorcycle detailing in Phoenix, AZ at King Garcia Auto Detail. Precision care for painted panels, chrome, wheels, trim, and engine components. Family-owned since 2015. Free estimates.'
  }, [])

  return (
    <>
      <ServiceHero
        eyebrow="Motorcycle Detailing · Phoenix, AZ"
        h1="Every Surface. Every Detail. Motorcycle Detailing in Phoenix."
        intro="Motorcycles have more exposed painted surfaces, chrome, and tight mechanical areas than any car. King Garcia Auto Detail gives every bike the component-level attention it requires — careful, patient, and performed in-shop at our Phoenix location."
        pills={['Family-Owned', 'Since 2015', '15+ Years Experience', '4.9★ Google Rating']}
        img={moto0}
      />

      {/* SERVICE INTRO SPLIT */}
      <section>
        <div className="container">
          <div className="svc-split">
            <div className="svc-split-copy">
              <span className="eyebrow">Motorcycle Detailing</span>
              <h2>Bikes Require a Different Kind of Attention.</h2>
              <p>Unlike cars, motorcycles expose nearly everything to the elements — painted panels, chrome exhaust, engine components, wheels, and trim are all in direct contact with road grime, heat, bugs, and UV daily. Standard washing doesn't reach what needs to be reached.</p>
              <p>King Garcia Auto Detail approaches motorcycle detailing with the same focus applied to exotic cars: component by component, surface by surface, using the right technique for each material. Painted panels, polished metal, rubber, leather, and chrome each respond differently — and are treated accordingly.</p>
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
              <div className="eyebrow">What We Address</div>
              <h2>The Three Areas That Matter Most on a Motorcycle</h2>
            </div>
            <p>Motorcycles have specific surfaces and challenges that general detailing misses. These are the areas King Garcia focuses on.</p>
          </div>
          <div className="grid benefits">
            <div className="benefit">
              <b>Exposed Surface Protection</b>
              <p>Every painted surface on a motorcycle is fully exposed to road debris, UV, and grime. Detailing and ceramic coating options help slow the damage that riding in Phoenix conditions accelerates.</p>
            </div>
            <div className="benefit">
              <b>Leather & Vinyl Care</b>
              <p>Seat material, grips, and instrument shrouds are vulnerable to UV cracking and fading in Arizona heat. Conditioning and protective treatments help extend their appearance and lifespan.</p>
            </div>
            <div className="benefit">
              <b>Visor & Helmet Option</b>
              <p>Helmet visor treatments improve water-shedding behavior in rain and reduce how aggressively bugs and dust adhere — a practical benefit for Arizona riding conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP SECTION */}
      <section className="about-shop">
        <div className="container">
          <div className="about-shop-grid">
            <div className="about-shop-copy">
              <span className="eyebrow">Performed at Our Phoenix Shop</span>
              <h2>In-Shop Service. Proper Equipment. Personal Attention.</h2>
              <p>All motorcycle detailing is performed at King Garcia Auto Detail's Phoenix shop at 702 W Melinda Ln STE 2. No mobile service — the shop environment allows the team to control conditions, use the right tools for each surface, and give every bike the time it needs.</p>
              <p>Whether it's a cruiser, sport bike, touring machine, or custom build, the approach is the same: careful hands-on work from technicians who understand how motorcycles are built and how their surfaces respond.</p>
              <div className="about-shop-ctas">
                <a className="btn gold" href="#estimate-form">Get a Free Estimate</a>
                <a className="btn outline" href="tel:6023740366">Call (602) 374-0366</a>
              </div>
            </div>
            <div className="about-shop-img">
              <img src={moto4} alt="King Garcia Auto Detail shop — Motorcycle detailing Phoenix, AZ" />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY BAND */}
      <section className="gallery-band">
        <div className="container">
          <div className="gallery-split">
            <div className="gallery-copy">
              <div className="eyebrow">Real Work</div>
              <h2>Motorcycles Detailed at Our Phoenix Shop</h2>
              <p>A look at detailing and surface protection work performed at King Garcia Auto Detail — including painted panels, chrome, wheels, and trim on bikes of all types.</p>
              <Link className="btn gold" to="/projects/">View All Projects</Link>
            </div>
            <div className="gallery-fan">
              <Link className="gcard gcard-0" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={moto1} alt="Motorcycle detailing — King Garcia Auto Detail Phoenix" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Panel & Chrome Detail</span>
                  <span className="gcard-sub">Full motorcycle detailing</span>
                </div>
              </Link>
              <Link className="gcard gcard-1" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={moto2} alt="Shop work — King Garcia Auto Detail" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Surface Prep</span>
                  <span className="gcard-sub">Decontamination & polish</span>
                </div>
              </Link>
              <Link className="gcard gcard-2" to="/projects/">
                <div className="gcard-img">
                  <img loading="lazy" src={moto3} alt="Detail work — King Garcia Auto Detail Phoenix" />
                  <span className="gcard-tag">Phoenix, AZ</span>
                </div>
                <div className="gcard-info">
                  <span className="gcard-title">Protection Applied</span>
                  <span className="gcard-sub">Ceramic coating option</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Explore More</div>
              <h2>Other Services at King Garcia Auto Detail</h2>
            </div>
            <p>Motorcycle detailing pairs well with ceramic coating and is part of a full service lineup available at the Phoenix shop.</p>
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
