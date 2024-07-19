// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['~/assets/css/main.css'],
  
  modules: ['@nuxt/content', "@nuxt/image"],

  routeRules: {
    '/': { prerender: true }
  },

  generate: {
    routes: [
      "/",
      "/catalogue",
      "/equipe",
      "/formations",
      "/ressources/fiche",
      "/ressources/tips",
      "/ressources/template",
      "/ressources/presentation"
    ]
  },

  compatibilityDate: '2024-07-04'
})