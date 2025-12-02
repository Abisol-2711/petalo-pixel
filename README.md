# 🌸 Pétalo & Pixel

> Diseños florales únicos que combinan la naturaleza con el arte digital

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

## 📋 Descripción

Pétalo & Pixel es una aplicación web moderna de e-commerce especializada en arreglos florales únicos. Combina un diseño elegante y contemporáneo con funcionalidades robustas para ofrecer una experiencia de usuario excepcional.

## ✨ Características

### Implementadas

- 🏠 **Página de inicio** con hero section, estadísticas y features
- 📚 **Catálogo de productos** con sistema de filtros avanzado
- 🔍 **Filtros dinámicos** por ocasión, color y tamaño
- 🏷️ **Categorías** de productos con navegación intuitiva
- 📱 **Diseño responsive** optimizado para móvil, tablet y desktop
- 🎨 **Selectores visuales** de colores con círculos interactivos
- 📄 **Página de producto** con galería de imágenes y selección de variantes
- ℹ️ **Página About** con información de la marca
- 🎯 **Validación de selección** antes de agregar al carrito
- 🔗 **Rutas dinámicas** con slugs amigables
- ⚡ **Optimización de rendimiento** con Vite y lazy loading

### Próximamente

- 🛒 Carrito de compras funcional
- 💳 Integración de pasarela de pagos
- 👤 Sistema de autenticación de usuarios
- ⭐ Sistema de reseñas y valoraciones
- 🔔 Notificaciones en tiempo real
- 📧 Integración con sistema de emails

## 🛠️ Tecnologías

- **Frontend Framework**: React 18.3 con TypeScript
- **Build Tool**: Vite 6.0
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui
- **Routing**: React Router 7.1
- **Backend**: Supabase (PostgreSQL)
- **Fonts**: Google Fonts (Poppins, Josefin Sans, Inter)

## 🚀 Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/Abisol-2711/petalo-pixel.git
cd petalo-pixel
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

```bash
# Crear archivo .env en la raíz del proyecto
VITE_SUPABASE_URL=tu_supabase_url
VITE_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

4. **Iniciar servidor de desarrollo**

```bash
npm run dev
```

5. **Abrir en el navegador**

```
http://localhost:5173
```

## 📦 Scripts Disponibles

```bash
npm run dev          # Inicia el servidor de desarrollo
npm run build        # Genera build de producción
npm run preview      # Preview del build de producción
npm run lint         # Ejecuta ESLint para verificar código
```

## 🎨 Paleta de Colores

```css
--primary: #2D6A4F    
--secondary: #F4A261
--gray-light: #F3F4F6
--gray-medium: #9CA3AF
--text-dark: #0B0B0B
--white: #FFFFFF
```

## 📱 Breakpoints Responsive

```css
sm:  640px   /* Móvil grande */
md:  768px   /* Tablet */
lg:  1024px  /* Desktop */
xl:  1280px  /* Desktop grande */
```

## 🗂️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Filters/        # Sistema de filtros
│   └── ui/             # Componentes UI de shadcn
├── contexts/           # React Context (futuro)
├── hooks/              # Custom hooks
├── interfaces/         # TypeScript interfaces
├── layout/             # Layout components
├── pages/              # Páginas de la aplicación
├── routes/             # Configuración de rutas
├── supabase/           # Configuración de Supabase
└── utils/              # Utilidades y helpers
```

## 🔗 Base de Datos

### Tablas Principales

- **products**: Información de productos
- **categories**: Categorías de productos
- **tags**: Sistema de etiquetas (occasion, color, size)

### Relaciones

- Products → Categories (Many-to-One)
- Products → Tags (Many-to-Many mediante arrays)

## 👥 Autor

**Sol**

- GitHub: [@Abisol-2711](https://github.com/Abisol-2711)

