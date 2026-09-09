import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Si despliega en GitHub Pages bajo /mi-orden/
  // base: '/mi-orden/',
});
