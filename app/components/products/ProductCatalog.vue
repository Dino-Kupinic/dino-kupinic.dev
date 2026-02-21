<script setup lang="ts">
type Product = {
  id: string
  name: string
  description?: string | null
  images?: Array<{ url?: string | null }>
  medias?: Array<{ publicUrl?: string | null }>
  prices?: Array<{ priceAmount?: number | null }>
}

defineProps<{
  products?: Product[] | null
}>()
</script>

<template>
  <div
    class="mt-3 mb-32 grid h-auto auto-rows-fr grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5"
  >
    <ProductCard
      v-for="product in products ?? []"
      :key="product.id"
      :name="product.name"
      :description="product.description"
      :image="product.medias?.[0]?.publicUrl || product.images?.[0]?.url"
      :price-amount="product.prices?.[0]?.priceAmount"
    />
  </div>
</template>

<style scoped></style>
