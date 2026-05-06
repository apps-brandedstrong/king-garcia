export default function PPFCoverageGrid({ eyebrow, heading, zones }) {
  return (
    <section className="ppf-coverage">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">{eyebrow || 'Coverage'}</div>
            <h2>{heading || 'What Gets Protected'}</h2>
          </div>
        </div>
        <div className="ppf-zone-grid">
          {zones.map((z, i) => (
            <div key={i} className="ppf-zone-card">
              <div className="ppf-zone-icon" aria-hidden="true">{z.icon}</div>
              <strong className="ppf-zone-name">{z.name}</strong>
              <p className="ppf-zone-desc">{z.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
