import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import MusicEnrichment from './pages/MusicEnrichment'
import Mentoring from './pages/Mentoring'
import SportingEnrichment from './pages/SportingEnrichment'
import AnimalTherapy from './pages/AnimalTherapy'
import WhoWeAre from './pages/WhoWeAre'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music-enrichment" element={<MusicEnrichment />} />
        <Route path="/mentoring-interventions" element={<Mentoring />} />
        <Route path="/sporting-enrichment" element={<SportingEnrichment />} />
        <Route path="/animal-therapy-outreach" element={<AnimalTherapy />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/get-in-contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}
