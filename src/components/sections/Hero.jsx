import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { HERO } from '../../content/copy'
import StoreButtons from '../ui/StoreButtons'
import ThemeLogo from '../ui/ThemeLogo'

export default function Hero() {
  const heroRef = useRef(null)
  const logoContainerRef = useRef(null)
  const logoRef = useRef(null)

  // Animación de entrada
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.hero-content', { opacity: 1 })
      gsap.fromTo('.hero-eyebrow', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 })
      gsap.fromTo('.title-line', { opacity: 0, y: '110%' }, { opacity: 1, y: '0%', duration: 1, stagger: 0.15, ease: 'power4.out', delay: 0.3 })
      gsap.fromTo('.hero-description', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.75 })
      gsap.fromTo('.download-buttons', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.95 })
      gsap.fromTo('.hero-visual', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.2, ease: 'back.out(1.4)', delay: 0.6 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  // Inclinación 3D del logo según el mouse
  const handleLogoMouseMove = (e) => {
    const rect = logoContainerRef.current.getBoundingClientRect()
    gsap.to(logoRef.current, {
      rotationX: (e.clientY - rect.top - rect.height / 2) / 14,
      rotationY: (rect.width / 2 - (e.clientX - rect.left)) / 14,
      transformPerspective: 1000,
      duration: 0.5,
      ease: 'power2.out',
    })
  }

  const handleLogoMouseLeave = () => {
    gsap.to(logoRef.current, { rotationX: 0, rotationY: 0, duration: 0.8, ease: 'elastic.out(1, 0.5)' })
  }

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="particles-container" aria-hidden="true">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      <div className="hero-wrapper">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            {HERO.eyebrow}
          </div>

          <h1 className="hero-title">
            {HERO.titleLines.map((line) => (
              <span key={line.text} className={`title-line${line.accent ? ' green' : ''}`}>
                {line.text}
              </span>
            ))}
          </h1>

          <p className="hero-description">{HERO.description}</p>

          <StoreButtons />
        </div>

        <div className="hero-visual">
          <div
            className="logo-container"
            ref={logoContainerRef}
            onMouseMove={handleLogoMouseMove}
            onMouseLeave={handleLogoMouseLeave}
          >
            <div className="logo-glow" />
            <div className="main-logo" id="mainLogo" ref={logoRef}>
              <ThemeLogo className="logo-image" alt="PlantCare Logo" />
            </div>
            <div className="logo-rings" aria-hidden="true">
              <div className="ring ring-1" />
              <div className="ring ring-2" />
              <div className="ring ring-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
