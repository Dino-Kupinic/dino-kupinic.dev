<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
}>()

const img = useImage()
</script>

<template>
  <Card class="hover:bg-accent">
    <div class="flex h-full flex-col justify-between gap-3 p-5">
      <CardHeader class="p-0">
        <CardTitle class="text-xl tracking-tighter">{{ title }}</CardTitle>
        <CardDescription>{{ description }}</CardDescription>
      </CardHeader>
      <div class="flex h-40 w-full items-center justify-center">
        <NuxtImg
          :src="image"
          class="max-h-full max-w-full object-contain"
          :placeholder="img(image, { h: 300, f: 'png', blur: 2, q: 50 })"
        />
      </div>
    </div>
  </Card>
</template>
