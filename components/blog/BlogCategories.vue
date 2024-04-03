<script setup lang="ts">
import type { Category } from "~/types/category"

const categories = useState<Category[] | null>("categories", () => null)
const { pending } = await useLazyFetch("/api/v1/categories", {
  onResponse({ response }) {
    categories.value = response._data
  },
})

const viewport = useViewport()
</script>

<template>
  <div>
    <div v-if="pending">
      <p>Loading...</p>
    </div>
    <div v-else>
      <CategoryDrawer v-if="viewport.isLessThan('tablet')" />
      <CategoryList v-else />
    </div>
  </div>
</template>
