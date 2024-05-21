import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/birds": {
        target: "https://api.birds.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/birds/, ""),
      },
      "/api/dogs": {
        target: "https://api.dogs.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/dogs/, ""),
      },
      "/api/cats": {
        target: "https://api.cats.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/cats/, ""),
      },
    },
  },
});
