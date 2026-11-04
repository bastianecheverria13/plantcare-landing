import { useEffect, useState } from 'react'
import { pad2 } from '../lib/format'

const DAY = 86_400_000, HOUR = 3_600_000, MINUTE = 60_000

function getRemaining(target) {
  const distance = Math.max(0, target.getTime() - Date.now())
  return {
    days: pad2(Math.floor(distance / DAY)),
    hours: pad2(Math.floor((distance % DAY) / HOUR)),
    minutes: pad2(Math.floor((distance % HOUR) / MINUTE)),
    seconds: pad2(Math.floor((distance % MINUTE) / 1000)),
    isOver: distance === 0,
  }
}

/** Cuenta regresiva hacia `target`, actualizada cada segundo. */
export function useCountdown(target) {
  const [remaining, setRemaining] = useState(() => getRemaining(target))

  useEffect(() => {
    if (remaining.isOver) return
    const id = setInterval(() => setRemaining(getRemaining(target)), 1000)
    return () => clearInterval(id)
  }, [target, remaining.isOver])

  return remaining
}
