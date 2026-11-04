import { useRef } from 'react'
import { FEATURES } from '../../content/copy'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Features() {
  const featuresRef = useRef(null)
  useScrollReveal(featuresRef, '.feature-card')

  return (
    <section className="features" id="features">
      <div className="features-container" ref={featuresRef}>
        <div className="section-header">
          <span className="section-tag">{FEATURES.tag}</span>
          <h2 className="section-title">
            {FEATURES.title[0]}
            <br />
            {FEATURES.title[1]}
          </h2>
        </div>

        <div className="features-grid">
          {FEATURES.items.map(({ icon: Icon, title, description }) => (
            <div key={title} className="feature-card">
              <div className="feature-icon-wrapper">
                <Icon className="feature-icon-svg" size={28} strokeWidth={2} />
              </div>
              <h3 className="feature-title">{title}</h3>
              <p className="feature-description">{description}</p>
              <div className="feature-shine" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
