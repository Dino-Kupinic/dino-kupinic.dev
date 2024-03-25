<script setup lang="ts">
defineProps<{
  title: string
  likes: number
  views: number
  date: Date
  author: string
}>()
const img = useImage()
</script>

<template>
  <Card
    class="relative flex h-[220px] flex-col overflow-hidden after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-t after:from-black after:to-transparent after:transition-opacity after:duration-200 after:content-[''] sm:h-auto"
  >
    <NuxtImg
      class="absolute left-0 top-0 h-full w-full overflow-clip object-cover object-top"
      src="/images/gradientbg.jpg"
      alt="blog-background"
      :placeholder="
        img(`/images/gradientbg.jpg`, { h: 10, f: 'png', blur: 2, q: 50 })
      "
    />
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
      <CardFooter class="mt-4 p-0">
        <div class="flex w-full justify-between space-x-3">
          <BlogItemAuthor>{{ author }}</BlogItemAuthor>
          <BlogItemDate>{{ date.toLocaleDateString() }}</BlogItemDate>
        </div>
      </CardFooter>
    </div>
  </Card>
</template>

<style scoped></style>
