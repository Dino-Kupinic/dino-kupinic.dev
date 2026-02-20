// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
import Sonda from "sonda/nuxt"

export const SITE_URL = "https://www.dino-kupinic.dev"
export const SITE_NAME = "Dino Kupinic"
export const SITE_DESCRIPTION =
  "Dino Kupinic is a personal portfolio website designed to showcase the " +
  "professional work and personal information of Dino Kupinic."
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/default_og_image.png`

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
      image: "/images/dino_kupinic.png",
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
    "/feed.xml": { prerender: true },
    "/feed.atom": { prerender: true },
    "/feed.json": { prerender: true },
    "/api/**": { cors: true },
  },

  app: {
    head: {
      link: [
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: `${SITE_NAME} RSS Feed`,
          href: `${SITE_URL}/feed.xml`,
        },
        {
          rel: "alternate",
          type: "application/atom+xml",
          title: `${SITE_NAME} Atom Feed`,
          href: `${SITE_URL}/feed.atom`,
        },
        {
          rel: "alternate",
          type: "application/feed+json",
          title: `${SITE_NAME} JSON Feed`,
          href: `${SITE_URL}/feed.json`,
        },
      ],
    },
  },

  feedme: {
    defaults: {
      common: false,
      routes: false,
    },
    feeds: {
      common: {
        feed: {
          id: SITE_URL,
          link: SITE_URL,
          title: SITE_NAME,
          description: SITE_DESCRIPTION,
          language: "en",
          favicon: `${SITE_URL}/favicon.ico`,
        },
        collections: ["blogs"],
        fixDateFields: true,
        mapping: [
          ["id", "path"],
          ["link", "path"],
          ["title", "title"],
          ["description", "description"],
          ["date", "date"],
        ],
        replace: [[/^(?=\/)/.toString(), SITE_URL]],
      },
      routes: {
        "/feed.xml": { type: "rss2" },
        "/feed.atom": { type: "atom1" },
        "/feed.json": { type: "json1" },
      },
    },
  },

  content: {
    renderer: {
      anchorLinks: {
        h2: true,
        h3: true,
        h4: true,
      },
    },
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
    axe: {
      options: {
        rules: [
          { id: "color-contrast", enabled: false },
          { id: "color-contrast-enhanced", enabled: false },
        ],
      },
      runOptions: {
        runOnly: ["wcag2a", "wcag2aa"],
      },
    },
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
    "nuxt-feedme",
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
    "@polar-sh/nuxt",
    // "@nuxt/hints", TODO: enable when you can configure it properly
  ],

  fonts: {
    provider: "local",
    defaults: {
      weights: [400, 700],
      styles: ["normal", "italic"],
    },
    families: [
      {
        name: "Commit Mono",
        provider: "local",
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
        name: "Raveo",
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
