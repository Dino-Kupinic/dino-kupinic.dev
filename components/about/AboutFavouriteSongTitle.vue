<script setup lang="ts">
defineProps<{
  color: "red" | "orange" | "yellow" | "green" | "blue" | "purple"
}>()
</script>

<template>
  <h3 class="text-xl font-bold leading-5 text-red-700">
    <slot />
  </h3>
</template>
