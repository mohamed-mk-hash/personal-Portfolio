import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import scrollbarPlugin from 'tailwind-scrollbar'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        plugins: [scrollbarPlugin],
      }
    })
  ],
})