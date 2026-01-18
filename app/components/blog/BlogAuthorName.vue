<script setup lang="ts">
defineProps<{
  name: string
  handle: string
}>()
</script>

<template>
  <div>
    <p class="text-foreground text-left leading-5">{{ name }}</p>
    <p
      class="dark:text-secondary text-left text-sm font-normal text-neutral-400"
    >
      {{ handle }}
    </p>
  </div>
</template>
