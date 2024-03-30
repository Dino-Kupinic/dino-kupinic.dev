<script setup lang="ts">
defineProps<{
  color: "red" | "orange" | "yellow" | "green" | "blue" | "purple"
}>()
</script>

<template>
  <h3 class="text-2xl font-bold leading-6 text-red-700 sm:text-xl sm:leading-5">
    <slot />
  </h3>
</template>
