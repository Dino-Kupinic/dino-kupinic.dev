<script setup lang="ts">
const { data } = useFetch("/api/products")
</script>

<template>
  <GenericLayoutWrapper>
    <header class="mt-8 flex w-full flex-col gap-4 py-5 sm:mt-16">
      <PageTitle>Shop</PageTitle>
      <ShopSubtitleMarquee />
    </header>

    <ProductCatalog :products="data" />
  </GenericLayoutWrapper>
</template>
