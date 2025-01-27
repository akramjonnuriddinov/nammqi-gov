import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ['~/assets/css/style.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    vueI18n: './i18n.config.ts',
    langDir: '/locales',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        file: 'en.json',
        name: 'English',
      },
      {
        code: 'uz',
        file: 'uz.json',
        name: 'Uzbek',
      },
      {
        code: 'ru',
        file: "ru.json",
        name: "Русский"
      }
    ]
  }
})