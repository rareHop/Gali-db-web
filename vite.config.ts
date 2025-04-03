import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    open: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'date-fns', 'react-syntax-highlighter'],
    exclude: ['@popperjs/core', '@tiptap/core']
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  }
}) 