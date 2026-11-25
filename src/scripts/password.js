// Botón del ojo: muestra u oculta la contraseña
document.querySelectorAll('[data-password-toggle]').forEach((button) => {
  const input = document.getElementById(button.dataset.passwordToggle)
  const icon = button.querySelector('use')

  button.addEventListener('click', () => {
    const show = input.type === 'password'

    input.type = show ? 'text' : 'password'
    button.setAttribute('aria-pressed', String(show))
    button.setAttribute('aria-label', show ? 'Ocultar contraseña' : 'Mostrar contraseña')
    icon.setAttribute('href', show ? '/icons.svg#icon-eye' : '/icons.svg#icon-eye-off')
  })
})
