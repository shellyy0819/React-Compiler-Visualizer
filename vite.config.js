
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),],
  define: {
    'process.env.REACT_COMPILER_DEBUG': JSON.stringify(true),
  },
});
