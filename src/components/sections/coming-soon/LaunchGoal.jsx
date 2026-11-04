import { Clock } from 'lucide-react'
import { PRELAUNCH } from '../../../config/site'
import { COMING_SOON } from '../../../content/copy'

export default function LaunchGoal() {
  const { goalCurrent, goalTarget } = PRELAUNCH
  const percentage = ((goalCurrent / goalTarget) * 100).toFixed(1)
  const { goal } = COMING_SOON

  return (
    <div className="user-goal-section">
      <h3 className="goal-title">{goal.title}</h3>
      <p className="goal-description">{goal.description}</p>

      <div className="goal-progress-container">
        <div className="goal-stats">
          <div className="goal-current">
            <span className="goal-number">{goalCurrent.toLocaleString('es-CL')}</span>
            <span className="goal-label">Registrados</span>
          </div>
          <div className="goal-target">
            <span className="goal-number">{goalTarget.toLocaleString('es-CL')}</span>
            <span className="goal-label">Meta</span>
          </div>
        </div>

        <div className="goal-progress-bar">
          <div className="goal-progress-fill" style={{ width: `${percentage}%` }} />
          <span className="goal-percentage">{percentage}%</span>
        </div>

        <p className="goal-impact">
          <Clock className="goal-icon" size={22} strokeWidth={2} />
          <span>{goal.impact}</span>
        </p>
      </div>
    </div>
  )
}
