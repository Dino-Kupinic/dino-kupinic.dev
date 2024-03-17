<script setup lang="ts">
defineProps<{
  open: boolean
}>()
</script>

<template>
  <Button variant="outline" size="icon">
    <Icon v-if="!open" name="i-heroicons-bars-3-16-solid" class="w-6 h-6"/>
    <Icon v-else name="i-heroicons-x-mark-solid" class="w-6 h-6"/>
  </Button>
</template>
