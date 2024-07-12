<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>

<template>
  <NuxtLink :to>
    <slot />
  </NuxtLink>
</template>

<style scoped></style>
