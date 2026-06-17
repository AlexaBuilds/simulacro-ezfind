import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 👈 Importamos el plugin oficial

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss() // 👈 Registramos el plugin aquí para activar el motor v4
  ],
  base: '/simulacro-ezfind/', // Ajustado a la ruta del simulacro
  server: {
    host: true,
    port: 5177,               // Puerto exclusivo asignado
    strictPort: true
  }
})
