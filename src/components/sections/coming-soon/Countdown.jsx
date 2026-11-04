import { Fragment } from 'react'
import { useCountdown } from '../../../hooks/useCountdown'

const UNITS = [
  ['days', 'Días'],
  ['hours', 'Horas'],
  ['minutes', 'Minutos'],
  ['seconds', 'Segundos'],
]

export default function Countdown({ target }) {
  const remaining = useCountdown(target)

  return (
    <div className="countdown" role="timer" aria-label="Tiempo para el lanzamiento">
      {UNITS.map(([key, label], i) => (
        <Fragment key={key}>
          {i > 0 && <div className="countdown-separator">:</div>}
          <div className="countdown-item">
            <div className="countdown-number">{remaining[key]}</div>
            <div className="countdown-label">{label}</div>
          </div>
        </Fragment>
      ))}
    </div>
  )
}
