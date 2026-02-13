import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function StatsBar() {
  const statsRef = useRef(null)
  const [stats, setStats] = useState([
    { value: 0, target: 50000, label: 'Plantas cuidadas' },
    { value: 0, target: 12000, label: 'Usuarios felices' },
    { value: 0, target: 98, label: '% tasa de supervivencia' }
  ])

  useEffect(() => {
    const statsItems = statsRef.current.querySelectorAll('.stat-item')

    statsItems.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: item,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
          })

          const target = stats[index].target
          gsap.to({ val: 0 }, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            onUpdate: function() {
              const val = Math.round(this.targets()[0].val)
              setStats(prev => {
                const newStats = [...prev]
                newStats[index].value = val
                return newStats
              })
            }
          })
        }
      })
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const formatValue = (value, target) => {
    if (target >= 1000) {
      return (value / 1000).toFixed(value % 1000 === 0 ? 0 : 1) + 'K+'
    } else if (target === 98) {
      return value + '%'
    } else {
      return value + '+'
    }
  }

  return (
    <div className="stats-bar" ref={statsRef}>
      <div className="stats-inner">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">
              {formatValue(stat.value, stat.target)}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
