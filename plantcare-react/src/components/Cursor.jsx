import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    let mx = 0, my = 0, cx = 0, cy = 0, fx = 0, fy = 0

    const cursor = cursorRef.current
    const follower = followerRef.current

    if (!cursor || !follower) return

    // Verificar si es dispositivo táctil
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return
    }

    setTimeout(() => {
      cursor.classList.add('active')
      follower.classList.add('active')
    }, 600)

    const handleMouseMove = (e) => {
      mx = e.clientX
      my = e.clientY
    }

    function animate() {
      cx += (mx - cx) * 0.22
      cy += (my - cy) * 0.22
      fx += (mx - fx) * 0.1
      fy += (my - fy) * 0.1

      cursor.style.left = cx + 'px'
      cursor.style.top = cy + 'px'
      follower.style.left = fx + 'px'
      follower.style.top = fy + 'px'

      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMouseMove)
    animate()

    // Hover effects
    const interactiveElements = document.querySelectorAll(
      'button, a, .feature-card, .logo-container, .theme-toggle'
    )

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover')
        follower.classList.add('hover')
      })

      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover')
        follower.classList.remove('hover')
      })
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursorFollower" ref={followerRef}></div>
    </>
  )
}
