import ThemeLogo from './ThemeLogo'

export default function Preloader() {
  return (
    <div className="preloader" role="status" aria-label="Cargando">
      <div className="preloader-content">
        <ThemeLogo className="preloader-logo" />
        <div className="preloader-bar">
          <div className="preloader-bar-fill" />
        </div>
      </div>
    </div>
  )
}
