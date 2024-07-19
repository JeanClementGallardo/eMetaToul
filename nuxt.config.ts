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
      "/eMetaToul",
      "/eMetaToul/catalogue",
      "/eMetaToul/equipe",
      "/eMetaToul/formations",
      "/eMetaToul/ressources/fiche",
      "/eMetaToul/ressources/tips",
      "/eMetaToul/ressources/template",
      "/eMetaToul/ressources/presentation"
    ]
  },

  compatibilityDate: '2024-07-04'
})