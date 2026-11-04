import { SITE } from '../../config/site'
import { FOOTER } from '../../content/copy'
import ThemeLogo from '../ui/ThemeLogo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-inner">
        <ThemeLogo className="footer-logo" />

        <p className="footer-tagline">
          {FOOTER.tagline[0]}
          <br />
          {FOOTER.tagline[1]}
        </p>

        <nav className="footer-links" aria-label="Pie de página">
          {FOOTER.links.map((link) => (
            <a key={link.href} href={link.href} className="footer-link">
              {link.label}
            </a>
          ))}
          <a href={`mailto:${SITE.contactEmail}`} className="footer-link">
            Contacto
          </a>
        </nav>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copyright">&copy; {year} {SITE.name}. Hecho con 💚 para tus plantas.</p>
          <p className="footer-version">{SITE.version}</p>
        </div>
      </div>
    </footer>
  )
}
