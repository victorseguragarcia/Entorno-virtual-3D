import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Cambiar el puerto del servidor
    proxy: {
      // Configurar proxies para redireccionar solicitudes a otro servidor
    }
  } // Agregar el cierre de llave que faltaba
});