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
  <Card>
    <CardHeader
      class="flex h-[50%] items-center justify-center p-2 pb-1 sm:p-3 sm:pb-2"
    >
      <BlogItemHeader />
    </CardHeader>
    <CardContent class="px-3 py-0 sm:px-3">
      <ProjectItemTitle>{{ title }}</ProjectItemTitle>
      <div class="flex space-x-3">
        <BlogLikes>1000</BlogLikes>
        <BlogViews>20000</BlogViews>
      </div>
    </CardContent>
    <CardFooter class="mt-4 p-2 pt-1 sm:p-3 sm:pt-1.5">
      <div class="flex w-full justify-between space-x-3">
        <BlogItemAuthor>Dino Kupinic</BlogItemAuthor>
        <BlogItemDate>2rd March 2023</BlogItemDate>
      </div>
    </CardFooter>
  </Card>
</template>

<style scoped></style>
