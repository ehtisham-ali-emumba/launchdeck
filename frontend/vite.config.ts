import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), visualizer({ open: true })],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom", "antd"],
          home: ["./src/pages/Home/index.tsx"],
          products: [
            "./src/pages/Product/index.ts",
            "./src/pages/Product/Categories/index.ts",
            "./src/pages/Product/CreateProduct/index.ts",
            "./src/pages/Product/ProductDetails/index.ts",
            "./src/pages/Product/Landscape/index.ts",
          ],
          tours: ["./src/pages/Tour/index.ts"],
          vehicles: ["./src/pages/Vehicles/index.ts"],
        },
      },
    },
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
  },
  resolve: {
    alias: {
      "~/components": path.resolve(__dirname, "src/components"),
      "~/api": path.resolve(__dirname, "src/api"),
      "~/atoms": path.resolve(__dirname, "src/atoms"),
      "~/layout": path.resolve(__dirname, "src/layout"),
      "~/providers": path.resolve(__dirname, "src/providers"),
      "~/routes": path.resolve(__dirname, "src/routes"),
      "~/services": path.resolve(__dirname, "src/services"),
      "~/pages": path.resolve(__dirname, "src/pages"),
      "~/styles": path.resolve(__dirname, "src/styles"),
      "~/utils": path.resolve(__dirname, "src/utils"),
      "~/hooks": path.resolve(__dirname, "src/hooks"),
      "~/constants": path.resolve(__dirname, "src/constants"),
      "~/assets": path.resolve(__dirname, "src/assets"),
      "~/types": path.resolve(__dirname, "src/types"),
    },
  },
});
