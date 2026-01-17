<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
}>()

const img = useImage()
</script>

<template>
  <Card class="p-0">
    <div class="flex h-full flex-col gap-3 p-5">
      <CardHeader class="p-0">
        <CardTitle class="tracking-tighter">{{ title }}</CardTitle>
        <CardDescription>{{ description }}</CardDescription>
      </CardHeader>
      <div
        class="from-background to-accent dark:to-muted flex h-64 w-full grow items-center justify-center bg-linear-to-t"
      >
        <NuxtImg :src="image" class="max-h-full max-w-full object-contain" />
      </div>
    </div>
  </Card>
</template>
