import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Support flow 2 components
          isCustomElement: (tag) => tag.startsWith("f-"),
          comments: false,
          whitespace: "condense",
        },
      },
    }),
  ],
});
