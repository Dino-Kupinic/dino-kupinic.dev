<script setup lang="ts">
import type { Blog } from "~/types/blog"

const { data: blog, pending } = await useLazyFetch<Blog>("/api/v1/blogs")
if (!pending && !blog.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Article not found",
    fatal: true,
  })
}

useSeoMeta({
  title: blog.value?.title,
  description: blog.value?.description,
})

const { data: author } = useFetch(`/api/v1/authors/${blog.value?.id}`)
console.log(blog.value)
</script>

<template>
  <main>
    <p v-if="pending">Loading...</p>
    <ContentDoc v-else v-slot="{ doc }">
      <pre>{{ doc }}</pre>
      <article>
        <h1>{{ blog?.title }}</h1>
        <h1>{{ author }}</h1>
        <!--        <ContentRenderer :value="doc" />-->
      </article>
      <h1>Response</h1>
      <pre>{{ blog }}</pre>
    </ContentDoc>
  </main>
</template>
