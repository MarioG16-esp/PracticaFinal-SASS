# PracticaFinal-SASS - Titangym (versión móvil)

Maquetación de la versión móvil (390px) del Figma "Trabajo MGO" con HTML + SASS, usando Vite.

## Cómo ejecutarlo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # compilar para producción
```

## Estructura

```
index.html                 Marcado de toda la página (BEM)
src/
  main.js                  Importa main.scss (Vite compila SASS solo)
  assets/img/hero-gym.jpg  Imagen de fondo de la cabecera
  styles/
    main.scss              Punto de entrada (@use de los parciales)
    _variables.scss        Paleta, tipografías, tamaños, radios, breakpoints
    _mixing.scss           Funciones y mixins (rem, stack, card, type, respond-to...)
    _globals.scss          Reset y estilos base
    _layout.scss           Hero, secciones y footer
    _components.scss       Logo, botones, nav, cards, planes, horarios, redes
```

## Tokens del diseño

| Token | Valor |
| --- | --- |
| Verde lima | `#2cec22` |
| Verde oscuro | `#4c9848` |
| Horario (rosa) | `#ed2196` |
| Gris trazos / letra pequeña | `#969ba4` |
| Recuadros | `#f7f8fa` |
| Títulos | Titan One |
| Textos | Oswald |
| Letra pequeña | Inter |
| Botón | Fugaz One |
