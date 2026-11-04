import { LAUNCH } from '../../../config/site'
import { COMING_SOON } from '../../../content/copy'
import { dayToDate, formatDay } from '../../../lib/format'
import Countdown from './Countdown'
import LaunchGoal from './LaunchGoal'
import NotifyForm from './NotifyForm'
import UpcomingFeatures from './UpcomingFeatures'

const LAUNCH_DATE = dayToDate(LAUNCH.day)

export default function ComingSoon() {
  const [line1, highlight, line3] = COMING_SOON.titleLines

  return (
    <section className="coming-soon" id="comingSoon">
      <div className="coming-soon-bg" aria-hidden="true">
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="coming-particle" />
        ))}
      </div>

      <div className="coming-soon-container">
        <div className="coming-badge">
          <span className="pulse-dot" />
          <span className="coming-badge-text">LANZAMIENTO {formatDay(LAUNCH.day).toUpperCase()}</span>
        </div>

        <h2 className="coming-title">
          <span className="coming-title-line">{line1}</span>
          <span className="coming-title-line highlight">{highlight}</span>
          <span className="coming-title-line">{line3}</span>
        </h2>

        <p className="coming-description">{COMING_SOON.description}</p>

        <Countdown target={LAUNCH_DATE} />
        <LaunchGoal />
        <UpcomingFeatures />
        <NotifyForm />
      </div>
    </section>
  )
}
