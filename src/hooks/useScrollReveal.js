import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Anima con fade-up los elementos `selector` dentro de `scopeRef` cuando entran en pantalla.
 * Usa gsap.context, así al desmontar solo se limpian los triggers de este componente
 * (antes cada sección mataba los ScrollTriggers de todas las demás).
 */
export function useScrollReveal(scopeRef, selector, { start = 'top 85%', stagger = 0.15, onEnter } = {}) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(selector).forEach((el, index) => {
        ScrollTrigger.create({
          trigger: el,
          start,
          once: true,
          onEnter: () => {
            gsap.to(el, { opacity: 1, y: 0, duration: 0.8, delay: index * stagger, ease: 'power3.out' })
            onEnter?.(el, index)
          },
        })
      })
    }, scopeRef)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
