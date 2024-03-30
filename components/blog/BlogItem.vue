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
  <BlogItemContainer
    class="relative flex h-[200px] flex-col overflow-hidden after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-t after:from-white after:from-25% after:to-transparent after:transition-opacity after:duration-500 after:content-[''] after:hover:from-10% dark:after:from-black sm:h-auto"
  >
    <BlogItemBackground img-name="blog1" />
    <div class="z-10 flex h-full w-full flex-col justify-end p-4">
      <CardContent class="flex-none p-0">
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
      <CardFooter class="mt-2 p-0">
        <div class="flex w-full justify-between space-x-3">
          <BlogItemAuthor class="truncate">{{ author }}</BlogItemAuthor>
          <BlogItemDate>{{ date.toLocaleDateString() }}</BlogItemDate>
        </div>
      </CardFooter>
    </div>
  </BlogItemContainer>
</template>

<style scoped></style>
