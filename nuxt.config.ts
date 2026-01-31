// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
import Sonda from "sonda/nuxt"

export const SITE_URL = "https://www.dino-kupinic.dev"
export const SITE_NAME = "Dino Kupinic"
export const SITE_DESCRIPTION =
  "Dino Kupinic is a personal portfolio website designed to showcase the " +
  "professional work and personal information of Dino Kupinic."
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/blog/bun_blog_dark.png` // TODO: change to a custom og image

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  site: {
    url: SITE_URL,
    name: SITE_NAME,
  },

  schemaOrg: {
    identity: {
      type: "Person",
      name: "Dino Kupinic",
      image: "public/images/dino_kupinic.png",
      sameAs: [
        "https://x.com/DinoKupinic",
        "https://github.com/Dino-Kupinic",
        SITE_URL,
      ],
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: SITE_URL,
      siteName: SITE_NAME,
      siteDescription: SITE_DESCRIPTION,
      siteOgImage: DEFAULT_OG_IMAGE,
    },
  },

  routeRules: {
    "/": { prerender: true },
    "/about": { prerender: true },
    "/uses": { prerender: true },
    "/project/**": { isr: true },
    "/blogs/**": { isr: true },
    "/api/**": { cors: true },
  },

  sourcemap: {
    client: true,
    server: true,
  },

  sitemap: {
    zeroRuntime: true,
  },

  llms: {
    domain: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    full: {
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
    },
  },

  studio: {
    repository: {
      provider: "github",
      owner: "Dino-Kupinic",
      repo: "dino-kupinic.dev",
      branch: "main",
    },
    i18n: {
      defaultLocale: "en",
    },
  },

  // TODO: enable when Bun runtime is supported properly by @nuxt/content
  // nitro: {
  //   vercel: {
  //     functions: {
  //       runtime: "bun1.x",
  //     },
  //   },
  // },

  css: ["~/assets/css/tailwind.css"],

  a11y: {
    logIssues: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  modules: [
    Sonda({
      server: true,
      open: false,
    }),
    "@nuxt/eslint",
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxt/fonts",
    "@nuxt/scripts",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxtjs/device",
    "shadcn-nuxt",
    "nuxt-llms",
    "nuxt-studio",
    "@nuxt/a11y",
    "motion-v/nuxt",
    // "@nuxt/hints", TODO: enable when you can configure it properly
  ],

  fonts: {
    defaults: {
      weights: [400],
      styles: ["normal", "italic"],
    },
    families: [
      {
        name: "Commit Mono",
        provider: "fontsource",
        fallbacks: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      {
        name: "Raveo Display",
        provider: "local",
        weights: [300, 400, 500, 600, 700],
        fallbacks: [
          "-apple-system",
          "system-ui",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Arial",
          "sans-serif",
        ],
      },
    ],
  },

  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },

  typescript: {
    typeCheck: true,
  },
})
