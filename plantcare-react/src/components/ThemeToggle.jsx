import { useRef } from 'react'
import gsap from 'gsap'

export default function ThemeToggle({ theme, onToggle }) {
  const buttonRef = useRef(null)

  const handleClick = () => {
    onToggle()
    
    gsap.fromTo(buttonRef.current,
      { scale: 0.85, rotation: -15 },
      { scale: 1, rotation: 0, duration: 0.5, ease: 'back.out(2)' }
    )
  }

  return (
    <button 
      ref={buttonRef}
      className="theme-toggle" 
      onClick={handleClick}
      aria-label="Cambiar tema"
    >
      <span className="icon-moon">🌙</span>
      <span className="icon-sun">☀️</span>
    </button>
  )
}
