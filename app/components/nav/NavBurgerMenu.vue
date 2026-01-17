<script setup lang="ts">
defineProps<{
  open: boolean
}>()
</script>

<template>
  <Button variant="outline" size="icon" aria-label="Burger Menu">
    <Icon
      :name="open ? 'i-heroicons-x-mark-solid' : 'i-heroicons-bars-3-16-solid'"
      size="20"
    />
  </Button>
</template>
