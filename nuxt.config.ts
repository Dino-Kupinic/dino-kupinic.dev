import {currentLocales} from "./config/i18n"

export default defineNuxtConfig({
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
    "nuxt-icon",
    "nuxt-viewport",
    "shadcn-nuxt",
    "@nuxtjs/device",
    "@nuxt/fonts",
  ],
  typescript: {
    typeCheck: true,
    strict: true
  },
  imports: {
    autoImport: true,
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
  security: {
    headers: {
      crossOriginEmbedderPolicy: process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
    },
  },
  css: [
    "~/assets/css/main.css",
    "~/assets/css/tailwind.css",
  ],
  tailwindcss: {
    exposeConfig: true
  },
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    locales: currentLocales,
    detectBrowserLanguage: false,
    langDir: "locales",
    defaultLocale: "en-US",
    vueI18n: "~/config/i18n.config.ts",
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
})