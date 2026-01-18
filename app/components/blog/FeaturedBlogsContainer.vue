<script setup lang="ts">
const { blogs, fetchBlogs } = useBlog(5)
await fetchBlogs()

const classes: string[] = [
  "row-span-9",
  "row-span-5",
  "row-span-4",
  "row-span-5",
  "row-span-4",
]
</script>

<template>
  <div
    class="grid h-auto grid-cols-1 grid-rows-9 gap-5 sm:h-160 sm:grid-cols-3 md:h-180"
  >
    <BlogItem
      v-for="(blog, index) in blogs"
      :key="index"
      :class="classes[index]"
      :blog
    />
  </div>
</template>
