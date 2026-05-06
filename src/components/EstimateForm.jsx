import { useState } from 'react'

export default function EstimateForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    e.target.reset()
  }

  return (
    <div className="form-wrap" id="estimate-form">
      <div>
        <div className="eyebrow">Free Estimate</div>
        <h2>Protect Your Investment</h2>
        <p>Tell us what you drive and what service you need. Our Phoenix shop will follow up with estimate guidance.</p>
        <div className="trust">
          <span className="pill">Shop-Based Service</span>
          <span className="pill">Card, Cash &amp; Zelle</span>
          <span className="pill">Call (602) 374-0366</span>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name<input required name="name" autoComplete="name" /></label>
          <label>Phone<input required name="phone" inputMode="tel" autoComplete="tel" /></label>
          <label>Email<input required type="email" name="email" autoComplete="email" /></label>
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
          <label className="full">Message / Project Details<textarea required name="message" /></label>
          <button className="btn gold full" type="submit">Request Free Estimate</button>
        </form>
        {submitted && (
          <div className="success">
            Thanks — your estimate request has been sent. King Garcia Auto Detail will contact you soon.
          </div>
        )}
        <p><strong>Free estimates. All services are performed at our Phoenix shop.</strong></p>
      </div>
    </div>
  )
}
