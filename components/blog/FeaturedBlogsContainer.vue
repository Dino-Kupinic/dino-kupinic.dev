<script setup lang="ts">
import type { Blog, BlogDisplay } from "~/types/blog"

const { data } = await useAsyncData("blogs", () =>
  queryContent("/blogs").find(),
)

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "No Blogs found",
    fatal: true,
  })
}

const classes: string[] = [
  "row-span-9",
  "row-span-4",
  "row-span-5",
  "row-span-5",
  "row-span-4",
]

const blogs = ref<BlogDisplay[]>([])
for (const [index, blog] of data.value?.entries()) {
  const { data: b, pending } = await useLazyFetch<Blog>(`/api/v1${blog._path}`)
  if (!pending && !b.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "Blog not found",
    })
  }
  blogs.value.push({
    title: blog.title as string,
    author: blog.author as string,
    date: new Date(blog.date),
    likes: b.value?.likes as number,
    views: b.value?.views as number,
    image: blog.image,
    class: classes[index],
  })
}
</script>

<template>
  <div
    class="grid h-auto grid-cols-1 grid-rows-9 gap-5 sm:h-[600px] sm:grid-cols-3 md:h-[700px]"
  >
    <BlogItem
      v-for="(blog, index) in blogs"
      :key="index"
      :blog
      :class="blog.class"
    />
  </div>
</template>
