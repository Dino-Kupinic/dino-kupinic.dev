<script setup lang="ts">
defineProps<{
  title: string
  likes: number
  views: number
  date: Date
  author: string
}>()
</script>

<template>
  <Card class="h-auto">
    <CardHeader
      class="flex items-center justify-center p-2 pb-1 sm:p-3 sm:pb-2"
    >
    </CardHeader>
    <CardContent class="px-2 py-0 sm:px-3">
      <ProjectItemTitle>{{ title }}</ProjectItemTitle>
    </CardContent>
    <CardFooter class="p-2 pt-1 sm:p-3 sm:pt-1.5"> </CardFooter>
  </Card>
</template>

<style scoped></style>
