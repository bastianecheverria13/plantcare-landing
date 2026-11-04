import { useCallback, useEffect, useState } from 'react'
import { INTRO } from './config/site'
import { useTheme } from './hooks/useTheme'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Hero from './components/sections/Hero'
import StatsBar from './components/sections/StatsBar'
import Features from './components/sections/Features'
import ComingSoon from './components/sections/coming-soon/ComingSoon'
import CTA from './components/sections/CTA'

import Preloader from './components/ui/Preloader'
import WelcomeModal from './components/ui/WelcomeModal'
import ThemeToggle from './components/ui/ThemeToggle'
import BackToTop from './components/ui/BackToTop'
import ScrollProgress from './components/ui/ScrollProgress'
import Cursor from './components/ui/Cursor'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)

  // Intro: preloader → modal de bienvenida
  useEffect(() => {
    let modalTimer
    const loadTimer = setTimeout(() => {
      setLoading(false)
      modalTimer = setTimeout(() => setShowModal(true), INTRO.modalDelayMs)
    }, INTRO.preloaderMs)
    return () => {
      clearTimeout(loadTimer)
      clearTimeout(modalTimer)
    }
  }, [])

  const closeModal = useCallback(() => setShowModal(false), [])

  return (
    <>
      {loading && <Preloader />}
      {showModal && <WelcomeModal onClose={closeModal} />}

      <Cursor />
      <ScrollProgress />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <BackToTop />

      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <ComingSoon />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
