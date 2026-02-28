<script setup lang="ts">
type TocLink = {
  children?: TocLink[]
  depth?: number
  id: string
  text: string
}

const { data: page } = await useAsyncData("about-page", () => {
  return queryCollection("misc").path("/misc/about").first()
})

const tocLinks = computed(() => {
  return (
    (page.value as { body?: { toc?: { links?: TocLink[] } } } | null)?.body?.toc
      ?.links ?? []
  )
})

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

const getAge = () => {
  const today = new Date()
  const birthMonth = 4
  const birthDay = 25

  let age = today.getUTCFullYear() - 2006
  const hasHadBirthday =
    today.getUTCMonth() > birthMonth ||
    (today.getUTCMonth() === birthMonth && today.getUTCDate() >= birthDay)

  if (!hasHadBirthday) {
    age -= 1
  }

  return age
}
</script>

<template>
  <ContentLayoutWrapper
    content-class="!py-0"
    wrapper-class="!p-0 sm:!p-0 lg:!p-0 mb-32"
  >
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
          <span>Last revised on 28 February 2026</span>
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
            class="bg-muted text-foreground rounded-sm border px-2 py-1 font-medium"
          >
            Biography
          </span>
          <span>Independent entry</span>
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
                src="/images/dino_kupinic.png"
                alt="Portrait of Dino Kupinic"
                width="1536"
                height="1920"
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
                    <span class="block">May 25, 2006 (age {{ getAge() }})</span>
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
                  <dd class="text-foreground leading-6">Software Engineer</dd>
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
