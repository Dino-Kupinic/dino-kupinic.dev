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
  security: {
    headers: {
      crossOriginEmbedderPolicy: process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
    },
  },
  css: [
    "~/assets/css/main.css",
  ],
  imports: {
    autoImport: true,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@nuxthq/studio",
    "@nuxt/content",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt",
    "@formkit/auto-animate",
    "nuxt-csurf",
    "nuxt-security",
    "nuxt-typed-router",
    "nuxt-icon",
    "nuxt-viewport",
    // "@nuxtjs/seo"
    "shadcn-nuxt",
    "@nuxt/image",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
})