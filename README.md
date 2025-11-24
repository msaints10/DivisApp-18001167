# DivisApp 18001167 - Conversor de Divisas

Aplicación móvil híbrida desarrollada con **Ionic Framework** (última versión) y **Tailwind CSS 3** para convertir Quetzales (GTQ) a Dólares (USD).

## 🚀 Características

- ✨ Interfaz moderna y atractiva con Tailwind CSS 3
- 💱 Conversión automática de Quetzales a Dólares
- 📱 Diseño responsive para dispositivos móviles
- 🎨 Gradientes y animaciones suaves
- 🌙 Soporte para modo oscuro
- ⚡ Conversión en tiempo real mientras escribes

## 💰 Tasa de Cambio

La aplicación utiliza una tasa de cambio fija de:
- **8 Quetzales (GTQ) = 1 Dólar (USD)**

## 🛠️ Tecnologías Utilizadas

- **Ionic Framework** (última versión)
- **Angular** (Standalone Components)
- **Tailwind CSS 3**
- **TypeScript**
- **Capacitor** (para compilación nativa)

## 📋 Requisitos Previos

- Node.js (versión 18 o superior)
- npm (versión 9 o superior)

## 🔧 Instalación

1. Navega al directorio del proyecto:
```bash
cd "conversor-de-divisas"
```

2. Instala las dependencias:
```bash
npm install
```

## 🚀 Ejecución en Desarrollo

Para ejecutar la aplicación en modo desarrollo:

```bash
npm start
```

O usando Ionic CLI:

```bash
npx ionic serve
```

La aplicación se abrirá automáticamente en tu navegador en `http://localhost:8100/`

## 📱 Compilación para Dispositivos Móviles

### Android

```bash
npx ionic capacitor add android
npx ionic capacitor build android
npx ionic capacitor open android
```

### iOS

```bash
npx ionic capacitor add ios
npx ionic capacitor build ios
npx ionic capacitor open ios
```

## 🏗️ Compilación para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos compilados se generarán en el directorio `www/`

## 📖 Uso de la Aplicación

1. **Ingresa la cantidad en Quetzales**: Escribe la cantidad que deseas convertir en el campo "Cantidad en Quetzales (GTQ)"
2. **Conversión automática**: La aplicación convertirá automáticamente el valor a dólares mientras escribes
3. **Botón Convertir**: También puedes hacer clic en el botón "Convertir" para realizar la conversión
4. **Botón Limpiar**: Limpia ambos campos para iniciar una nueva conversión

## 🎨 Características de Diseño

- **Gradientes modernos**: Uso de gradientes de color emerald y teal
- **Animaciones suaves**: Transiciones y animaciones para mejorar la experiencia de usuario
- **Tarjetas con sombras**: Diseño con profundidad usando sombras CSS
- **Iconos de Ionicons**: Iconos vectoriales escalables
- **Tipografía clara**: Fuentes legibles y jerarquía visual clara

## 📂 Estructura del Proyecto

```
conversor-de-divisas/
├── src/
│   ├── app/
│   │   ├── home/
│   │   │   ├── home.page.html      # Template de la página principal
│   │   │   ├── home.page.ts        # Lógica de conversión
│   │   │   └── home.page.scss      # Estilos personalizados
│   │   └── app.routes.ts           # Configuración de rutas
│   ├── global.scss                 # Estilos globales + Tailwind CSS
│   └── index.html                  # Punto de entrada HTML
├── postcss.config.js               # Configuración de PostCSS para Tailwind
├── ionic.config.json               # Configuración de Ionic
├── angular.json                    # Configuración de Angular
└── package.json                    # Dependencias del proyecto
```

## 🧮 Lógica de Conversión

La conversión se realiza con la siguiente fórmula:

```typescript
dolares = quetzales / 8
```

Ejemplo:
- 80 Quetzales = 10 Dólares
- 100 Quetzales = 12.50 Dólares
- 40 Quetzales = 5 Dólares

## 👨‍💻 Autor

Desarrollado como proyecto académico - **DivisApp 18001167**

## 📝 Notas

- La aplicación utiliza Angular Standalone Components (la forma moderna de desarrollar con Angular)
- Tailwind CSS 3 está configurado con PostCSS para procesamiento de estilos
- La aplicación es completamente responsive y funciona en dispositivos móviles y de escritorio

## 🐛 Solución de Problemas

### Error: "Invalid project type"
Si encuentras este error, verifica que `ionic.config.json` tenga `"type": "angular"`

### Advertencia de Sass @import
Es normal ver una advertencia sobre `@import` en Sass. Esto no afecta la funcionalidad de la aplicación.

### El servidor no inicia
Asegúrate de que el puerto 8100 no esté siendo usado por otra aplicación.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.
