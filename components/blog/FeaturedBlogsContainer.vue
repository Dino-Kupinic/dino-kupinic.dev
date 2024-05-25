<script setup lang="ts">
import type { BlogDisplay } from "~/types/blog"

const { blogs, fetchBlogs } = useBlog()
await fetchBlogs()

const copy = ref<BlogDisplay[]>(blogs.value)

const classes: string[] = [
  "row-span-9",
  "row-span-5",
  "row-span-4",
  "row-span-5",
  "row-span-4",
]

for (const [index, blog] of copy.value.entries()) {
  blog.class = classes[index]
}
</script>

<template>
  <div
    class="grid h-auto grid-cols-1 grid-rows-9 gap-5 sm:h-[600px] sm:grid-cols-3 md:h-[700px]"
  >
    <BlogItem
      v-for="(blog, index) in blogs"
      :key="index"
      :class="blog.class"
      :blog
    />
  </div>
</template>
