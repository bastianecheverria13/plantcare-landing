import { useEffect, useRef } from 'react'

const INTERACTIVE = 'button, a, .feature-card, .logo-container, .theme-toggle'

/** Cursor personalizado (solo en dispositivos con mouse). */
export default function Cursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let mx = 0, my = 0, cx = 0, cy = 0, fx = 0, fy = 0
    let frameId

    const activateTimer = setTimeout(() => {
      cursor.classList.add('active')
      follower.classList.add('active')
    }, 600)

    const onMouseMove = (e) => {
      mx = e.clientX
      my = e.clientY
    }

    // Delegación de eventos: funciona también con elementos que aparecen después (p. ej. el modal)
    const setHover = (on) => {
      cursor.classList.toggle('hover', on)
      follower.classList.toggle('hover', on)
    }
    const onMouseOver = (e) => setHover(!!e.target.closest?.(INTERACTIVE))

    const animate = () => {
      cx += (mx - cx) * 0.22
      cy += (my - cy) * 0.22
      fx += (mx - fx) * 0.1
      fy += (my - fy) * 0.1
      cursor.style.left = cx + 'px'
      cursor.style.top = cy + 'px'
      follower.style.left = fx + 'px'
      follower.style.top = fy + 'px'
      frameId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    animate()

    return () => {
      clearTimeout(activateTimer)
      cancelAnimationFrame(frameId)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
    }
  }, [])

  return (
    <>
      <div id="cursor" ref={cursorRef} aria-hidden="true" />
      <div id="cursorFollower" ref={followerRef} aria-hidden="true" />
    </>
  )
}
