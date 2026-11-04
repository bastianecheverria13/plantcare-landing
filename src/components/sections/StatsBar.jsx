import { useRef, useState } from 'react'
import gsap from 'gsap'
import { STATS } from '../../content/copy'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { formatStat } from '../../lib/format'

export default function StatsBar() {
  const statsRef = useRef(null)
  const [values, setValues] = useState(() => STATS.map(() => 0))

  // Al aparecer cada stat, anima su número de 0 al objetivo
  useScrollReveal(statsRef, '.stat-item', {
    start: 'top 88%',
    stagger: 0,
    onEnter: (_, index) => {
      const counter = { val: 0 }
      gsap.to(counter, {
        val: STATS[index].target,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          const val = Math.round(counter.val)
          setValues((prev) => prev.map((v, i) => (i === index ? val : v)))
        },
      })
    },
  })

  return (
    <div className="stats-bar" ref={statsRef}>
      <div className="stats-inner">
        {STATS.map((stat, index) => (
          <div key={stat.label} className="stat-item">
            <div className="stat-number">{formatStat(values[index], stat.format)}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
