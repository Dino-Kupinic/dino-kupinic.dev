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
  experimental: {
    typedPages: true,
  },
  nitro: {
    imports: {
      dirs: ["./server/db/**"],
      imports: [{ from: "zod", name: "z" }],
    },
    experimental: {
      tasks: true,
    },
  },
  modules: [
    "@nuxthq/studio",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "@nuxtjs/device",
    "@nuxtjs/kinde",
    "nuxt-content-twoslash", // this needs to be before `@nuxt/content`
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
  content: {
    highlight: {
      theme: {
        default: "github-light",
        dark: "github-dark",
      },
    },
    markdown: {
      anchorLinks: {
        depth: 3,
        exclude: [1],
      },
    },
  },
  twoslash: {},
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "dark",
  },
  security: {
    // TODO: fix github icons not loading in prod
    headers: {
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
      contentSecurityPolicy: {
        "img-src": [
          "'self'",
          "data:",
          "https://github.com",
          "https://avatars.githubusercontent.com",
        ],
      },
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
