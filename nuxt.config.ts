import { currentLocales } from "./app/config/i18n"

export default defineNuxtConfig({
  compatibilityDate: "2024-07-07",

  future: {
    compatibilityVersion: 4,
  },

  site: {
    url: "https://www.dino-kupinic.dev",
    name: "Dino Kupinic",
  },

  linkChecker: {
    report: {
      html: true,
      markdown: true,
    },
  },

  devtools: {
    enabled: true,
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
    families: [
      { name: "Fira Code", provider: "google" },
      { name: "JetBrains Mono", provider: "google" },
    ],
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
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
    typeCheck: true,
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
      langs: [
        "vue",
        "java",
        "bash",
        "typescript",
        "javascript",
        "yaml",
        "wasm",
      ],
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
    componentDir: "./app/components/ui",
  },
})
