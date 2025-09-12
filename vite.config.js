import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.ts',
  },
  resolve: {
    alias: {
      '@': '/src', //默认@为src
    },
  },
  server: {
    hmr:true //热更新
  },
});

