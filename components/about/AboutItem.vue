<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>

<template>
  <div class="flex flex-col rounded-lg border bg-background p-3">
    <AboutItemHeader :icon="icon">
      <slot name="header" />
    </AboutItemHeader>
    <div>
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped></style>
