<script setup lang="ts">
defineProps<{
  title: string
  to: string
}>()
</script>

<template>
  <NuxtLink :to>
    <div
      class="flex h-auto w-full flex-col space-y-2 rounded-lg border p-3 hover:bg-accent"
    >
      <p class="line-clamp-2 text-sm font-semibold">{{ title }}</p>
      <BlogItemAuthor avatar-src="" />
    </div>
  </NuxtLink>
</template>
