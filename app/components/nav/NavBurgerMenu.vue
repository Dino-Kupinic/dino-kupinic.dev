<script setup lang="ts">
defineProps<{
  open: boolean
}>()
</script>

<template>
  <Button variant="outline" size="icon" aria-label="Burger Menu">
    <Icon v-if="!open" name="i-heroicons-bars-3-16-solid" class="h-6 w-6" />
    <Icon v-else name="i-heroicons-x-mark-solid" class="h-6 w-6" />
  </Button>
</template>
