// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Dino Kupinic",
    },
  },
  site: {
    url: "https://www.dino-kupinic.dev",
    name: "Dino Kupinic",
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
    "@nuxtjs/seo",
    "@nuxthq/studio",
    "@nuxt/content",
    "@nuxt/image",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt",
    "@formkit/auto-animate",
    "nuxt-csurf",
    "nuxt-security",
    "nuxt-typed-router",
    "nuxt-icon",
    "nuxt-viewport",
    "shadcn-nuxt",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
})