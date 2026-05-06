import { useState } from 'react'
import { Link } from 'react-router-dom'

const areas = ['Phoenix', 'Scottsdale', 'Chandler', 'Cave Creek', 'Anthem', 'Paradise Valley Village', 'Deer Valley', 'Tempe']

function FooterForm() {
  const [submitted, setSubmitted] = useState(false)
  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    e.target.reset()
  }
  return (
    <div id="estimate-form" className="footer-form-inner">
      {submitted ? (
        <div className="footer-form-success">
          Thanks — your estimate request was sent. King Garcia Auto Detail will contact you soon.
        </div>
      ) : (
        <form className="footer-form" onSubmit={handleSubmit}>
          <div className="footer-form-row">
            <label>Name<input required name="name" autoComplete="name" placeholder="Your name" /></label>
            <label>Phone<input required name="phone" inputMode="tel" autoComplete="tel" placeholder="(602) 000-0000" /></label>
          </div>
          <label>Email<input required type="email" name="email" autoComplete="email" placeholder="you@email.com" /></label>
          <label>Service Needed
            <select required name="service" defaultValue="">
              <option value="" disabled>Select a service</option>
              <option>Auto Detailing</option>
              <option>Car Detailing</option>
              <option>Motorcycle Detailing</option>
              <option>Boat / Marine Services</option>
              <option>Ceramic Coating</option>
              <option>Ceramic Pro Package</option>
              <option>Paint Protection Film</option>
              <option>Window Tint</option>
              <option>Residential / Commercial Window Tint</option>
              <option>Windshield Protection</option>
              <option>Aftercare</option>
              <option>Other</option>
            </select>
          </label>
          <label className="ff-full">Message / Project Details
            <textarea required name="message" placeholder="Tell us about your vehicle and what you need..." />
          </label>
          <button className="btn gold ff-full" type="submit">Request Free Estimate →</button>
        </form>
      )}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="footer-new">

      {/* ── CTA + Form Card ── */}
      <div className="footer-cta-band">
        <div className="container">
          <div className="footer-cta-card">
            <div className="footer-cta-copy">
              <span className="footer-eyebrow">Free Estimates</span>
              <h2 className="footer-cta-h2">Get Your Free Estimate Today.</h2>
              <p>Family-owned since 2015. All services performed at our Phoenix shop — we'll follow up with honest, clear guidance.</p>
              <div className="footer-trust-pills">
                <span>4.9★ Google Rating</span>
                <span>83 Reviews</span>
                <span>Family-Owned</span>
                <span>Since 2015</span>
              </div>
            </div>
            <div className="footer-form-col">
              <FooterForm />
            </div>
          </div>
        </div>
      </div>

      {/* ── Big Logo ── */}
      <div className="footer-logo-band">
        <div className="container footer-logo-center">
          <img src="/assets/logo-black.svg" alt="KING GARCIA AUTO DETAIL LLC" className="footer-big-logo" />
          <p className="footer-tagline">Premium Auto Detailing · Ceramic Coatings · PPF · Tint · Phoenix, AZ</p>
          <div className="footer-social-row">
            <a href="https://www.facebook.com/kinggarciaAZ/" target="_blank" rel="noopener" aria-label="Facebook">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/kinggarciaautodetailllc/" target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.tiktok.com/@kinggarciadetail" target="_blank" rel="noopener" aria-label="TikTok">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.86a8.27 8.27 0 0 0 4.86 1.56V7a4.85 4.85 0 0 1-1.09-.31z"/></svg>
            </a>
          </div>
          <a href="https://share.google/maEofKFoHqTgsRJ3G" target="_blank" rel="noopener" className="footer-google-badge" aria-label="Google Reviews">
            <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            <span><b>4.9★</b> · 83 Google Reviews</span>
          </a>
        </div>
      </div>

      {/* ── Link Columns ── */}
      <div className="container footer-links-grid">
        <div>
          <h4>Services</h4>
          <Link to="/detailing/">Auto Detailing</Link>
          <Link to="/ceramic-pro-coatings/">Ceramic Coatings</Link>
          <Link to="/paint-protection-films/">Paint Protection Film</Link>
          <Link to="/windows-tint/">Window Tint</Link>
          <Link to="/motorcycles/">Motorcycles</Link>
          <Link to="/boats/">Boats / Marine</Link>
        </div>
        <div>
          <h4>Ceramic Pro</h4>
          <Link to="/ceramic-pro-gold-package/">Gold Package</Link>
          <Link to="/ceramic-pro-silver-package/">Silver Package</Link>
          <Link to="/ceramic-pro-bronze-package/">Bronze Package</Link>
          <Link to="/ceramic-pro-sport-package/">Sport Package</Link>
          <Link to="/ceramic-pro-wheel-caliper/">Wheel &amp; Caliper</Link>
          <Link to="/ceramic-pro-marine/">Marine</Link>
        </div>
        <div>
          <h4>Protection Film</h4>
          <Link to="/paint-protection-films/">Paint Protection Films</Link>
          <Link to="/ultimate-armor/">Ultimate Armor</Link>
          <Link to="/full-car/">Full Car</Link>
          <Link to="/front-kit/">Front Kit</Link>
          <Link to="/matte-paint-protection-film/">Matte PPF</Link>
          <Link to="/shift-color-paint-protection-film/">Shift Color PPF</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="tel:6023740366">(602) 374-0366</a>
          <p>702 W Melinda Ln STE 2<br />Phoenix, AZ 85027</p>
          <p>Mon–Fri 6:00 AM–4:30 PM<br />Sat 6:00 AM–1:00 PM</p>
          <p>Card, Cash &amp; Zelle</p>
          <a href="https://www.facebook.com/kinggarciaAZ/" target="_blank" rel="noopener">Facebook</a>
          <a href="https://www.instagram.com/kinggarciaautodetailllc/" target="_blank" rel="noopener">Instagram</a>
          <a href="https://www.tiktok.com/@kinggarciadetail" target="_blank" rel="noopener">TikTok</a>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="container footer-bottom">
        <p>Service Areas: {areas.join(' · ')}</p>
        <div className="footer-bottom-right">
          <span>© {new Date().getFullYear()} King Garcia Auto Detail LLC</span>
          <a href="https://www.latinbranding.com" target="_blank" rel="noopener">Software by latin! 2.0</a>
        </div>
      </div>

    </footer>
  )
}
