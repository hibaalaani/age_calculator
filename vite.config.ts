import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Determine base URL dynamically
const repoName = '/age_calculator/'; // Replace with your actual repository name
// const base2 = import.meta.env.MODE === 'production' ? '/repo-name/' : '/';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),   tailwindcss()],
  base:repoName, 
})
