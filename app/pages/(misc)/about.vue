<script setup lang="ts">
import { toast } from "vue-sonner"

type TocLink = {
  children?: TocLink[]
  depth?: number
  id: string
  text: string
}

type SidebarAiLink = {
  icon: string
  text: string
  to: string
}

type BookRecommendation = {
  image?: string
  title: string
}

const route = useRoute()
const { siteUrl } = useSiteRuntimeConfig()

const { data: page } = await useAsyncData("about-page", () => {
  return queryCollection("misc").path("/misc/about").first()
})

const canonicalUrl = new URL(route.path, siteUrl).toString()

const tocLinks = computed(() => {
  return (
    (page.value as { body?: { toc?: { links?: TocLink[] } } } | null)?.body?.toc
      ?.links ?? []
  )
})

const sidebarAiLinks: SidebarAiLink[] = [
  {
    icon: "i-simple-icons-openai",
    text: "ChatGPT",
    to: `https://chatgpt.com/?q=${encodeURIComponent(canonicalUrl)}`,
  },
  {
    icon: "i-simple-icons-anthropic",
    text: "Claude",
    to: `https://claude.ai/new?q=${encodeURIComponent(canonicalUrl)}`,
  },
]

const aboutMarkdown = page.value?.rawbody

const { copy, copied, isSupported } = useClipboard({
  source: aboutMarkdown,
  legacy: true,
})

const bookRecommendations: BookRecommendation[] = [
  {
    title: "Zero to One",
    image: "/images/books/zero-to-one.webp",
  },
  {
    title: "The Pragmatic Programmer",
    image: "/images/books/pragmatic-prog.jpg",
  },
  {
    title: "The Hard Thing About Hard Things",
    image: "/images/books/hard-things.jpg",
  },
  {
    title: "The Almanack of Naval Ravikant",
    image: "/images/books/almanack.jpg",
  },
  {
    title: "Designing Data-Intensive Applications",
    image: "/images/books/ddia.jpeg",
  },
]

const scrollToHeading = (event: MouseEvent, id: string) => {
  const target = document.getElementById(id)
  if (!target) return

  event.preventDefault()
  history.replaceState(null, "", `#${id}`)

  target.scrollIntoView({
    behavior: "smooth",
    block: "center",
  })
}

const age = getAge()

async function copyMarkdown() {
  if (!isSupported.value) {
    toast.error("Clipboard is not available in this environment.", {
      position: "bottom-right",
    })
    return
  }

  try {
    await copy(aboutMarkdown)

    if (!copied.value) {
      toast.error("Could not copy markdown.", {
        position: "bottom-right",
      })
      return
    }

    toast.success("Copied markdown to clipboard", {
      position: "bottom-right",
    })
  } catch {
    toast.error("Could not copy markdown.", {
      position: "bottom-right",
    })
  }
}
</script>

