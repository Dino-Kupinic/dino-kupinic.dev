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
  <Card class="flex h-[300px] flex-col sm:h-auto">
    <CardHeader
      class="flex-auto items-center justify-center object-cover p-2 pb-1 sm:p-3 sm:pb-2"
    >
      <BlogItemHeader />
    </CardHeader>
    <CardContent class="flex-none px-3 py-0 sm:px-3">
      <BlogItemTitle>
        <p class="line-clamp-2">
          {{ title }}
        </p>
      </BlogItemTitle>
      <div class="mt-1 flex space-x-3">
        <BlogLikes>{{ likes }}</BlogLikes>
        <BlogViews>{{ views }}</BlogViews>
      </div>
    </CardContent>
    <CardFooter class="mt-4 p-2 pt-1 sm:p-3 sm:pt-1.5">
      <div class="flex w-full justify-between space-x-3">
        <BlogItemAuthor>{{ author }}</BlogItemAuthor>
        <BlogItemDate>{{ date.toLocaleDateString() }}</BlogItemDate>
      </div>
    </CardFooter>
  </Card>
</template>

<style scoped></style>
