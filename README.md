# PlantCare — Landing

Landing oficial de [plantcare.cl](https://plantcare.cl). React 18 + Vite 5 + GSAP.

## Correr el proyecto

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # genera dist/
npm run preview   # sirve dist/ localmente
```

Opcional: copia `.env.example` a `.env` para cambiar el endpoint del formulario.

## Estructura

```
├── index.html               # SEO, Open Graph, fuentes
├── public/brand/            # logos y mascota
└── src/
    ├── main.jsx             # punto de entrada
    ├── App.jsx              # arma la página (orden de secciones + intro)
    ├── config/site.js       # ⚙️ fechas, links de tiendas, contacto, formulario, assets
    ├── content/copy.js      # ✏️ todos los textos de la página
    ├── hooks/               # useTheme, useScroll, useCountdown, useScrollReveal
    ├── lib/                 # helpers: formato de fechas/números, envío del formulario
    ├── components/
    │   ├── layout/          # Header, Footer
    │   ├── sections/        # Hero, StatsBar, Features, CTA, coming-soon/
    │   └── ui/              # piezas reutilizables: StoreButtons, ThemeLogo, Cursor,
    │                        # ThemeToggle, BackToTop, ScrollProgress, Preloader, WelcomeModal
    └── styles/
        ├── index.css        # solo @imports, en orden
        ├── base/            # tokens (colores/temas), reset, responsive
        ├── layout/          # header, footer
        ├── sections/        # un archivo por sección
        └── ui/              # un archivo por componente
```

## Dónde cambiar qué

| Quiero cambiar…                          | Archivo                         |
|------------------------------------------|---------------------------------|
| Cualquier texto                          | `src/content/copy.js`           |
| Fecha de lanzamiento                     | `src/config/site.js` → `LAUNCH` |
| Links a Google Play / App Store          | `src/config/site.js` → `STORE_LINKS` |
| Colores de los temas                     | `src/styles/base/tokens.css`    |
| Estilo de una sección                    | `src/styles/sections/<sección>.css` |
| Breakpoints móviles                      | `src/styles/base/responsive.css` |

Los estilos responsive están todos juntos en `base/responsive.css` y se cargan al final, igual que en el CSS original, para no alterar la cascada.

## Pendientes (decisiones de producto)

- **Fecha de lanzamiento**: `LAUNCH.day` sigue en 2026-05-01, que ya pasó.
- **Stats del home** (50K plantas, 12K usuarios, 98%): son cifras de ejemplo y la app aún no lanza.
- **Descuento a los primeros 13**: el contador vive solo en el navegador del visitante.
- **Formulario**: usa formsubmit.co sin captcha. Conviene migrarlo a un backend propio (p. ej. Supabase) con conteo real de registros.
- **Texto del Hero**: hay un texto provisorio en `copy.js` → `HERO.description`.
