// Textos e información de cada sección. Editar aquí para cambiar copy sin tocar componentes.
import { Droplets, Radio, BrainCircuit, Search, Globe, Library, Trophy } from 'lucide-react'

export const HERO = {
  eyebrow: 'App disponible pronto',
  titleLines: [
    { text: 'Tu planta' },
    { text: 'te está hablando', accent: true },
    { text: '¿La estás escuchando?' },
  ],
  // TODO: texto definitivo (el anterior era un placeholder que no podía quedar en producción)
  description:
    'Sensores IoT e inteligencia artificial que te dicen qué necesita cada planta, justo cuando lo necesita.',
}

// ⚠️ Cifras de ejemplo: la app aún no lanza. Reemplazar por datos reales o quitar la sección.
export const STATS = [
  { target: 50000, label: 'Plantas cuidadas', format: 'k' },
  { target: 12000, label: 'Usuarios felices', format: 'k' },
  { target: 98, label: '% tasa de supervivencia', format: 'percent' },
]

export const FEATURES = {
  tag: 'Tecnología para tus plantas',
  title: ['Todo en una', 'sola app'],
  items: [
    {
      icon: Droplets,
      title: 'Recordatorios Inteligentes',
      description:
        'Olvídate de regar de más o de menos. PlantCare aprende las necesidades de cada planta y te avisa en el momento exacto para regarlas, fertilizarlas o podarlas.',
    },
    {
      icon: Radio,
      title: 'Sensores IoT Integrados',
      description:
        'Conecta sensores de humedad, luz y temperatura. Monitorea en tiempo real las condiciones de tus plantas desde cualquier lugar y recibe alertas instantáneas.',
    },
    {
      icon: BrainCircuit,
      title: 'IA que Aprende',
      description:
        'Nuestra inteligencia artificial analiza el comportamiento de tus plantas y te da recomendaciones personalizadas basadas en su ubicación, clima local y estado de salud.',
    },
  ],
}

export const COMING_SOON = {
  titleLines: ['El futuro del', 'cuidado de plantas', 'está por llegar'],
  description:
    'Estamos desarrollando funciones revolucionarias que transformarán la forma en que cuidas tus plantas. Sé el primero en descubrirlas.',
  goal: {
    title: '🎯 Meta de Pre-lanzamiento',
    description: 'Ayúdanos a alcanzar 2.000 usuarios registrados y ¡adelantaremos el lanzamiento!',
    impact: 'Cada 500 usuarios = 1 mes menos de espera',
  },
  features: [
    { icon: Search, title: 'Diagnóstico con IA', description: 'Sube una foto y detecta enfermedades al instante', progress: 85 },
    { icon: Globe, title: 'Comunidad Global', description: 'Conecta con otros amantes de las plantas', progress: 70 },
    { icon: Library, title: 'Biblioteca 10,000+ especies', description: 'Información detallada de cada planta', progress: 92 },
    { icon: Trophy, title: 'Sistema de Recompensas', description: 'Gana badges mientras cuidas tus plantas', progress: 60 },
  ],
  notify: {
    title: '¡Sé el primero en saberlo!',
    disclaimer: '🔒 Tu email está seguro. Sin spam, lo prometemos.',
  },
}

export const CTA_COPY = {
  title: ['Tu jardín.', 'Bajo control.'],
  description:
    'Descarga PlantCare y transforma la forma en que cuidas tus plantas. Gratis para siempre, con funciones premium opcionales.',
}

export const WELCOME = {
  // El nombre de la mascota se muestra en negrita entre `before` y `after`
  before: '¡Hola! 👋 Soy la planta ',
  mascotName: 'Espuela de Galán',
  after: ', y te doy la bienvenida a PlantCare. ¿Listo para llevar el cuidado de tus plantas al siguiente nivel?',
  button: '¡Comenzar!',
}

export const FOOTER = {
  tagline: ['Transformando el cuidado de plantas', 'una conversación a la vez 🌱'],
  links: [
    { href: '#hero', label: 'Inicio' },
    { href: '#features', label: 'Funcionalidades' },
    { href: '#comingSoon', label: 'Próximamente' },
  ],
}
