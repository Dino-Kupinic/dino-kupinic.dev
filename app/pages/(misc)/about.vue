<script setup lang="ts">
type TocLink = {
  depth?: number
  id: string
  text: string
}

const { data: page } = await useAsyncData("about-page", () => {
  return queryCollection("misc").path("/misc/about").first()
})

const tocLinks = computed(() => {
  const links = (
    page.value as { body?: { toc?: { links?: TocLink[] } } } | null
  )?.body?.toc?.links

  if (!Array.isArray(links)) {
    return []
  }

  return links.filter((link) => (link.depth ?? 2) <= 2)
})

const profileFacts = [
  { label: "Based in", value: "Austria" },
  { label: "Occupation", value: "Software Engineer" },
  { label: "Focus", value: "Full-stack apps, ML, LLMs" },
  {
    label: "Primary stack",
    value: "React, Next.js, TypeScript, Tailwind CSS",
  },
]
</script>

<template>
  <ContentLayoutWrapper class="px-0">
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
            Austrian software engineer building modern web products, exploring
            machine learning, and documenting the process through projects and
            writing.
          </p>
        </div>

        <div class="text-muted-foreground flex items-center gap-3 text-sm">
          <span
            class="bg-muted text-foreground rounded-sm border px-2 py-1 font-medium"
          >
            Biography
          </span>
          <span>Last revised on 28 February 2026</span>
        </div>
      </div>
    </section>

    <div v-if="page" class="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
      <article
        class="bg-card order-2 overflow-hidden rounded-lg border lg:order-1"
      >
        <div
          class="text-muted-foreground flex flex-wrap items-center gap-2 border-b px-4 py-3 text-sm sm:px-5"
        >
          <span
            class="bg-muted text-foreground rounded-sm border px-2 py-1 font-medium"
          >
            Biography
          </span>
          <span>Independent entry</span>
        </div>

        <div class="p-4 sm:p-5">
          <p
            class="text-muted-foreground border-border border-l-2 pl-3 text-sm leading-6"
          >
            This page presents a compact overview of Dino Kupinic&apos;s
            background, current areas of interest, and the technologies behind
            this website.
          </p>

          <ContentRenderer :value="page" />
        </div>
      </article>

      <aside class="order-1 lg:order-2">
        <div class="space-y-4 lg:sticky lg:top-24">
          <section class="bg-card overflow-hidden rounded-lg border">
            <div class="border-b px-4 py-3">
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
                class="aspect-[4/5] w-full rounded-md border object-cover"
                src="/images/dino_kupinic.png"
                alt="Portrait of Dino Kupinic"
                width="768"
                height="960"
                sizes="(max-width: 1024px) 100vw, 320px"
              />
              <p
                class="text-muted-foreground mt-2 text-center text-xs leading-5"
              >
                Portrait of Dino Kupinic
              </p>

              <dl class="mt-4 text-sm">
                <div
                  v-for="fact in profileFacts"
                  :key="fact.label"
                  class="grid grid-cols-[88px_1fr] gap-3 border-t py-2"
                >
                  <dt class="text-muted-foreground font-medium">
                    {{ fact.label }}
                  </dt>
                  <dd class="text-foreground">
                    {{ fact.value }}
                  </dd>
                </div>
              </dl>
            </div>
          </section>

          <section v-if="tocLinks.length" class="bg-card rounded-lg border p-4">
            <h2
              class="font-heading text-foreground text-lg font-semibold tracking-tight"
            >
              Contents
            </h2>

            <nav class="mt-3 space-y-1">
              <a
                v-for="link in tocLinks"
                :key="link.id"
                :href="`#${link.id}`"
                class="text-muted-foreground hover:text-foreground hover:bg-muted block rounded-sm px-2.5 py-1.5 text-sm leading-6 transition-colors"
              >
                {{ link.text }}
              </a>
            </nav>
          </section>

          <section class="bg-card rounded-lg border p-4">
            <h2
              class="font-heading text-foreground text-lg font-semibold tracking-tight"
            >
              Elsewhere
            </h2>

            <div class="mt-3 space-y-1.5">
              <NuxtLink
                to="/projects"
                class="text-foreground hover:bg-muted block rounded-sm border px-2.5 py-1.5 text-sm transition-colors"
              >
                Browse projects
              </NuxtLink>
              <NuxtLink
                to="/blog"
                class="text-foreground hover:bg-muted block rounded-sm border px-2.5 py-1.5 text-sm transition-colors"
              >
                Read blog posts
              </NuxtLink>
              <a
                href="https://github.com/Dino-Kupinic"
                target="_blank"
                rel="noreferrer"
                class="text-foreground hover:bg-muted block rounded-sm border px-2.5 py-1.5 text-sm transition-colors"
              >
                Visit GitHub
              </a>
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
