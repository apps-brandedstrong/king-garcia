import { Link } from 'react-router-dom'

export default function Card({ title, copy, href, img }) {
  return (
    <Link className="card" to={href}>
      <div className="media">
        <img loading="lazy" src={img} alt={`${title} at KING GARCIA AUTO DETAIL LLC`} />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{copy}</p>
        <span className="card-link">View Service →</span>
      </div>
    </Link>
  )
}
