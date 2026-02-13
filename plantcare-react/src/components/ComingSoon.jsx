import { useState, useEffect } from 'react'
import { Search, Globe, Library, Trophy, Clock } from 'lucide-react'
export default function ComingSoon() {
  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  const [userGoal, setUserGoal] = useState({
    current: 0,
    target: 2000,
    percentage: 0
  })

  const [earlyBirdCount, setEarlyBirdCount] = useState(13)
  const [email, setEmail] = useState('')

  const LAUNCH_DATE = new Date('2026-05-01T00:00:00-03:00')

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = LAUNCH_DATE.getTime() - now

      if (distance < 0) {
        setCountdown({ days: '00', hours: '00', minutes: '00', seconds: '00' })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setCountdown({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const percentage = ((userGoal.current / userGoal.target) * 100).toFixed(1)
    setUserGoal(prev => ({ ...prev, percentage }))
  }, [userGoal.current, userGoal.target])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const formData = new FormData()
      formData.append('email', email)
      formData.append('_subject', '🌱 Nuevo registro PlantCare - Lanzamiento 1 Mayo 2026')
      formData.append('_template', 'box')
      formData.append('_captcha', 'false')

      const response = await fetch('https://formsubmit.co/bastian.echeverria13@gmail.com', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        if (earlyBirdCount > 0) {
          setEarlyBirdCount(prev => prev - 1)
          alert(`🎉 ¡Registrado! Eres uno de los ${14 - earlyBirdCount} con 50% de descuento.`)
        } else {
          alert('🎉 ¡Gracias! Te notificaremos el 1 de mayo 2026.')
        }
        setEmail('')
      }
    } catch (error) {
      alert('❌ Error. Intenta de nuevo.')
    }
  }

  const comingFeatures = [
    {
      icon: Search,
      title: 'Diagnóstico con IA',
      description: 'Sube una foto y detecta enfermedades al instante',
      progress: 85
    },
    {
      icon: Globe,
      title: 'Comunidad Global',
      description: 'Conecta con otros amantes de las plantas',
      progress: 70
    },
    {
      icon: Library,
      title: 'Biblioteca 10,000+ especies',
      description: 'Información detallada de cada planta',
      progress: 92
    },
    {
      icon: Trophy,
      title: 'Sistema de Recompensas',
      description: 'Gana badges mientras cuidas tus plantas',
      progress: 60
    }
  ]

  return (
    <section className="coming-soon" id="comingSoon">
      <div className="coming-soon-bg">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="coming-particle"></div>
        ))}
      </div>

      <div className="coming-soon-container">
        <div className="coming-badge">
          <span className="pulse-dot"></span>
          <span className="coming-badge-text">LANZAMIENTO 1 MAYO 2026</span>
        </div>

        <h2 className="coming-title">
          <span className="coming-title-line">El futuro del</span>
          <span className="coming-title-line highlight">cuidado de plantas</span>
          <span className="coming-title-line">está por llegar</span>
        </h2>

        <p className="coming-description">
          Estamos desarrollando funciones revolucionarias que transformarán 
          la forma en que cuidas tus plantas. Sé el primero en descubrirlas.
        </p>

        {/* Countdown */}
        <div className="countdown">
          <div className="countdown-item">
            <div className="countdown-number">{countdown.days}</div>
            <div className="countdown-label">Días</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-number">{countdown.hours}</div>
            <div className="countdown-label">Horas</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-number">{countdown.minutes}</div>
            <div className="countdown-label">Minutos</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-number">{countdown.seconds}</div>
            <div className="countdown-label">Segundos</div>
          </div>
        </div>

        {/* User Goal */}
        <div className="user-goal-section">
          <h3 className="goal-title">🎯 Meta de Pre-lanzamiento</h3>
          <p className="goal-description">
            Ayúdanos a alcanzar 2,000 de usuarios registrados y ¡adelantaremos el lanzamiento!
          </p>

          <div className="goal-progress-container">
            <div className="goal-stats">
              <div className="goal-current">
                <span className="goal-number">{userGoal.current.toLocaleString('es-ES')}</span>
                <span className="goal-label">Registrados</span>
              </div>
              <div className="goal-target">
                <span className="goal-number">2,000</span>
                <span className="goal-label">Meta</span>
              </div>
            </div>

            <div className="goal-progress-bar">
              <div 
                className="goal-progress-fill" 
                style={{ width: `${userGoal.percentage}%` }}
              ></div>
              <span className="goal-percentage">{userGoal.percentage}%</span>
            </div>

            <p className="goal-impact">
              <Clock className="goal-icon" size={22} strokeWidth={2} />
              <span>Cada 500 usuarios = 1 mes menos de espera</span>
            </p>
          </div>
        </div>

        {/* Coming Features */}
        <div className="coming-features-grid">
          {comingFeatures.map((feature, index) => (
            <div key={index} className="coming-feature-card">
              <div className="coming-feature-icon">
                <feature.icon size={52} strokeWidth={1.5} />
              </div>
              <h4 className="coming-feature-title">{feature.title}</h4>
              <p className="coming-feature-desc">{feature.description}</p>
              <div className="coming-feature-progress">
                <div className="progress-bar" style={{ width: `${feature.progress}%` }}></div>
              </div>
              <span className="progress-label">{feature.progress}% completado</span>
            </div>
          ))}
        </div>

        {/* Notify Me Section */}
        <div className="notify-me-section">
          <div className="notify-character">
            <img 
              src="/planta_presentacion.png" 
              alt="Espuela de Galán" 
              className="notify-plant-img"
            />
            <div className="notify-speech-bubble">
              <p className="notify-speech-text">
                ¡Hola de nuevo! 🌱 Los <strong>primeros 13 registros</strong> obtendrán un{' '}
                <strong className="highlight-discount">50% de descuento</strong> en su primera compra. ¡No te lo pierdas!
              </p>
            </div>
          </div>

          <h3 className="notify-title">¡Sé el primero en saberlo!</h3>
          <p className="notify-subtitle">
            Regístrate y recibe acceso exclusivo al lanzamiento del 1 de mayo 2026
          </p>

          <div className="early-bird-counter">
            <span className="counter-label">Registros restantes con descuento:</span>
            <span 
              className="counter-number"
              style={{
                color: earlyBirdCount <= 5 ? '#ff6b6b' : earlyBirdCount <= 10 ? '#ffd93d' : ''
              }}
            >
              {earlyBirdCount}
            </span>
          </div>

          <form className="notify-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="tu@email.com"
              className="notify-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="notify-button">
              <span>Notificarme</span>
              <svg className="notify-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </form>
          <p className="notify-disclaimer">🔒 Tu email está seguro. Sin spam, lo prometemos.</p>
        </div>
      </div>
    </section>
  )
}