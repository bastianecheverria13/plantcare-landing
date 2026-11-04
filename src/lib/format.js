// Se formatea en UTC a mediodía para que la zona horaria (y el cambio de hora en Chile)
// nunca muestre el día anterior.
const DAY_FORMATTER = new Intl.DateTimeFormat('es-CL', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

/** '2026-05-01' → "1 de mayo de 2026" */
export const formatDay = (day) => DAY_FORMATTER.format(new Date(`${day}T12:00:00Z`))

/** '2026-05-01' → Date a la medianoche local de ese día */
export const dayToDate = (day) => new Date(`${day}T00:00:00`)

/** Formatea los números del StatsBar según su tipo. */
export function formatStat(value, format) {
  if (format === 'k') {
    return (value / 1000).toFixed(value % 1000 === 0 ? 0 : 1) + 'K+'
  }
  if (format === 'percent') return value + '%'
  return value + '+'
}

export const pad2 = (n) => String(n).padStart(2, '0')
