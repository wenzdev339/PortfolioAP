import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import profilePhoto from './assets/profile-photo.png'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
