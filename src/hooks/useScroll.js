import { useEffect } from 'react'

/**
 * Suscribe un callback al scroll (passive, una sola vez por componente).
 * El callback recibe window.scrollY. Guarda el último callback en un ref
 * si necesitas estado mutable entre eventos.
 */
export function useScroll(onScroll) {
  useEffect(() => {
    const handler = () => onScroll(window.scrollY)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
