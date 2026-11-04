import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ASSETS } from '../../config/site'
import { WELCOME } from '../../content/copy'

export default function WelcomeModal({ onClose }) {
  const modalRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.character-img',
        { scale: 0, rotation: -180, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 0.2 })
      gsap.fromTo('.character-speech-bubble',
        { scale: 0, y: 20, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.7)', delay: 0.5 })
      gsap.fromTo('.welcome-button',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)', delay: 0.8 })
    }, modalRef)

    // Cerrar con Esc
    const onKeyDown = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKeyDown)

    return () => {
      ctx.revert()
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return (
    <div className="welcome-modal active" ref={modalRef} role="dialog" aria-modal="true" aria-label="Bienvenida">
      <div className="welcome-overlay" onClick={onClose} />
      <div className="welcome-content">
        <button type="button" className="welcome-close" onClick={onClose} aria-label="Cerrar">
          ×
        </button>
        <div className="welcome-character">
          <img src={ASSETS.mascot} alt="Mascota de PlantCare" className="character-img" />
          <div className="character-speech-bubble">
            <p className="speech-text">
              {WELCOME.before}
              <strong>{WELCOME.mascotName}</strong>
              {WELCOME.after}
            </p>
            <div className="speech-arrow" />
          </div>
        </div>
        <button type="button" className="welcome-button" onClick={onClose} autoFocus>
          <span>{WELCOME.button}</span>
          <svg className="button-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
