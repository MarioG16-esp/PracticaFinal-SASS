# PracticaFinal-SASS · Titangym (versión móvil)

Maquetación de la versión móvil (390px) del Figma "Trabajo MGO" con HTML + **Sass (SCSS)**, usando Vite.
Dos pantallas: **inicio** (`index.html`) e **inicio de sesión** (`login.html`).

## Arranque rápido

```bash
npm install        # instala vite y sass
npm run dev        # servidor de desarrollo con recarga automática
npm run build      # genera la versión final en dist/ (las dos páginas)
npm run preview    # sirve dist/ para probar la versión final
```

## Estructura

```
├── index.html            ← página de inicio (cabecera con menú, info, planes, horarios, footer)
├── login.html            ← pantalla de inicio de sesión
├── vite.config.js        ← registra las dos páginas para el build
├── public/
│   ├── icons.svg         ← sprite de iconos (<use href="/icons.svg#icon-...">)
│   └── favicon.svg
└── src/
    ├── main.js           ← import de main.scss y de los scripts
    ├── assets/           ← hero-gym.jpg, login-hero.jpg
    ├── scripts/
    │   ├── menu.js       ← abre/cierra el menú hamburguesa (.menu--open)
    │   └── password.js   ← botón del ojo: mostrar/ocultar contraseña
    └── styles/
        ├── _variables.scss  ← colores, fuentes, espaciados, radios, tamaños, breakpoints
        ├── _mixins.scss     ← respond(), flex-center, stack, row, card, type
        ├── _globals.scss    ← reset, estilos base y custom properties en :root
        ├── _layout.scss     ← container, hero, section, footer, login-hero, login
        ├── _components.scss ← logo, button, menu, cards, schedule, field, checkbox, legal...
        └── main.scss        ← el único que se compila: los une con @use
```

## Convenciones

- **BEM**: `bloque__elemento--modificador`. El botón es un bloque (`.button`) con variantes `--login`, `--plan`, `--submit` y `--signup`.
- Ningún color ni medida suelta fuera de `_variables.scss`.
- Estilos por clase, no por etiqueta; máximo 2 niveles de anidamiento.
- Mobile first. `respond()` está preparado para la versión de escritorio.
- Iconos: los de relleno (`.icon`) y los de trazo (`.icon.icon--stroke`) salen del sprite y toman el color de `currentColor`.

## Tipografías (Google Fonts)

| Uso | Fuente |
| --- | --- |
| Títulos | Titan One |
| Textos | Oswald |
| Letra pequeña | Inter |
| Botón | Fugaz One |
| Botón "Crear" | Saira Condensed |
