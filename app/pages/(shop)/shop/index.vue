<script setup lang="ts">
const { data } = useFetch("/api/products")

console.log(data.value)
</script>

<template>
  <GenericLayoutWrapper>
    <header class="mt-8 flex w-full flex-col gap-4 py-5 sm:mt-16">
      <PageTitle>Shop</PageTitle>
      <ShopSubtitleMarquee />
    </header>

    <ProductCatalog class="mb-32" :products="data" />
  </GenericLayoutWrapper>
</template>
