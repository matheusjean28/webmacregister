/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  plugins: [react()],
  test: {
    environment: 'jsdom', 
    globals: true,
    coverage: {
      reporter: ['text', 'html'], 
    },
  },
})
