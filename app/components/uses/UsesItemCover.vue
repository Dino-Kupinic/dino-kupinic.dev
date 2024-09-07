<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
}>()
</script>

<template>
  <Card class="hover:bg-accent">
    <div class="flex h-full flex-col gap-3 p-5">
      <CardHeader class="p-0">
        <CardTitle>{{ title }}</CardTitle>
        <CardDescription>{{ description }}</CardDescription>
      </CardHeader>
      <div
        class="flex h-64 w-64 w-full grow items-center justify-center bg-gradient-to-t from-background to-accent dark:to-muted"
      >
        <NuxtImg :src="image" class="max-h-full max-w-full object-contain" />
      </div>
    </div>
  </Card>
</template>
