<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>

<template>
  <NuxtLink
    :to
    class="bg-card text-card-foreground rounded-lg border shadow-sm"
  >
    <slot />
  </NuxtLink>
</template>
