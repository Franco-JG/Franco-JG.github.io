import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three-core': ['three'],
          'react-three': ['@react-three/fiber', '@react-three/drei', '@react-three/postprocessing'],
          'vendor': ['react', 'react-dom'],
          'animations': ['gsap', '@studio-freight/lenis', 'gsap/ScrollTrigger']
        }
      }
    }
  }
})
