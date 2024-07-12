<script setup lang="ts">
defineProps<{
  name: string
  handle: string
}>()
</script>

<template>
  <div>
    <p class="text-left leading-5 text-foreground">{{ name }}</p>
    <p
      class="text-left text-sm font-normal text-neutral-400 dark:text-secondary"
    >
      {{ handle }}
    </p>
  </div>
</template>
