import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const githubPagesBase = '/warrior-martical/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: githubPagesBase,
})
