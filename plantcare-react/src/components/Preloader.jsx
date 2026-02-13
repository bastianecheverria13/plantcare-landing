export default function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader-content">
        <img 
          src="/logo_plantcare_blanco.png" 
          alt="PlantCare" 
          className="preloader-logo theme-logo-dark"
        />
        <img 
          src="/logo_plantcare_verde.png" 
          alt="PlantCare" 
          className="preloader-logo theme-logo-light"
        />
        <div className="preloader-bar">
          <div className="preloader-bar-fill"></div>
        </div>
      </div>
    </div>
  )
}
