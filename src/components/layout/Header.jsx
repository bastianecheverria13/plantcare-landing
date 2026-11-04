import { useRef, useState } from 'react'
import { useScroll } from '../../hooks/useScroll'
import ThemeLogo from '../ui/ThemeLogo'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScroll = useRef(0)

  // Se oculta al bajar y reaparece al subir
  useScroll((y) => {
    setScrolled(y > 50)
    setHidden(y > lastScroll.current && y > 300)
    lastScroll.current = Math.max(0, y)
  })

  return (
    <header id="header" className={`${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
      <div className="header-container">
        <a href="#hero" aria-label="PlantCare — inicio">
          <ThemeLogo className="logo-header-img" />
        </a>
      </div>
    </header>
  )
}
