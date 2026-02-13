import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      
      setScrolled(currentScroll > 50)
      setHidden(currentScroll > lastScroll && currentScroll > 300)
      setLastScroll(currentScroll <= 0 ? 0 : currentScroll)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScroll])

  return (
    <header 
      id="header" 
      className={`${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}
    >
      <div className="header-container">
        <img 
          src="/logo_plantcare_blanco.png" 
          alt="PlantCare" 
          className="logo-header-img theme-logo-dark"
        />
        <img 
          src="/logo_plantcare_verde.png" 
          alt="PlantCare" 
          className="logo-header-img theme-logo-light"
        />
      </div>
    </header>
  )
}
