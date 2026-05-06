const REVIEWS = [
  {
    name: 'A Rodríguez',
    date: '7 months ago',
    stars: 5,
    text: 'I brought my 2014 Lexus to Ceramic Pro Deer Valley – King Garcia Auto Detail LLC for a ceramic coating and window tint installation. The results exceeded my expectations—my car looks even better than the day I bought it! I highly recommend this business for their professional service, top-quality products, and truly impressive results.',
  },
  {
    name: 'Joady Davis',
    date: '5 months ago',
    stars: 5,
    text: 'The King & his family ALWAYS do a great job on my vehicles. My boys & I have been going to King Garcia for years. Great family, honest people with fair pricing.',
  },
  {
    name: 'henrryart',
    date: '2 months ago',
    stars: 5,
    text: 'Excellent work with this vinyl wrap, it totally gave my car a more aggressive look.',
  },
  {
    name: 'Juan Campero',
    date: '5 months ago',
    stars: 5,
    text: 'I took my 2023 Tesla to Ceramic Pro Deer Valley for PPF and ceramic coating installation, and honestly, the result exceeded all my expectations. The shine, protection, and level of detail are impressive. You can tell they work with passion and professionalism here—they treated my car like it was their own. My Tesla looks better than new, and now I know it\'s completely protected. I 100% recommend bringing your vehicle here. It\'s worth every penny.',
  },
  {
    name: 'Magaly G',
    date: 'a year ago',
    stars: 5,
    text: 'This was my family\'s and I first time getting our Toyota Corolla interior cleaned and detailed. It looks brand new again from the inside! I wish I would\'ve brought it in sooner. The owners are very friendly, professional and will work with your schedule. The prices are also very reasonable! I appreciated how efficient and detailed they were. I will definitely be coming back. I recommend!',
  },
  {
    name: 'Winnie Black',
    date: '2 years ago',
    stars: 5,
    text: "I've tried out many local detailing businesses throughout the years and King Garcia Auto Detailing is absolutely THE BEST! I couldn't be more satisfied! Thank you! — Andy Mendoza",
  },
]

function Stars() {
  return (
    <span className="rev-stars" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#fbbc04">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
        </svg>
      ))}
    </span>
  )
}

export default function Reviews() {
  return (
    <section className="reviews-section">
      <div className="container">
        <div className="reviews-head">
          <div>
            <div className="eyebrow">Google Reviews</div>
            <h2>What Our Clients Say</h2>
          </div>
          <div className="reviews-rating">
            <span className="reviews-score">4.9</span>
            <div className="reviews-rating-detail">
              <Stars />
              <span>83 reviews on Google</span>
            </div>
          </div>
        </div>

        <div className="reviews-track">
          {REVIEWS.map((r, i) => (
            <article key={i} className="rev-card">
              <div className="rev-top">
                <div className="rev-avatar">{r.name[0]}</div>
                <div className="rev-meta">
                  <strong className="rev-name">{r.name}</strong>
                  <span className="rev-date">{r.date}</span>
                </div>
              </div>
              <Stars />
              <p className="rev-text">{r.text}</p>
            </article>
          ))}
        </div>

        <div className="reviews-cta">
          <a
            href="https://share.google/maEofKFoHqTgsRJ3G"
            target="_blank"
            rel="noopener noreferrer"
            className="btn outline reviews-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
