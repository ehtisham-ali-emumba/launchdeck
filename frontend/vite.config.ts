import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
