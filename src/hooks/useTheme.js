import { useEffect, useState } from 'react'

const STORAGE_KEY = 'pc-theme'

function readStoredTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY) || 'dark'
  } catch {
    return 'dark'
  }
}

/** Tema claro/oscuro persistido en localStorage y aplicado en <html data-theme>. */
export function useTheme() {
  const [theme, setTheme] = useState(readStoredTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* modo privado o storage bloqueado */
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return { theme, toggleTheme }
}
