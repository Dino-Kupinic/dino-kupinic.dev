<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
}>()
</script>

<template>
  <Card
    class="hover:bg-accent bg-neutral-50 bg-linear-180 to-neutral-100 p-0 dark:bg-neutral-900 dark:to-neutral-950"
  >
    <div class="flex h-full flex-col justify-between gap-3 p-5">
      <CardHeader class="p-0">
        <CardTitle class="text-xl tracking-tighter">{{ title }}</CardTitle>
        <CardDescription>{{ description }}</CardDescription>
      </CardHeader>
      <div class="flex h-40 w-full items-center justify-center">
        <NuxtImg
          :src="image"
          :width="160"
          :height="160"
          class="max-h-full max-w-full object-contain"
        />
      </div>
    </div>
  </Card>
</template>
