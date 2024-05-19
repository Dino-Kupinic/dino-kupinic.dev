<script setup lang="ts">
import type { Blog, BlogDisplay } from "~/types/blog"

const { data } = await useAsyncData("blogs", () =>
  queryContent("/blogs").find(),
)

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "No Blogs found",
  })
}

const classes: string[] = [
  "row-span-9",
  "row-span-5",
  "row-span-4",
  "row-span-5",
  "row-span-4",
]

const blogs = ref<BlogDisplay[]>([])
for (const [index, blog] of data.value.entries()) {
  const { data: db_blog, pending } = await useLazyFetch<Blog>(
    `/api/v1${blog._path}`,
  )
  if (!pending && !db_blog.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "Blog not found",
    })
  }
  blogs.value.push({
    title: blog.title as string,
    author: blog.authors,
    date: new Date(blog.date),
    likes: db_blog.value?.likes as number,
    views: db_blog.value?.views as number,
    path: blog._path as string,
    image: {
      dark: blog.image_dark,
      light: blog.image_light,
    },
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
      :class="blog.class"
      :blog
    />
  </div>
</template>
