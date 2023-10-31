import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';
import tailwindcss from 'tailwindcss';
import tailwindConfig from './tailwind.config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint({ exclude: [/virtual:/, /node_modules/] })],
  css: {
    postcss: {
      plugins: [tailwindcss(tailwindConfig)],
    },
  },
});
