import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`${scrolled ? 'scrolled' : ''}${open ? ' menu-open' : ''}`}>
      <div className="nav">

        <Link className="logo" to="/">
          <img src="/assets/isologo.svg" alt="King Garcia Auto Detail" />
        </Link>

        <ul className="desktop-nav" aria-label="Main navigation">
          <li><Link to="/about/">About</Link></li>
          <li>
            <span className="dropbtn">Detailing</span>
            <div className="dropdown">
              <Link to="/cars/">Cars</Link>
              <Link to="/motorcycles/">Motorcycles</Link>
              <Link to="/boats/">Boats</Link>
            </div>
          </li>
          <li>
            <span className="dropbtn">Ceramic Coatings</span>
            <div className="dropdown">
              <Link to="/ceramic-pro-gold-package/">Ceramic Pro Gold Package</Link>
              <Link to="/ceramic-pro-silver-package/">Ceramic Pro Silver Package</Link>
              <Link to="/ceramic-pro-bronze-package/">Ceramic Pro Bronze Package</Link>
              <Link to="/ceramic-pro-sport-package/">Ceramic Pro Sport Package</Link>
              <Link to="/ceramic-pro-wheel-caliper/">Ceramic Pro Wheel &amp; Caliper</Link>
              <Link to="/ceramic-pro-marine/">Ceramic Pro Marine</Link>
              <Link to="/color-shift/">Color Shift</Link>
            </div>
          </li>
          <li>
            <span className="dropbtn">Paint Protection Films</span>
            <div className="dropdown">
              <Link to="/ultimate-armor/">Ultimate Armor</Link>
              <span className="dropdown-label">Gloss Pro Paint Protection Film Full</span>
              <Link to="/matte-paint-protection-film/">Matte Paint Protection Film</Link>
              <Link to="/black-paint-protection-film/">Black Paint Protection Film</Link>
              <Link to="/urban-paint-protection-film/">Urban Paint Protection Film</Link>
              <Link to="/shift-color-paint-protection-film/">Shift Color Paint Protection Film</Link>
            </div>
          </li>
          <li>
            <span className="dropbtn">Window Tint</span>
            <div className="dropdown">
              <Link to="/ceramic-tint/">Ceramic Tint</Link>
              <Link to="/carbon-x/">Carbon X</Link>
              <span className="dropdown-label">Ceramic Pro Coating</span>
              <Link to="/aftercare/">After Care</Link>
              <Link to="/windshield-protection/">Windshield Protection</Link>
            </div>
          </li>
          <li><Link to="/elite-dealer-exclusives/">Elite</Link></li>
          <li><Link to="/projects/">Projects</Link></li>
          <li><Link to="/blogs/">Blogs</Link></li>
        </ul>

        <div className="header-actions">
          <a className="btn outline" href="tel:6023740366">Call (602) 374-0366</a>
          <div className="estimate-btn-wrap">
            <a className="btn gold" href="#estimate-form">Get a Free Estimate</a>
          </div>
        </div>

        <button className="hamb" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="3" x2="17" y2="17"/>
              <line x1="17" y1="3" x2="3" y2="17"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
              <circle cx="5" cy="5" r="2.2"/>
              <circle cx="17" cy="5" r="2.2"/>
              <circle cx="5" cy="17" r="2.2"/>
              <circle cx="17" cy="17" r="2.2"/>
            </svg>
          )}
        </button>
      </div>

      <nav className={`mobile-panel${open ? ' open' : ''}`} aria-label="Mobile navigation">
        <div className="mobile-menu-top">
          <span className="mobile-menu-brand">KING GARCIA</span>
        </div>
        <div className="mobile-ctas">
          <a className="btn gold" href="tel:6023740366">Call (602) 374-0366</a>
          <a className="btn mobile-outline" href="#estimate-form" onClick={() => setOpen(false)}>Get a Free Estimate</a>
        </div>
        <div className="mobile-links">
          <details open>
            <summary>Main</summary>
            <Link to="/about/">About</Link>
            <Link to="/projects/">Projects</Link>
            <Link to="/blogs/">Blogs</Link>
            <Link to="/contact-us/">Contact Us</Link>
          </details>
          <details>
            <summary>Detailing</summary>
            <Link to="/cars/">Cars</Link>
            <Link to="/motorcycles/">Motorcycles</Link>
            <Link to="/boats/">Boats</Link>
          </details>
          <details>
            <summary>Ceramic Coatings</summary>
            <Link to="/ceramic-pro-gold-package/">Ceramic Pro Gold Package</Link>
            <Link to="/ceramic-pro-silver-package/">Ceramic Pro Silver Package</Link>
            <Link to="/ceramic-pro-bronze-package/">Ceramic Pro Bronze Package</Link>
            <Link to="/ceramic-pro-sport-package/">Ceramic Pro Sport Package</Link>
            <Link to="/ceramic-pro-wheel-caliper/">Ceramic Pro Wheel &amp; Caliper</Link>
            <Link to="/ceramic-pro-marine/">Ceramic Pro Marine</Link>
            <Link to="/color-shift/">Color Shift</Link>
          </details>
          <details>
            <summary>Paint Protection Films</summary>
            <Link to="/ultimate-armor/">Ultimate Armor</Link>
            <span className="mobile-sublabel">Gloss Pro Paint Protection Film Full</span>
            <Link to="/matte-paint-protection-film/">Matte Paint Protection Film</Link>
            <Link to="/black-paint-protection-film/">Black Paint Protection Film</Link>
            <Link to="/urban-paint-protection-film/">Urban Paint Protection Film</Link>
            <Link to="/shift-color-paint-protection-film/">Shift Color Paint Protection Film</Link>
          </details>
          <details>
            <summary>Window Tint</summary>
            <Link to="/ceramic-tint/">Ceramic Tint</Link>
            <Link to="/carbon-x/">Carbon X</Link>
            <span className="mobile-sublabel">Ceramic Pro Coating</span>
            <Link to="/aftercare/">After Care</Link>
            <Link to="/windshield-protection/">Windshield Protection</Link>
          </details>
          <details>
            <summary>Elite</summary>
            <Link to="/elite-dealer-exclusives/">Elite Dealer Exclusives</Link>
          </details>
        </div>
        <div className="mobile-menu-footer">
          <span>Phoenix, AZ · (602) 374-0366</span>
        </div>
      </nav>
    </header>
  )
}
