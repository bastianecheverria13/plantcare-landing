# PlantCare React - Guía de Migración

## 🚀 Estructura Completa del Proyecto React

Esta es la migración completa de PlantCare a React con Vite.

## 📁 Estructura de Archivos

```
plantcare-react/
├── public/                          # Archivos estáticos
│   ├── logo_plantcare_blanco.png   # Logo modo oscuro
│   ├── logo_plantcare_verde.png    # Logo modo claro
│   └── planta_presentacion.png     # Mascota Espuela de Galán
├── src/
│   ├── components/                  # Componentes React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── StatsBar.jsx
│   │   ├── Features.jsx
│   │   ├── ComingSoon.jsx
│   │   ├── CTA.jsx
│   │   ├── Footer.jsx
│   │   ├── Preloader.jsx
│   │   ├── WelcomeModal.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── BackToTop.jsx
│   │   └── Cursor.jsx
│   ├── styles/
│   │   └── index.css               # CSS completo (copiar del HTML original)
│   ├── App.jsx                     # Componente principal
│   └── main.jsx                    # Punto de entrada
├── index.html                       # HTML base
├── package.json                     # Dependencias
└── vite.config.js                  # Configuración de Vite
```

## 📦 Instalación y Configuración

### 1. Clonar tu repositorio
```bash
git clone https://github.com/ISWebster1401/PlantCare-.git
cd PlantCare-
```

### 2. Crear carpeta de React (si no existe)
```bash
mkdir plantcare-react
cd plantcare-react
```

### 3. Copiar archivos de esta migración
Copia todos los archivos generados a tu carpeta `plantcare-react/`

### 4. Copiar el CSS
**IMPORTANTE**: Copia todo el contenido del CSS de tu `assets/css/index.css` original a `src/styles/index.css`

### 5. Copiar imágenes a public/
Mueve tus imágenes a la carpeta `public/`:
```bash
cp ../assets/img/logo_plantcare_blanco.png public/
cp ../assets/img/logo_plantcare_verde-removebg-preview.png public/logo_plantcare_verde.png
cp ../assets/img/planta_presentación.png public/planta_presentacion.png
```

### 6. Instalar dependencias
```bash
npm install
```

### 7. Iniciar servidor de desarrollo
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 🎨 Características Implementadas

✅ **Todos los componentes convertidos a React**
- Header con scroll dinámico
- Hero con animaciones GSAP
- StatsBar con contadores animados
- Features con Lucide Icons
- ComingSoon con:
  - Countdown en tiempo real hacia 1 mayo 2026
  - Goal de 2M usuarios con barra de progreso
  - Coming Features con progreso
  - Formulario con contador de primeros 13 registros
- CTA final
- Footer completo

✅ **Funcionalidades**
- ⚡ Tema claro/oscuro con persistencia en localStorage
- 🎭 Preloader animado
- 👋 Modal de bienvenida con Espuela de Galán
- 🖱️ Cursor personalizado
- ⬆️ Botón back-to-top
- 📊 Progress bar de scroll
- 🎨 Animaciones GSAP
- 🎯 Lucide Icons para todos los íconos

✅ **Responsive**
- Totalmente adaptado para móviles
- Breakpoints optimizados

## 🔧 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Previsualizar build de producción
```

## 📝 Cambios Importantes de HTML/JS a React

### Estado y Hooks
- `useState` para manejo de estado local
- `useEffect` para efectos secundarios (timers, scroll listeners, etc.)
- `useRef` para referencias a elementos DOM

### Eventos
```javascript
// Antes (HTML)
onclick="openPlayStore()"

// Ahora (React)
onClick={openPlayStore}
```

### Clases dinámicas
```javascript
// React
className={`header ${scrolled ? 'scrolled' : ''}`}
```

### Formularios
```javascript
// React - Controlled components
<input 
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

## 🎯 Componentes Clave

### ComingSoon.jsx
- Maneja el countdown con `setInterval`
- Goal de usuarios con progreso animado
- Contador de "primeros 13" que decrementa al enviar email
- Integración con FormSubmit

### Hero.jsx
- Animaciones GSAP en `useEffect`
- Parallax 3D del logo con mouse tracking
- Botones de App Store / Google Play

### StatsBar.jsx
- Contadores animados con ScrollTrigger
- Formateo dinámico de números (K+, %, etc.)

## 🚨 Puntos Importantes

1. **CSS**: Debes copiar manualmente el CSS completo de tu versión HTML original
2. **Imágenes**: Asegúrate de que todas las imágenes estén en `public/`
3. **Email**: Cambia el email en `ComingSoon.jsx` línea 61 si es necesario
4. **Fecha**: El countdown apunta al 1 de mayo 2026 (GMT-3 Chile)

## 📤 Deployment

### Build para producción
```bash
npm run build
```

Esto generará la carpeta `dist/` lista para desplegar en:
- Vercel
- Netlify  
- GitHub Pages
- Cualquier hosting estático

### Ejemplo Vercel
```bash
npm install -g vercel
vercel
```

## 🔗 Enlaces Útiles

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [GSAP Documentation](https://greensock.com/docs/)
- [Lucide React Icons](https://lucide.dev/)

## ✨ Próximos Pasos

1. Copiar el CSS completo
2. Agregar imágenes a `public/`
3. Probar en desarrollo
4. Ajustar colores/estilos si es necesario
5. Build y deploy

## 🐛 Troubleshooting

**Problema**: Imágenes no se ven
- **Solución**: Verifica que estén en `public/` y la ruta sea `/imagen.png`

**Problema**: Animaciones no funcionan
- **Solución**: Asegúrate de que GSAP esté importado correctamente

**Problema**: CSS no aplicado
- **Solución**: Verifica que `index.css` esté importado en `main.jsx`

## 📧 Contacto

Si tienes dudas con la migración, revisa este README o consulta la documentación de React/Vite.

---

**¡PlantCare en React está listo! 🌱✨**
