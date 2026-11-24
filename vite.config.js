import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

// Dos páginas: inicio (index.html) y login (login.html)
export default defineConfig({
  build: {
    rolldownOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        login: fileURLToPath(new URL('./login.html', import.meta.url)),
      },
    },
  },
})
