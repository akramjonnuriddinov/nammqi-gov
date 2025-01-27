import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/style.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ["@nuxtjs/i18n"],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  }
});