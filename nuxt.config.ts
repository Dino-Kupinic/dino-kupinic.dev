import { currentLocales } from "./config/i18n"

export default defineNuxtConfig({
  compatibilityDate: "2024-07-07",
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

  $production: {
    scripts: {
      registry: {
        clarity: true,
      },
    },
  },

  runtimeConfig: {
    githubToken: "",
    public: {
      scripts: {
        clarity: {
          id: "",
        },
      },
    },
  },

  fonts: {
    defaults: {
      weights: [400],
      styles: ["normal", "italic"],
    },
    families: [{ name: "Inter", provider: "google" }],
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
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "@nuxtjs/device",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/scripts",
    "@vueuse/nuxt",
    "nuxt-icon",
    "nuxt-viewport",
    "shadcn-nuxt",
  ],

  typescript: {
    // typeCheck: true, TODO: Enable when fixed
    strict: true,
    tsConfig: {
      compilerOptions: {
        baseUrl: ".",
      },
    },
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

  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "dark",
  },

  css: ["~/assets/css/tailwind.css"],

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
