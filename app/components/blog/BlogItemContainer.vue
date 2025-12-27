<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>

<template>
  <NuxtLink
    :to
    class="rounded-lg border bg-card text-card-foreground shadow-sm"
  >
    <slot />
  </NuxtLink>
</template>
