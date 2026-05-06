export default function PPFSpecsStrip({ specs }) {
  return (
    <section className="ppf-specs-strip">
      <div className="container">
        {specs.map((s, i) => (
          <div key={i} className="ppf-spec-item">
            <div className="ppf-spec-icon" aria-hidden="true">{s.icon}</div>
            <b className="ppf-spec-value">{s.value}</b>
            <span className="ppf-spec-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
