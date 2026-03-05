// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "node:url"
import tailwindcss from "@tailwindcss/vite"
import Sonda from "sonda/nuxt"

export const SITE_URL = "https://www.dino-kupinic.dev"
export const SITE_NAME = "Dino Kupinic"
export const SITE_DESCRIPTION =
  "Dino Kupinic is a personal portfolio website designed to showcase the " +
  "professional work and personal information of Dino Kupinic."
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/default_og_image.png`

const isDev = process.env.NODE_ENV !== "production"
const devProfile = process.env.NUXT_DEV_PROFILE === "full" ? "full" : "fast"
const isFastDev = isDev && devProfile === "fast"
const enableHeavyDevModules = isDev && devProfile === "full"

const shikiOnigurumaEngineShim = fileURLToPath(
  new URL("./app/utils/shiki-oniguruma-engine-shim.ts", import.meta.url),
)
const shikiWasmShim = fileURLToPath(
  new URL("./app/utils/shiki-wasm-shim.ts", import.meta.url),
)

const alwaysOnModules = [
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
  "motion-v/nuxt",
  "@polar-sh/nuxt",
]

const heavyDevModules = [
  Sonda({
    server: true,
    open: false,
  }),
  "nuxt-studio",
  "@nuxt/a11y",
]

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: !isFastDev },

  site: {
    url: SITE_URL,
    name: SITE_NAME,
  },

  schemaOrg: {
    identity: {
      type: "Person",
      name: "Dino Kupinic",
      image: "/images/dino-kupinic.jpg",
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
    mode: process.env.POLAR_MODE,
    accessToken: process.env.POLAR_ACCESS_TOKEN,
    polarSuccessUrl: process.env.POLAR_SUCCESS_URL,
    webhookSecret: process.env.POLAR_WEBHOOK_SECRET,
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
    // redirects
    "/project/peekaboo/": {
      redirect: {
        to: "/project/logscope",
        statusCode: 301,
      },
    },
    "/de-DE/**": {
      redirect: {
        to: "/",
        statusCode: 301,
      },
    },
  },

  // Remove the cookies page since we don't use it right now
  hooks: {
    "pages:extend"(pages) {
      const index = pages.findIndex((p) => p.name === "cookies")
      if (index !== -1) pages.splice(index, 1)
    },
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
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "github-light",
            dark: "github-dark",
          },
          langs: ["vue", "ts", "bash", "json", "yaml", "md"],
        },
      },
    },
    renderer: {
      anchorLinks: {
        h2: true,
        h3: true,
        h4: true,
      },
    },
  },

  icon: {
    provider: "none",
    serverBundle: false,
    clientBundle: {
      icons: [
        "codicon:issues",
        "codicon:terminal-bash",
        "heroicons:arrow-left",
        "heroicons:arrow-up-right",
        "heroicons:bars-3-16-solid",
        "heroicons:cake",
        "heroicons:check-circle",
        "heroicons:check-circle-solid",
        "heroicons:cloud",
        "heroicons:code-bracket",
        "heroicons:code-bracket-16-solid",
        "heroicons:document-text",
        "heroicons:ellipsis-horizontal-solid",
        "heroicons:heart-solid",
        "heroicons:link-16-solid",
        "heroicons:magnifying-glass",
        "heroicons:map-pin",
        "heroicons:moon-16-solid",
        "heroicons:rss-solid",
        "heroicons:shopping-bag",
        "heroicons:shopping-cart",
        "heroicons:sparkles",
        "heroicons:star",
        "heroicons:star-solid",
        "heroicons:sun-16-solid",
        "heroicons:x-mark-solid",
        "ph:calendar",
        "ph:figma-logo",
        "ph:git-fork",
        "ph:link",
        "ph:music-notes",
        "ph:music-notes-simple-fill",
        "ph:quotes",
        "simple-icons:anthropic",
        "simple-icons:bun",
        "simple-icons:c",
        "simple-icons:cloudflare",
        "simple-icons:cplusplus",
        "simple-icons:css3",
        "simple-icons:docker",
        "simple-icons:drizzle",
        "simple-icons:express",
        "simple-icons:fastapi",
        "simple-icons:git",
        "simple-icons:github",
        "simple-icons:go",
        "simple-icons:googleads",
        "simple-icons:hono",
        "simple-icons:html5",
        "simple-icons:instagram",
        "simple-icons:javascript",
        "simple-icons:linkedin",
        "simple-icons:markdown",
        "simple-icons:meta",
        "simple-icons:mysql",
        "simple-icons:nextdotjs",
        "simple-icons:nginx",
        "simple-icons:nodedotjs",
        "simple-icons:numpy",
        "simple-icons:nuxtdotjs",
        "simple-icons:openai",
        "simple-icons:php",
        "simple-icons:pm2",
        "simple-icons:postgresql",
        "simple-icons:prisma",
        "simple-icons:pwa",
        "simple-icons:python",
        "simple-icons:react",
        "simple-icons:reactrouter",
        "simple-icons:spring",
        "simple-icons:sqlite",
        "simple-icons:supabase",
        "simple-icons:svelte",
        "simple-icons:swift",
        "simple-icons:symfony",
        "simple-icons:tailwindcss",
        "simple-icons:typescript",
        "simple-icons:vercel",
        "simple-icons:vite",
        "simple-icons:vitest",
        "simple-icons:vuedotjs",
        "simple-icons:n8n",
        "simple-icons:cloudflare",
        "simple-icons:amazonwebservices",
        "simple-icons:googlesearchconsole",
        "simple-icons:ollama",
        "simple-icons:vercel",
        "simple-icons:coolify",
        "simple-icons:astro",
        "simple-icons:x",
        "simple-icons:youtube",
        "simple-icons:markdown",
        "solar:arrow-right-up-linear",
        "ant-design:java-outlined",
      ],
      sizeLimitKb: 0,
    },
  },

  image: {
    provider: "vercel",
    screens: {
      "img-item": 160,
      "img-item-2x": 320,
      "img-cover": 512,
      "book-w": 800,
      "book-h": 1200,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
      desktop: 1600,
      song: 1200,
      "song-2x": 2400,
    },
  },

  sourcemap: {
    client: isDev && !isFastDev,
    server: isDev && !isFastDev,
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

  ...(enableHeavyDevModules
    ? {
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
      }
    : {}),

  // TODO: enable when Bun runtime is supported properly by @nuxt/content
  // nitro: {
  //   vercel: {
  //     functions: {
  //       runtime: "bun1.x",
  //     },
  //   },
  // },
  nitro: {
    alias: {
      "shiki/engine/oniguruma": shikiOnigurumaEngineShim,
      "shiki/wasm": shikiWasmShim,
      "shiki/dist/onig.wasm": shikiWasmShim,
    },
    experimental: {
      wasm: false,
    },
  },

  css: ["~/assets/css/tailwind.css"],

  ...(enableHeavyDevModules
    ? {
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
      }
    : {}),

  vite: {
    resolve: {
      alias: {
        "shiki/engine/oniguruma": shikiOnigurumaEngineShim,
        "shiki/wasm": shikiWasmShim,
        "shiki/dist/onig.wasm": shikiWasmShim,
      },
    },
    plugins: [tailwindcss()],
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  modules: [
    ...alwaysOnModules,
    ...(enableHeavyDevModules ? heavyDevModules : []),
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
    typeCheck: !isFastDev,
  },
})
