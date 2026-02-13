import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Features from './components/Features'
import ComingSoon from './components/ComingSoon'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import WelcomeModal from './components/WelcomeModal'
import ThemeToggle from './components/ThemeToggle'
import BackToTop from './components/BackToTop'
import Cursor from './components/Cursor'

function App() {
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('pc-theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('pc-theme', theme)
  }, [theme])

  useEffect(() => {
    // Simular carga
    const timer = setTimeout(() => {
      setLoading(false)
      setTimeout(() => setShowModal(true), 400)
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      {loading && <Preloader />}
      {showModal && <WelcomeModal onClose={() => setShowModal(false)} />}
      
      <Cursor />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <BackToTop />
      
      <div className="scroll-progress" id="scrollProgress"></div>
      
      <Header />
      <Hero />
      <StatsBar />
      <Features />
      <ComingSoon />
      <CTA />
      <Footer />
    </>
  )
}

export default App
