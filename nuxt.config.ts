// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Dino Kupinic",
    },
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  imports: {
    autoImport: true,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",
    "@formkit/auto-animate",
    "nuxt-icon",
    "@nuxt/content",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-csurf",
    "nuxt-typed-router",
    "nuxt-viewport",
    "@nuxthq/studio",
    "@nuxtjs/seo"
  ]
})