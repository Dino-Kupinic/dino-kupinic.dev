<script setup lang="ts">
import type { Author } from "~/schemas/blogSchema"

defineProps<{
  title: string
  to: string
  authors: Author[]
}>()
</script>

<template>
  <NuxtLink :to>
    <div
      class="hover:bg-accent flex h-auto w-full flex-col space-y-2 rounded-lg border p-3"
    >
      <p class="line-clamp-2 text-sm font-medium">{{ title }}</p>
      <BlogItemAuthor :authors="authors" />
    </div>
  </NuxtLink>
</template>
