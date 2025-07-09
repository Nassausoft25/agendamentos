import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Importe o módulo path
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175, // Define a porta explicitamente
    open: true, // Abre o navegador automaticamente
    strictPort: true, // Fecha se a porta estiver em uso
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // Cria alias para imports
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    }
  }
})