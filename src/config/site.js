// Configuración global del sitio. Todo lo que cambia seguido (fechas, links,
// contacto, endpoints) vive aquí, para no buscarlo componente por componente.

export const SITE = {
  name: 'PlantCare',
  url: 'https://plantcare.cl',
  version: 'v1.0.0 Beta',
  contactEmail: 'becheverria@plantcare.cl',
}

// ⚠️ Esta fecha ya pasó (1 may 2026). Actualizarla cuando haya fecha nueva.
// El countdown, el badge y los mensajes de los botones se derivan de aquí.
// Formato YYYY-MM-DD. El countdown apunta a la medianoche de ese día (hora del visitante).
export const LAUNCH = {
  day: '2026-05-01',
}

// Links a las tiendas. Mientras sean null, los botones muestran el aviso de lanzamiento.
export const STORE_LINKS = {
  googlePlay: null,
  appStore: null,
}

// Formulario "Notificarme". Define VITE_FORM_ENDPOINT en .env (ver .env.example).
// El fallback mantiene el comportamiento actual del sitio.
export const FORM = {
  endpoint:
    import.meta.env.VITE_FORM_ENDPOINT ||
    'https://formsubmit.co/bastian.echeverria13@gmail.com',
  subject: '🌱 Nuevo registro PlantCare - Pre-lanzamiento',
}

// Pre-lanzamiento: meta de registros y cupos con descuento.
export const PRELAUNCH = {
  goalTarget: 2000,
  goalCurrent: 0, // TODO: conectar a un conteo real
  earlyBirdSlots: 13, // ⚠️ hoy se descuenta solo en el navegador del visitante
  earlyBirdDiscount: '50%',
}

// Tiempos de la intro (ms)
export const INTRO = {
  preloaderMs: 1800,
  modalDelayMs: 400,
}

// Rutas de imágenes en /public
export const ASSETS = {
  logoDark: '/brand/logo-blanco.png', // se usa con tema oscuro
  logoLight: '/brand/logo-verde.png', // se usa con tema claro
  mascot: '/brand/mascota-espuela-de-galan.png',
}
