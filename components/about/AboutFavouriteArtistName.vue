<script setup lang="ts">
defineProps<{
  color: "red" | "orange" | "yellow" | "green" | "blue" | "pink" | "purple"
}>()
</script>

<template>
  <div
    class="flex h-10 w-full items-center rounded-lg bg-gradient-to-r from-background to-red-800 pl-2 dark:from-15%"
  >
    <span class="text-red-500">
      <slot />
    </span>
  </div>
</template>
