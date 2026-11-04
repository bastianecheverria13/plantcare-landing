import { useRef } from 'react'
import { useScroll } from '../../hooks/useScroll'

/** Barra fina arriba que muestra cuánto se ha scrolleado (antes estaba en el HTML pero sin lógica). */
export default function ScrollProgress() {
  const barRef = useRef(null)

  useScroll((y) => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    if (barRef.current) barRef.current.style.width = max > 0 ? `${(y / max) * 100}%` : '0%'
  })

  return <div className="scroll-progress" ref={barRef} aria-hidden="true" />
}
