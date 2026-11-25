// Menú hamburguesa: abre y cierra el desplegable añadiendo .menu--open
const menu = document.querySelector('.menu')

if (menu) {
  const toggle = menu.querySelector('.menu__toggle')

  const setOpen = (open) => {
    menu.classList.toggle('menu--open', open)
    toggle.setAttribute('aria-expanded', String(open))
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú')
  }

  toggle.addEventListener('click', () => {
    setOpen(!menu.classList.contains('menu--open'))
  })

  // Al elegir una opción, se cierra
  menu.addEventListener('click', (event) => {
    if (event.target.closest('.menu__link')) setOpen(false)
  })

  // Escape o clic fuera del menú también lo cierran
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false)
  })

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target)) setOpen(false)
  })
}