<template>
  <ContentLayoutWrapper content-class="!py-0 mb-16 sm:mb-64">
    <section class="border-border mt-8 border-b pb-6 sm:mt-16 sm:pb-8">
      <p
        class="text-muted-foreground font-mono text-sm font-medium tracking-tight uppercase"
      >
        Personal encyclopedia entry
      </p>
      <div
        class="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
      >
        <div class="max-w-3xl">
          <PageTitle>Dino Kupinic</PageTitle>
          <p
            class="text-muted-foreground mt-3 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7"
          >
            Austrian software engineer and aspriring entrepenuer building modern
            web products, exploring AI, and documenting the process through
            projects and writing.
          </p>
        </div>
      </div>
    </section>

    <div v-if="page" class="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
      <article
        class="bg-background order-2 overflow-hidden rounded-lg border lg:order-1"
      >
        <div
          class="text-muted-foreground dark:bg-background flex flex-wrap items-center gap-2 border-b px-4 py-3 text-sm sm:px-5"
        >
          <span
            class="rounded-lg bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900 dark:text-green-100"
          >
            Biography
          </span>
        </div>

        <div class="p-4 sm:p-5">
          <section
            v-if="tocLinks.length"
            class="bg-card dark:bg-background mb-5 rounded-lg border p-4"
          >
            <h2
              class="font-heading text-foreground text-lg font-semibold tracking-tight"
            >
              Contents
            </h2>

            <nav class="mt-3 space-y-1">
              <div v-for="link in tocLinks" :key="link.id">
                <a
                  :href="`#${link.id}`"
                  class="text-muted-foreground hover:text-foreground hover:bg-muted block rounded-sm px-2.5 text-sm leading-6 transition-colors"
                  @click.prevent="(event) => scrollToHeading(event, link.id)"
                >
                  {{ link.text }}
                </a>

                <div v-if="link.children?.length" class="mt-1 space-y-1">
                  <a
                    v-for="child in link.children"
                    :key="child.id"
                    :href="`#${child.id}`"
                    class="text-muted-foreground hover:text-foreground hover:bg-muted block rounded-sm px-2.5 pl-5 text-sm leading-6 transition-colors"
                    @click.prevent="(event) => scrollToHeading(event, child.id)"
                  >
                    {{ child.text }}
                  </a>
                </div>
              </div>
            </nav>
          </section>

          <ContentRenderer :value="page" />

          <section class="mt-8 border-t pt-6">
            <h2 class="font-heading text-foreground text-2xl font-semibold">
              Book Recommendations
            </h2>
            <p class="text-muted-foreground mt-2 text-sm leading-6">
              I recommend these books to anyone interested in software
              engineering, startups, or personal growth.
            </p>

            <div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <article
                v-for="book in bookRecommendations"
                :key="book.title"
                class="bg-card overflow-hidden rounded-lg border"
              >
                <div class="border-b p-3">
                  <NuxtImg
                    v-if="book.image"
                    :src="book.image"
                    :alt="book.title"
                    class="aspect-3/4 w-full rounded-md object-cover"
                    width="800"
                    height="1200"
                  />
                  <div
                    v-else
                    class="bg-muted text-muted-foreground flex aspect-3/4 w-full items-center justify-center rounded-md border border-dashed text-xs font-medium uppercase"
                  >
                    Book cover
                  </div>
                </div>

                <div class="p-3">
                  <p class="text-foreground text-sm font-medium">
                    {{ book.title }}
                  </p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </article>

      <aside class="order-1 lg:order-2">
        <div class="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            class="col-span-2 w-full justify-center gap-2"
            @click="copyMarkdown"
          >
            <Icon name="i-simple-icons-markdown" size="20" />
            <span>Copy markdown</span>
          </Button>

          <NuxtLink
            v-for="link in sidebarAiLinks"
            :key="link.text"
            :to="link.to"
            class="block min-w-0"
            external
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="outline"
              class="w-full min-w-0 justify-center gap-1.5 px-2"
            >
              <Icon :name="link.icon" size="20" />
              <span class="truncate text-xs sm:text-sm">{{ link.text }}</span>
              <Icon name="i-solar-arrow-right-up-linear" size="14" />
            </Button>
          </NuxtLink>
        </div>
        <div class="mt-2 space-y-4 lg:sticky lg:top-20">
          <section class="bg-card overflow-hidden rounded-lg border">
            <div class="dark:bg-background border-b px-4 py-3">
              <p
                class="text-muted-foreground font-mono text-xs font-medium tracking-tight uppercase"
              >
                Infobox
              </p>
              <h2
                class="font-heading text-foreground mt-1.5 text-xl font-semibold tracking-tight"
              >
                Dino Kupinic
              </h2>
            </div>

            <div class="p-4">
              <NuxtImg
                class="aspect-4/5 w-full rounded-md border object-cover"
                src="/images/dino-kupinic.jpg"
                alt="Portrait of Dino Kupinic"
                width="2304"
                height="3024"
                sizes="(max-width: 1024px) 100vw, 320px"
              />
              <p
                class="text-muted-foreground mt-2 text-center text-xs leading-5"
              >
                Portrait of Dino Kupinic
              </p>

              <dl class="mt-4 text-sm">
                <div class="grid grid-cols-[88px_1fr] gap-3 border-t py-2">
                  <dt class="text-muted-foreground font-medium">Born</dt>
                  <dd class="text-foreground leading-6">
                    <span class="block">Dino Kupinic</span>
                    <span class="block">May 25, 2006 (age {{ age }})</span>
                    <span class="block">
                      <NuxtLink
                        to="https://en.wikipedia.org/wiki/Steyr"
                        class="inline-flex items-center gap-1 text-blue-500 hover:text-blue-400"
                        external
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>Steyr</span>
                        <Icon name="i-solar-arrow-right-up-linear" size="14" />
                      </NuxtLink>
                      <span>, Upper Austria, Austria</span>
                    </span>
                  </dd>
                </div>

                <div class="grid grid-cols-[88px_1fr] gap-3 border-t py-2">
                  <dt class="text-muted-foreground font-medium">Occupation</dt>
                  <dd class="text-foreground leading-6">
                    Software Engineer, Founder
                  </dd>
                </div>

                <div class="grid grid-cols-[88px_1fr] gap-3 border-t py-2">
                  <dt class="text-muted-foreground font-medium">Education</dt>
                  <dd class="text-foreground leading-6">
                    <NuxtLink
                      to="https://www.htl-steyr.ac.at/"
                      class="inline-flex items-center gap-1 text-blue-500 hover:text-blue-400"
                      external
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>HTL Steyr</span>
                      <Icon name="i-solar-arrow-right-up-linear" size="14" />
                    </NuxtLink>
                    <span>, Self-taught</span>
                  </dd>
                </div>

                <div class="grid grid-cols-[88px_1fr] gap-3 border-t py-2">
                  <dt class="text-muted-foreground font-medium">Focus</dt>
                  <dd class="text-foreground leading-6">
                    Full-stack apps, Databases, DevOps, LLMs, Design
                  </dd>
                </div>
              </dl>

              <div class="mt-4 border-t pt-4 text-center">
                <p class="text-muted-foreground text-xs font-medium uppercase">
                  Signature
                </p>
                <NuxtImg
                  class="mx-auto mt-1 h-16 w-auto dark:bg-neutral-50"
                  src="/images/dino-kupinic-signature.png"
                  alt="Signature of Dino Kupinic"
                  width="640"
                  height="200"
                />
              </div>
            </div>
          </section>
        </div>
      </aside>
    </div>

    <section
      v-else
      class="bg-card text-muted-foreground mt-6 rounded-lg border border-dashed px-5 py-6 text-sm"
    >
      The article body is currently unavailable.
    </section>
  </ContentLayoutWrapper>
</template>
