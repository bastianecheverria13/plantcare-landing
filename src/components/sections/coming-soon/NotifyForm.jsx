import { useState } from 'react'
import { ASSETS, LAUNCH, PRELAUNCH } from '../../../config/site'
import { COMING_SOON } from '../../../content/copy'
import { formatDay } from '../../../lib/format'
import { subscribeEmail } from '../../../lib/subscribe'

const counterColor = (n) => (n <= 5 ? '#ff6b6b' : n <= 10 ? '#ffd93d' : undefined)

export default function NotifyForm() {
  const [email, setEmail] = useState('')
  const [sending, setSending] = useState(false)
  const [slotsLeft, setSlotsLeft] = useState(PRELAUNCH.earlyBirdSlots)
  const launchDate = formatDay(LAUNCH.day)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      await subscribeEmail(email)
      if (slotsLeft > 0) {
        const position = PRELAUNCH.earlyBirdSlots - slotsLeft + 1
        setSlotsLeft(slotsLeft - 1)
        alert(`🎉 ¡Registrado! Eres el #${position} con ${PRELAUNCH.earlyBirdDiscount} de descuento.`)
      } else {
        alert(`🎉 ¡Gracias! Te notificaremos el ${launchDate}.`)
      }
      setEmail('')
    } catch {
      alert('❌ No pudimos registrar tu email. Intenta de nuevo.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="notify-me-section">
      <div className="notify-character">
        <img src={ASSETS.mascot} alt="Mascota de PlantCare" className="notify-plant-img" />
        <div className="notify-speech-bubble">
          <p className="notify-speech-text">
            ¡Hola de nuevo! 🌱 Los <strong>primeros {PRELAUNCH.earlyBirdSlots} registros</strong> obtendrán un{' '}
            <strong className="highlight-discount">{PRELAUNCH.earlyBirdDiscount} de descuento</strong> en su primera
            compra. ¡No te lo pierdas!
          </p>
        </div>
      </div>

      <h3 className="notify-title">{COMING_SOON.notify.title}</h3>
      <p className="notify-subtitle">Regístrate y recibe acceso exclusivo al lanzamiento del {launchDate}</p>

      <div className="early-bird-counter">
        <span className="counter-label">Registros restantes con descuento:</span>
        <span className="counter-number" style={{ color: counterColor(slotsLeft) }}>
          {slotsLeft}
        </span>
      </div>

      <form className="notify-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="tu@email.com"
          aria-label="Tu email"
          autoComplete="email"
          className="notify-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="notify-button" disabled={sending}>
          <span>{sending ? 'Enviando…' : 'Notificarme'}</span>
          <svg className="notify-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </form>
      <p className="notify-disclaimer">{COMING_SOON.notify.disclaimer}</p>
    </div>
  )
}
