export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-inner">
        <img 
          src="/logo_plantcare_blanco.png" 
          alt="PlantCare" 
          className="footer-logo theme-logo-dark"
        />
        <img 
          src="/logo_plantcare_verde.png" 
          alt="PlantCare" 
          className="footer-logo theme-logo-light"
        />

        <p className="footer-tagline">
          Transformando el cuidado de plantas<br/>una conversación a la vez 🌱
        </p>

        <div className="footer-links">
          <a href="#hero" className="footer-link">Inicio</a>
          <a href="#features" className="footer-link">Funcionalidades</a>
          <a href="#comingSoon" className="footer-link">Próximamente</a>
          <a href="mailto:becheverria@plantcare.cl" className="footer-link">Contacto</a>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} PlantCare. Hecho con 💚 para tus plantas.
          </p>
          <p className="footer-version">v1.0.0 Beta</p>
        </div>
      </div>
    </footer>
  )
}
