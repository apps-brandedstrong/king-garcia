import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Topbar from './components/Topbar'
import Header from './components/Header'
import MobileSticky from './components/MobileSticky'
import Home from './pages/Home'
import About from './pages/About'
import Cars from './pages/Cars'
import Motorcycles from './pages/Motorcycles'
import Boats from './pages/Boats'
import ServicePage from './pages/ServicePage'
import CeramicServicePage from './pages/CeramicServicePage'
import UltimateArmor from './pages/UltimateArmor'
import GlossProPPF from './pages/GlossProPPF'
import MattePPF from './pages/MattePPF'
import BlackPPF from './pages/BlackPPF'
import UrbanPPF from './pages/UrbanPPF'
import ShiftColorPPF from './pages/ShiftColorPPF'
import CeramicTint from './pages/CeramicTint'
import CarbonX from './pages/CarbonX'
import Aftercare from './pages/Aftercare'
import WindshieldProtection from './pages/WindshieldProtection'
import Elite from './pages/Elite'
import Projects from './pages/Projects'
import Blog from './pages/Blog'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 50)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

function BlurH1Global() {
  const { pathname } = useLocation()
  useEffect(() => {
    const observers = []
    const timer = setTimeout(() => {
      document.querySelectorAll('h1, h2').forEach(el => {
        if (el.querySelector('.bw')) return
        const text = el.textContent.trim()
        if (!text) return
        const words = text.split(/\s+/).filter(Boolean)
        el.innerHTML = words
          .map((w, i) => `<span class="bw" style="--wi:${i}">${w}</span>`)
          .join(' ')
        el.classList.add('blur-h1')
        // Double RAF: browser must paint opacity:0 before the observer fires h1-visible,
        // otherwise above-fold elements skip the animation entirely.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const obs = new IntersectionObserver(
              ([entry]) => { if (entry.isIntersecting) { el.classList.add('h1-visible'); obs.disconnect() } },
              { threshold: 0.12 }
            )
            obs.observe(el)
            observers.push(obs)
          })
        })
      })
    }, 80)
    return () => {
      clearTimeout(timer)
      observers.forEach(o => o.disconnect())
    }
  }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <ScrollManager />
        <BlurH1Global />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/cars/" element={<Cars />} />
          <Route path="/motorcycles/" element={<Motorcycles />} />
          <Route path="/boats/" element={<Boats />} />
          <Route path="/ceramic-pro-gold-package/" element={<CeramicServicePage slug="gold" />} />
          <Route path="/ceramic-pro-silver-package/" element={<CeramicServicePage slug="silver" />} />
          <Route path="/ceramic-pro-bronze-package/" element={<CeramicServicePage slug="bronze" />} />
          <Route path="/ceramic-pro-sport-package/" element={<CeramicServicePage slug="sport" />} />
          <Route path="/ceramic-pro-wheel-caliper/" element={<CeramicServicePage slug="wheel" />} />
          <Route path="/ceramic-pro-marine/" element={<CeramicServicePage slug="marine" />} />
          <Route path="/color-shift/" element={<CeramicServicePage slug="colorshift" />} />
          <Route path="/ultimate-armor/" element={<UltimateArmor />} />
          <Route path="/gloss-pro-paint-protection-film-full/" element={<GlossProPPF />} />
          <Route path="/matte-paint-protection-film/" element={<MattePPF />} />
          <Route path="/black-paint-protection-film/" element={<BlackPPF />} />
          <Route path="/urban-paint-protection-film/" element={<UrbanPPF />} />
          <Route path="/shift-color-paint-protection-film/" element={<ShiftColorPPF />} />
          <Route path="/ceramic-tint/" element={<CeramicTint />} />
          <Route path="/carbon-x/" element={<CarbonX />} />
          <Route path="/aftercare/" element={<Aftercare />} />
          <Route path="/windshield-protection/" element={<WindshieldProtection />} />
          <Route path="/elite-dealer-exclusives/" element={<Elite />} />
          <Route path="/projects/" element={<Projects />} />
          <Route path="/blogs/" element={<Blog />} />
          <Route path="*" element={<ServicePage />} />
        </Routes>
      </main>
      <MobileSticky />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
