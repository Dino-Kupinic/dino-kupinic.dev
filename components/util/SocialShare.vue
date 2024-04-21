<script setup lang="ts">
defineProps<{
  icon: string
  to: string
}>()
</script>

<template>
  <NuxtLink :to target="_blank">
    <Button variant="outline" size="icon">
      <Icon :name="icon" />
    </Button>
  </NuxtLink>
</template>
