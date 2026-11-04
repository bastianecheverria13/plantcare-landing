import { COMING_SOON } from '../../../content/copy'

export default function UpcomingFeatures() {
  return (
    <div className="coming-features-grid">
      {COMING_SOON.features.map(({ icon: Icon, title, description, progress }) => (
        <div key={title} className="coming-feature-card">
          <div className="coming-feature-icon">
            <Icon size={52} strokeWidth={1.5} />
          </div>
          <h4 className="coming-feature-title">{title}</h4>
          <p className="coming-feature-desc">{description}</p>
          <div className="coming-feature-progress">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>
          <span className="progress-label">{progress}% completado</span>
        </div>
      ))}
    </div>
  )
}
