<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>

<template>
  <div class="flex h-auto items-center space-x-2 font-medium">
    <Icon :name="icon" />
    <h3 class="truncate">
      <slot />
    </h3>
  </div>
</template>

<style scoped></style>
