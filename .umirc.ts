import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "books/list" },
  ],

  npmClient: "pnpm",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
});
