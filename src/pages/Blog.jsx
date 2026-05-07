import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import ServiceHero from '../components/ServiceHero'
import thumb0 from '../../assets/others/ceramic-pro-gold-02.jpeg'
import thumb1 from '../../assets/images/mate-hero.jpg'
import thumb2 from '../../assets/others/ceramic-pro-silver-hero.jpg'
import thumb3 from '../../assets/others/ceramic-pro-bronce-01.jpeg'
import thumb4 from '../../assets/others/ceramic-pro-sport-01.jpg'
import thumb5 from '../../assets/images/urban-paint-hero.jpg'

const posts = [
  {
    slug: 'ceramic-coating-vs-wax',
    category: 'Ceramic Coatings',
    title: 'Ceramic Coating vs Wax: What Actually Protects Your Car in Phoenix?',
    excerpt: 'Wax lasts 4–8 weeks in Arizona heat before it oxidizes off the paint. Ceramic coatings bond chemically to the clear coat and last years. Here\'s what the difference means for your maintenance schedule and your paint\'s condition.',
    date: 'April 12, 2025',
    thumb: thumb0,
  },
  {
    slug: 'is-ppf-worth-it-arizona',
    category: 'Paint Protection Film',
    title: 'Is PPF Worth It in Arizona? The Case for Film in the Desert.',
    excerpt: 'Arizona highways are rough on paint. High-speed debris, aggressive road surfaces, and baked-on bugs from summer months make paint protection film one of the highest-ROI modifications a Phoenix-area driver can make.',
    date: 'March 28, 2025',
    thumb: thumb1,
  },
  {
    slug: 'protecting-paint-phoenix-sun',
    category: 'Paint Protection',
    title: 'How Phoenix Sun Destroys Unprotected Paint — and What Stops It',
    excerpt: 'UV index in Phoenix averages 8–10 for most of the year. Unprotected clear coat fades, oxidizes, and hazes within 3–5 years. Ceramic coatings and PPF both block UV — but in different ways and at different protection levels.',
    date: 'March 10, 2025',
    thumb: thumb2,
  },
  {
    slug: 'ceramic-tint-vs-regular-tint',
    category: 'Window Tint',
    title: 'Ceramic Tint vs Regular Tint: The Difference Your AC Bill Will Notice',
    excerpt: 'Standard dyed tint blocks light but passes infrared heat. Ceramic tint blocks both. In a car sitting in a Phoenix parking lot, the interior temperature difference between regular and ceramic tint can exceed 20°F.',
    date: 'February 22, 2025',
    thumb: thumb3,
  },
  {
    slug: 'care-for-ceramic-coated-vehicle',
    category: 'Aftercare',
    title: 'How to Care for a Ceramic Coated Vehicle Without Voiding the Warranty',
    excerpt: 'Ceramic Pro\'s Lifetime Warranty requires annual inspection and maintenance with certified products. Using the wrong soap, automated car washes with brushes, or skipping the annual decontamination all degrade coating performance — and can void coverage.',
    date: 'February 8, 2025',
    thumb: thumb4,
  },
  {
    slug: 'ppf-vs-ceramic-coating',
    category: 'Paint Protection',
    title: 'PPF vs Ceramic Coating: Different Tools, Different Jobs',
    excerpt: 'Paint protection film handles physical impact — stone chips, road debris, scratches. Ceramic coating handles chemical contamination and UV. The best Phoenix builds use both together: PPF on high-impact zones, ceramic coating over the film and remaining panels.',
    date: 'January 25, 2025',
    thumb: thumb5,
  },
]

export default function Blog() {
  useEffect(() => {
    document.title = 'Auto Detailing, Ceramic Coating & PPF Blog | Phoenix, AZ | King Garcia'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.content = 'Practical vehicle protection education for Arizona drivers. Ceramic coatings, PPF, window tint, detailing, and aftercare — explained for Phoenix-area conditions by King Garcia Auto Detail.'
  }, [])

  return (
    <>
      <ServiceHero
        eyebrow="KING GARCIA AUTO DETAIL LLC • Phoenix, AZ"
        h1="Vehicle Protection Tips for Phoenix Drivers"
        intro="Practical education on ceramic coatings, paint protection film, window tint, detailing, and aftercare — written for Arizona conditions."
        pills={['Ceramic Coatings', 'PPF', 'Window Tint', 'Detailing']}
        img={thumb0}
      />

      <section className="blog-section">
        <div className="container">
          <div className="blog-grid">
            {posts.map(post => (
              <article className="blog-card" key={post.slug}>
                <div className="blog-card-img">
                  <img loading="lazy" src={post.thumb} alt={post.title} />
                </div>
                <div className="blog-card-body">
                  <span className="blog-tag">{post.category}</span>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-meta">
                    <span className="blog-card-date">{post.date}</span>
                    <Link className="blog-read" to="/blogs/">Read More →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ppf-cta-band">
        <div className="container">
          <h2>Questions About Protecting Your Vehicle in Phoenix?</h2>
          <p>Request a free estimate and King Garcia Auto Detail will walk you through the right protection strategy for your vehicle and budget.</p>
          <div className="cta-btns">
            <a className="btn gold" href="#estimate-form">Get a Free Estimate</a>
            <a className="btn outline" href="tel:6023740366">Call (602) 374-0366</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
