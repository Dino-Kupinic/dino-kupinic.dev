<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
}>()

const img = useImage()
</script>

<template>
  <Card>
    <div class="flex h-full flex-col gap-3 p-5">
      <CardHeader class="p-0">
        <CardTitle class="tracking-tighter">{{ title }}</CardTitle>
        <CardDescription>{{ description }}</CardDescription>
      </CardHeader>
      <div
        class="flex h-64 w-full grow items-center justify-center bg-gradient-to-t from-background to-accent dark:to-muted"
      >
        <NuxtImg
          :src="image"
          class="max-h-full max-w-full object-contain"
          :placeholder="img(image, { h: 500, f: 'png', blur: 2, q: 50 })"
        />
      </div>
    </div>
  </Card>
</template>
