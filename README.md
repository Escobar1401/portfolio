# Luis Felipe Cano Escobar — Portafolio Profesional

Frontend & Mobile Developer

[Live Demo](https://portfolio-fbxsat97w-escobar1401s-projects.vercel.app/) • [LinkedIn](https://www.linkedin.com/in/felipe-escobar-24187b2a7/) • [CV](./public/CV%20LUIS%20FELIPE.pdf)

![CAPTURA_PRINCIPAL](./public/CAPTURA_PRINCIPAL.png)

**About**

Portfolio profesional construido para exponer proyectos reales, experiencia en liderazgo técnico y competencias en tecnologías modernas de frontend y mobile.

**Tech Stack**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge)
![Zustand](https://img.shields.io/badge/Zustand-000000?style=for-the-badge)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge)
![Lucide](https://img.shields.io/badge/Lucide-111111?style=for-the-badge)

**Características principales**

- Diseño responsive y móvil-first
- Animaciones suaves con Framer Motion
- Ruteo con React Router
- Componentes reutilizables y arquitectura por capas
- Optimizado para performance y accesibilidad

**Arquitectura (resumen)**

```
src
├── app
│   └── store
│       └── useThemeStore.js
├── assets
│   └── projects
├── components
│   ├── hero
│   ├── navbar
│   └── projects
├── data
│   ├── personalInfo.js
	└── projects.js
├── routes
│   └── AppRouter.jsx
├── layouts
└── styles
```

**Proyectos destacados**

- Sistema Integral de Control Académico — Full Stack (React, TypeScript, Node.js, MySQL)
- XISTIAPP — Mobile (Flutter, BLoC, Riverpod)
- Aquí Creamos — Frontend (React, Tailwind CSS)

Para detalles y links a repositorios y demos, ver [src/data/projects.js](src/data/projects.js).

**Lighthouse (sugerencia)**

Incluye aquí los resultados del audit de Lighthouse. Puedes ejecutar la auditoría en Chrome DevTools → Lighthouse y pegar los resultados.

- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

![CAPTURA_LIGHTHOUSE](./public/CAPTURA_LIGHTHOUSE.png)

**Instalación y ejecución (desarrollo)**

```bash
git clone https://github.com/Escobar1401/portfolio
cd my-portfolio-react
npm install
npm run dev
```

Accede a http://localhost:5173 por defecto.

**Scripts útiles**

- `npm run dev` — inicia servidor de desarrollo (Vite)
- `npm run build` — construye versión de producción
- `npm run preview` — sirve la build localmente
- `npm run lint` — corre ESLint

**Configuración y deploy**

Recomendado: desplegar en Vercel o Netlify (Vite es compatible). Para GitHub Pages, usar `npm run build` y publicar la carpeta `dist`.

**Dónde poner las capturas / imágenes**

- Reemplaza `./public/CAPTURA_PRINCIPAL.png` con la captura completa de la home (pantalla completa, buena resolución).
- Reemplaza `./public/CAPTURA_LIGHTHOUSE.png` con la captura del informe Lighthouse.
- Para cada proyecto en `src/assets/projects/*/cover.webp`, guarda una captura en mayúsculas `CAPTURA_PROYECTO_<N>.png` si quieres mostrarlas en el README.

COLOCA_LAS_IMAGENES_AQUI

**Estructura técnica detallada**

- Frontend: React 19 + Vite
- Estilos: Tailwind CSS
- Animaciones: Framer Motion
- Iconografía: Lucide + react-icons
- Ruteo: react-router-dom
- Linter: ESLint

**Contacto**

- Nombre: Luis Felipe Cano Escobar
- Email: luis1401cano2005@gmail.com
- GitHub: https://github.com/Escobar1401