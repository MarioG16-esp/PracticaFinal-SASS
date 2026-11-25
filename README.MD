# Titangym · Proyecto final de SASS

## Autor

Mario García Oliva

## Práctica y asignatura

- **Práctica:** Proyecto final de SASS (PracticaFinal-SASS)
- **Asignatura:** Diseño de Interfaces Web (DIW)

## Descripción

Maquetación de la versión móvil (390px) de la web de un gimnasio, **Titangym**, a partir de un prototipo en Figma. Está hecha con HTML y **Sass (SCSS)**, y se compila con Vite.

El proyecto tiene dos pantallas:

- **Inicio (`index.html`):** cabecera con menú hamburguesa desplegable, sección de información, planes, horarios y pie de página.
- **Inicio de sesión (`login.html`):** formulario con correo, contraseña (con botón para mostrarla u ocultarla), casilla "Recordar sesión" y botón para crear cuenta.

El SCSS está organizado en parciales: `_variables`, `_mixins`, `_globals`, `_layout` y `_components`, que `main.scss` une con `@use`. Se usa la nomenclatura BEM y no hay colores ni medidas sueltas fuera de `_variables.scss`.

## Instrucciones de ejecución

Requisito: tener [Node.js](https://nodejs.org) instalado.

```bash
npm install        # instala vite y sass
npm run dev        # servidor de desarrollo (abre la dirección que muestra la terminal)
npm run build      # genera la versión final
npm run preview    # sirve la versión final para probarla
```

## Estructura

```
├── index.html            Página de inicio
├── login.html            Pantalla de inicio de sesión
├── vite.config.js        Registra las dos páginas para el build
├── public/
│   └── icons.svg         Sprite de iconos
└── src/
    ├── main.js           Importa los estilos y los scripts
    ├── assets/           Imágenes de las cabeceras
    ├── scripts/
    │   ├── menu.js       Menú hamburguesa
    │   └── password.js   Mostrar / ocultar contraseña
    └── styles/
        ├── _variables.scss
        ├── _mixins.scss
        ├── _globals.scss
        ├── _layout.scss
        ├── _components.scss
        └── main.scss
```

## Enlaces

- **Repositorio en GitHub:** [PEGA AQUÍ EL ENLACE DEL REPOSITORIO](https://github.com/TU-USUARIO/NOMBRE-DEL-REPO)
- **Página desplegada (GitHub Pages):** [PEGA AQUÍ EL ENLACE DE LA WEB](https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/)
- **Prototipo en Figma:** [PEGA AQUÍ EL ENLACE DE FIGMA](https://www.figma.com/design/TU-ARCHIVO)
