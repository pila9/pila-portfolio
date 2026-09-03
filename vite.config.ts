import vue from '@vitejs/plugin-vue'
import tailwind from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  base: '/pila-portfolio/',  // Add this line
  plugins: [tailwind(), vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})