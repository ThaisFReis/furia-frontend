import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^@\/(.*)/,
        replacement: "/src/$1",
      },
      {
        find: "./runtimeConfig",
        replacement: "./runtimeConfig.browser",
      },
    ],
  },
  plugins: [react(), svgr()],
  define: {
    global: "window",
  },
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "unsafe-none",
      "Cross-Origin-Embedder-Policy": "unsafe-none",
    },
    cors: true,
  },
  optimizeDeps: {
    exclude: ["@ffmpeg/ffmpeg", "@ffmpeg/util"],
  },
});
