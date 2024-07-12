<script setup lang="ts">
defineProps<{
  technologies: string[]
}>()
</script>

<template>
  <div class="mt-4 flex flex-wrap gap-1 pr-4">
    <Badge
      v-for="technology in technologies"
      :key="technology"
      variant="outline"
    >
      {{ technology }}
    </Badge>
  </div>
</template>
