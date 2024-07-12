<script setup lang="ts">
import type { BlogAuthor } from "~/types/blog"

defineProps<{
  title: string
  to: string
  author: BlogAuthor[]
}>()
</script>

<template>
  <NuxtLink :to>
    <div
      class="flex h-auto w-full flex-col space-y-2 rounded-lg border p-3 hover:bg-accent"
    >
      <p class="line-clamp-2 text-sm font-medium">{{ title }}</p>
      <BlogItemAuthor :author="author" />
    </div>
  </NuxtLink>
</template>
