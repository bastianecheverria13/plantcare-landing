import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function WelcomeModal({ onClose }) {
  const modalRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.character-img',
        { scale: 0, rotation: -180, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 0.2 }
      )

      gsap.fromTo('.character-speech-bubble',
        { scale: 0, y: 20, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.7)', delay: 0.5 }
      )

      gsap.fromTo('.welcome-button',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)', delay: 0.8 }
      )
    }, modalRef)

    return () => ctx.revert()
  }, [])

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('welcome-overlay')) {
      onClose()
    }
  }

  return (
    <div className="welcome-modal active" ref={modalRef} onClick={handleOverlayClick}>
      <div className="welcome-overlay"></div>
      <div className="welcome-content">
        <button className="welcome-close" onClick={onClose} aria-label="Cerrar">
          ×
        </button>
        <div className="welcome-character">
          <img 
            src="/planta_presentacion.png" 
            alt="PlantCare Mascota" 
            className="character-img"
          />
          <div className="character-speech-bubble">
            <p className="speech-text">
              ¡Hola! 👋 Soy la planta <strong>Espuela de Galán</strong>, y te doy la bienvenida a PlantCare, ¿listo para llevar el cuidado de tus plantas al siguiente nivel?.
            </p>
            <div className="speech-arrow"></div>
          </div>
        </div>
        <button className="welcome-button" onClick={onClose}>
          <span>¡Comenzar!</span>
          <svg className="button-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
