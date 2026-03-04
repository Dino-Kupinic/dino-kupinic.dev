<script setup lang="ts">
const { data } = await useFetch("/api/products")

const hasProducts = computed(
  () => Array.isArray(data.value) && data.value.length > 0,
)
</script>

<template>
  <GenericLayoutWrapper>
    <header class="mt-8 flex w-full flex-col gap-6 py-8 sm:mt-16">
      <PageTitle>Shop</PageTitle>
      <ShopSubtitleMarquee />
    </header>

    <main class="mb-32 sm:mb-64">
      <!-- @vue-ignore: TODO: for now it's fine that we don't map type explicitely -->
      <ProductCatalog v-if="hasProducts" :products="data" />
      <section v-else>
        <div
          class="border-border/80 bg-card/80 relative isolate overflow-hidden rounded-lg border p-6 sm:p-10"
        >
          <div
            class="relative mx-auto flex min-h-72 max-w-2xl flex-col items-center justify-center gap-5 text-center"
          >
            <div
              class="border-border/80 bg-background/90 flex size-16 items-center justify-center rounded-xl border"
            >
              <Icon
                name="i-heroicons-shopping-cart"
                size="32"
                class="text-foreground/80"
              />
            </div>

            <h2
              class="font-heading text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              No products right now
            </h2>
            <p
              class="text-muted-foreground max-w-lg text-sm leading-relaxed sm:text-base"
            >
              Check back soon, I'm working on adding some cool stuff here! In
              the meantime, feel free to explore my projects or get in touch if
              you're interested in collaborating.
            </p>

            <div
              class="flex w-full flex-col justify-center gap-3 pt-2 sm:w-auto sm:flex-row"
            >
              <Button as-child class="sm:min-w-46">
                <NuxtLink to="/"> Back to home </NuxtLink>
              </Button>
              <Button as-child variant="outline" class="sm:min-w-40">
                <NuxtLink to="/projects">Explore projects</NuxtLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </GenericLayoutWrapper>
</template>
