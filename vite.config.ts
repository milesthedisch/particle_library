import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => format === "es" ? "main.mjs" : "main.cjs",
    },
    rollupOptions: {
      output: {
        exports: "named",
      },
    },
  },
  test: {
    globals: true,
    environment: "node",
    coverage: {
      provider: "v8",
    },
  },
});
