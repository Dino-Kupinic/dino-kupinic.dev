<script setup lang="ts">
defineProps<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: any
}>()
</script>

<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    <ProductCard
      v-for="product in products"
      :id="product.id"
      :key="product.id"
      :name="product.name"
      :description="product.description"
      :image="product.images?.[0]?.url"
      :price-amount="product.prices?.[0]?.priceAmount"
    />
  </div>
</template>

<style scoped></style>
