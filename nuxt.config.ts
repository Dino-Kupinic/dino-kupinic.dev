// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export const SITE_URL = "https://www.dino-kupinic.dev"
export const SITE_NAME = "Dino Kupinic"
export const SITE_DESCRIPTION =
  "Dino Kupinic is a personal portfolio website designed to showcase the " +
  "professional work and personal information of Dino Kupinic."

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  site: {
    url: SITE_URL,
    name: SITE_NAME,
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
      repo: "dinokupinic",
      branch: "main",
    },
    i18n: {
      defaultLocale: "en",
    },
  },

  css: ["~/assets/css/tailwind.css"],

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
    "shadcn-nuxt",
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
    "nuxt-llms",
    "nuxt-studio",
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
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
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
