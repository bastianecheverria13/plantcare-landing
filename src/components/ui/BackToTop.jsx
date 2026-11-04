import { useState } from 'react'
import { useScroll } from '../../hooks/useScroll'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  useScroll((y) => setVisible(y > 500))

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Volver arriba"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}
