<script setup lang="ts">
const { data } = await useFetch("/api/products")
</script>

<template>
  <GenericLayoutWrapper>
    <header class="mt-8 flex w-full flex-col gap-4 py-5 sm:mt-16">
      <PageTitle>Shop</PageTitle>
      <ShopSubtitleMarquee />
    </header>

    <main class="mb-32 sm:mb-64">
      <!-- @vue-ignore: TODO: for now it's fine that we don't map type explicitely -->
      <ProductCatalog v-if="data && data.length !== 0" :products="data" />
      <div v-else>
        <div
          class="border-muted flex h-48 w-full items-center justify-center rounded-md border"
        >
          <div class="flex flex-col items-center gap-2">
            <Icon
              name="i-heroicons-shopping-bag"
              size="32"
              class="text-foreground/70"
            />
            <p class="text-foreground/70 text-sm">No products available.</p>
          </div>
        </div>
      </div>
    </main>
  </GenericLayoutWrapper>
</template>
