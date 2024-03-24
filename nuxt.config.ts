import { currentLocales } from "./config/i18n"

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
  nitro: {
    imports: {
      dirs: ["./server/db/**"],
      imports: [{ from: "zod", name: "z" }],
    },
  },
  modules: [
    "@nuxthq/studio",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "@nuxtjs/device",
    "@nuxtjs/web-vitals",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt",
    "@formkit/auto-animate",
    "nuxt-csurf",
    "nuxt-security",
    "nuxt-icon",
    "nuxt-viewport",
    "shadcn-nuxt",
  ],
  typescript: {
    typeCheck: true,
    strict: true,
  },
  eslint: {},
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
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
    },
  },
  css: ["~/assets/css/main.css", "~/assets/css/tailwind.css"],
  tailwindcss: {
    exposeConfig: true,
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
