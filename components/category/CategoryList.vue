<script setup lang="ts">
import type { Category } from "~/types/category"

const route = useRoute()
const categories = useState<Category[] | null>("categories", () => null)

const isCurrentCategory = (categoryText: string) => {
  return route.params.text === categoryText.toLowerCase()
}
</script>

<template>
  <ul class="flex grow gap-8">
    <li v-for="category in categories" :key="category.id">
      <CategoryFilter
        :to="generateBlogLinks(category)"
        :class="{
          'text-neutral-900': isCurrentCategory(category.text),
          active: isCurrentCategory(category.text),
        }"
        class="relative h-auto font-normal text-neutral-600 hover:text-primary dark:text-foreground"
      >
        <span
          v-if="isCurrentCategory(category.text)"
          class="before:absolute before:inset-0 before:h-[2px] before:w-full before:translate-y-10 before:bg-foreground before:content-['']"
        ></span>
        {{ category.text }}
      </CategoryFilter>
    </li>
  </ul>
</template>

<style scoped></style>
