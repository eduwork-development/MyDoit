import { resolve } from "path";
import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        pelatihan_akuntansi: resolve(__dirname, "pelatihan-akuntansi.html"),
        analisis_bisnis: resolve(__dirname, "analisis-bisnis.html"),
        akuntansi: resolve(__dirname, "akuntansi.html"),
      },
    },
  },
});
