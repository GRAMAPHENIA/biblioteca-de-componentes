# Transaesthetic Dashboard

Un dashboard moderno y elegante construido con [Astro](https://astro.build/) y [Tailwind CSS](https://tailwindcss.com/) para la presentación de servicios premium.

## 🚀 Características

- **Framework moderno**: Construido con Astro 5 para un rendimiento óptimo
- **Diseño responsivo**: Interfaz adaptativa que funciona en todos los dispositivos
- **Componentes modulares**: Arquitectura de componentes reutilizables (átomos, moléculas, organismos)
- **Estilos modernos**: Utiliza Tailwind CSS para un diseño consistente y atractivo
- **Optimización SEO**: Incluye sitemap automático para mejor indexación
- **Service Worker**: Funcionalidad offline con estrategias de cache para mejor rendimiento
- **PWA Ready**: Preparado para funcionar como Progressive Web App

## 📋 Requisitos

- Node.js (versión 18 o superior)
- pnpm (recomendado) o npm

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd transaesthetic-dashboard
```

2. Instala las dependencias:
```bash
pnpm install
```

## 🚀 Uso

### Desarrollo

Para iniciar el servidor de desarrollo:
```bash
pnpm dev
```

La aplicación estará disponible en `http://localhost:4321`

### Producción

Para construir la aplicación para producción:
```bash
pnpm build
```

Para previsualizar la versión de producción:
```bash
pnpm preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── atoms/          # Componentes básicos (Button, Input, Icon)
│   ├── molecules/      # Componentes compuestos (Card, ProductCard)
│   ├── cells/          # Secciones de página (Hero, ProductGrid)
│   └── common/         # Componentes compartidos (Section)
├── layouts/            # Layouts de página
├── pages/              # Páginas de la aplicación
├── styles/             # Estilos globales
└── types/              # Definiciones de tipos TypeScript
```

## 🎨 Componentes

### Componentes Atómicos
- **Button**: Botón reutilizable con múltiples variantes
- **Input**: Campo de entrada de texto
- **Icon**: Componente para iconos SVG

### Componentes Moleculares
- **Card**: Tarjeta para mostrar información de servicios
- **ProductCard**: Tarjeta especializada para productos/servicios

### Componentes de Organización
- **Hero**: Sección principal de la página
- **ProductGrid**: Grid para mostrar múltiples productos
- **Section**: Contenedor para secciones de contenido

## 🛠️ Tecnologías

- **[Astro](https://astro.build/)**: Framework web moderno para contenido rápido
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitario
- **[TypeScript](https://www.typescriptlang.org/)**: Tipado estático para JavaScript

## 🔧 Service Worker

El proyecto incluye un Service Worker configurado para mejorar el rendimiento y permitir funcionalidad offline:

### Características del Service Worker:
- **Cache First**: Para recursos estáticos (CSS, JS, imágenes)
- **Network First**: Para recursos dinámicos
- **Gestión automática**: De actualizaciones y limpieza de cache
- **Registro automático**: Se registra al cargar la aplicación

### Estrategias de Cache:
- **Cache Estático**: Archivos principales de la aplicación
- **Cache Dinámico**: Recursos que cambian frecuentemente
- **Limpieza automática**: De caches antiguos al actualizar

### Archivos relacionados:
- `public/sw.js`: Service Worker principal
- `src/layouts/Layout.astro`: Registro del Service Worker
- `astro.config.mjs`: Configuración de headers de seguridad

##  Scripts Disponibles

- `pnpm dev` - Inicia el servidor de desarrollo
- `pnpm build` - Construye la aplicación para producción
- `pnpm preview` - Previsualiza la versión de producción
- `pnpm astro` - Ejecuta comandos de Astro CLI

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -am 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Para soporte o preguntas, por favor contacta al equipo de desarrollo.

---

**Desarrollado por el equipo de Transaesthetic**