import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // This allows your existing code using process.env.API_KEY to work
    'process.env': process.env
  }
});