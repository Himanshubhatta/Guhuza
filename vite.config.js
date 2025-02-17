import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/v2": {
        target: "https://api-ghz-v2.azurewebsites.net",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/v2/, "/api/v2"), // Preserve API structure
      },
    },
  },
});
