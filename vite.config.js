import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
