import { useEffect } from 'react'
import Footer from '../components/Footer'
import ServiceHero from '../components/ServiceHero'
import { imgs } from '../data/index.js'
import car0 from '../../assets/detailing/cars/Detailing_american_business_cars_202605061843.jpeg'
import car1 from '../../assets/detailing/cars/Detailing_american_business_cars_202605061843 (1).jpeg'
import car2 from '../../assets/detailing/cars/Detailing_american_business_cars_202605061843 (2).jpeg'
import car3 from '../../assets/detailing/cars/Detailing_american_business_cars_202605061843 (3).jpeg'
import car4 from '../../assets/detailing/cars/Detailing_american_business_cars_202605061843 (4).jpeg'
import car5 from '../../assets/detailing/cars/Detailing_american_business_cars_202605061843 (5).jpeg'
import moto0 from '../../assets/detailing/moto/Detailing_motorcycles_without_pe…_202605061851.jpeg'
import moto1 from '../../assets/detailing/moto/Detailing_motorcycles_without_pe…_202605061851 (1).jpeg'
import moto2 from '../../assets/detailing/moto/Detailing_motorcycles_without_pe…_202605061851 (2).jpeg'
import moto3 from '../../assets/detailing/moto/Detailing_motorcycles_without_pe…_202605061851 (3).jpeg'
import boat0 from '../../assets/detailing/botas/Detailing_boats_without_people_202605061854.jpeg'
import boat1 from '../../assets/detailing/botas/Detailing_boats_without_people_202605061854 (1).jpeg'
import boat2 from '../../assets/detailing/botas/Detailing_boats_without_people_202605061854 (2).jpeg'
import boat3 from '../../assets/detailing/botas/Detailing_boats_without_people_202605061854 (3).jpeg'
import p0 from '../../assets/imgspropias/21504.jpg'
import p1 from '../../assets/imgspropias/21506.jpg'
import p2 from '../../assets/imgspropias/21508.jpg'
import p3 from '../../assets/imgspropias/21514.jpg'
import p4 from '../../assets/imgspropias/21516.jpg'
import p5 from '../../assets/imgspropias/21518.jpg'
import p6 from '../../assets/imgspropias/21525.jpg'
import p7 from '../../assets/imgspropias/21540.jpg'
import o0 from '../../assets/others/ceramic-pro-gold-02.jpeg'
import o1 from '../../assets/others/ceramic-pro-gold-03.jpeg'
import o2 from '../../assets/others/ceramic-pro-gold-04.jpeg'
import o3 from '../../assets/others/ceramic-pro-bronce-01.jpeg'
import o4 from '../../assets/others/ceramic-pro-bronce-02.jpeg'
import o5 from '../../assets/others/ceramic-pro-sport-01.jpg'

const allImages = [
  { src: p0, alt: 'Auto detail Phoenix — King Garcia' },
  { src: car0, alt: 'Car detailing Phoenix — King Garcia' },
  { src: o0, alt: 'Ceramic coating Phoenix — King Garcia' },
  { src: p1, alt: 'Paint protection Phoenix — King Garcia' },
  { src: moto0, alt: 'Motorcycle detailing Phoenix — King Garcia' },
  { src: boat0, alt: 'Boat detailing Phoenix — King Garcia' },
  { src: o1, alt: 'Ceramic pro gold Phoenix — King Garcia' },
  { src: car1, alt: 'Car detail shop Phoenix — King Garcia' },
  { src: p2, alt: 'Vehicle protection Phoenix — King Garcia' },
  { src: moto1, alt: 'Moto detail Phoenix — King Garcia' },
  { src: o2, alt: 'Coating finish Phoenix — King Garcia' },
  { src: p3, alt: 'Detail shop Phoenix — King Garcia' },
  { src: boat1, alt: 'Marine detail Phoenix — King Garcia' },
  { src: car2, alt: 'Luxury detail Phoenix — King Garcia' },
  { src: o3, alt: 'Ceramic protection Phoenix — King Garcia' },
  { src: p4, alt: 'Exotic car detail Phoenix — King Garcia' },
  { src: moto2, alt: 'Motorcycle coat Phoenix — King Garcia' },
  { src: car3, alt: 'Business car detail Phoenix — King Garcia' },
  { src: o4, alt: 'Ceramic bronze Phoenix — King Garcia' },
  { src: p5, alt: 'Auto shop Phoenix — King Garcia' },
  { src: boat2, alt: 'Boat coat Phoenix — King Garcia' },
  { src: car4, alt: 'Car coat Phoenix — King Garcia' },
  { src: o5, alt: 'Sport ceramic Phoenix — King Garcia' },
  { src: p6, alt: 'PPF Phoenix — King Garcia' },
  { src: moto3, alt: 'Motorcycle wash Phoenix — King Garcia' },
  { src: boat3, alt: 'Marine protection Phoenix — King Garcia' },
  { src: car5, alt: 'Detailing shop Phoenix — King Garcia' },
  { src: p7, alt: 'King Garcia auto detail' },
  ...imgs.map((src, i) => ({ src, alt: `King Garcia Auto Detail project ${i + 1}` })),
]

export default function Projects() {
  useEffect(() => {
    document.title = 'Projects — King Garcia Auto Detail | Phoenix, AZ'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.content = 'Browse detailing, ceramic coating, paint protection film, window tint, motorcycle, and boat projects from King Garcia Auto Detail in Phoenix, AZ.'
  }, [])

  return (
    <>
      <ServiceHero
        eyebrow="KING GARCIA AUTO DETAIL LLC • Phoenix, AZ"
        h1="Recent Projects from King Garcia Auto Detail"
        intro="A visual look at detailing, ceramic coating, paint protection film, tint, and exotic/luxury automotive protection work from the Phoenix shop."
        pills={['Family-Owned', 'Since 2015', '15+ Years Experience', '4.9★ Google Rating']}
        img={car0}
      />

      <section className="proj-section">
        <div className="container">
          <div className="proj-grid">
            {allImages.map((img, i) => (
              <div className="proj-item" key={i}>
                <img loading="lazy" src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
