<script setup lang="ts">
const blogs = ref([
  {
    title: "Why Nuxt v4 might be the biggest release in software history",
    likes: 33333333,
    views: 30000,
    date: new Date(),
    author: "Dino Kupinic",
    class: "row-span-9",
  },
  {
    title:
      "Why Nuxt v4 might be the biggest release in software history and why you should care aswell",
    likes: 1,
    views: 33333333,
    date: new Date(),
    author: "Dino Kupinic",
    class: "row-span-4",
  },
  {
    title: "How to get rich and shut up",
    likes: 1000,
    views: 30000,
    date: new Date(),
    author: "Dino Kupinic",
    class: "row-span-5",
  },
  {
    title: "elon musks neuralink looks quite exciting",
    likes: 1000,
    views: 30000,
    date: new Date(),
    author: "Dino Kupinic",
    class: "row-span-5",
  },
  {
    title:
      "Why Nuxt v4 might be the biggest release in software history and why you should care aswell",
    likes: 1000,
    views: 30000,
    date: new Date(),
    author: "Dino Kupinic",
    class: "row-span-4",
  },
])
</script>

<template>
  <div
    class="grid h-auto grid-cols-1 grid-rows-9 gap-5 sm:h-[700px] sm:grid-cols-3"
  >
    <BlogItem
      v-for="(blog, index) in blogs"
      :key="index"
      :title="blog.title"
      :likes="blog.likes"
      :views="blog.views"
      :date="blog.date"
      :author="blog.author"
      :class="blog.class"
    />
  </div>
</template>

<style scoped></style>
