<script setup lang="ts">
import type { Blog, BlogContent } from "~/types/blog"

const route = useRoute()

const { data: blogContent } = await useAsyncData(route.path, () =>
  queryContent<BlogContent>(route.path).findOne(),
)
if (!blogContent.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Blog not found",
    fatal: true,
  })
}

const title = blogContent.value.title
const description = blogContent.value?.description
const date = new Date(blogContent?.value.date)

const { data: blog, pending } = await useLazyFetch<Blog>(
  `/api/v1${blogContent.value._path}`,
)
if (!pending && !blog.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Blog not found",
    fatal: true,
  })
}

useSeoMeta({
  title: title,
  description: description,
})
</script>

<template>
  <GenericLayoutWrapper>
    <BlogHeader>
      <div class="my-4 flex items-center gap-3">
        <Category text="Programming" to="/blog/category/programming" />
        <BlogDate :date />
      </div>
      <BlogTitle>{{ blogContent?.title }}</BlogTitle>
      <BlogSubtitle>{{ blogContent?.description }}</BlogSubtitle>
      <BlogAuthorContainer>
        <BlogAuthor
          v-for="author in blogContent?.authors"
          :key="author.name"
          :avatar-src="author.avatar"
        >
          <BlogAuthorName :name="author.name" :handle="author.handle" />
        </BlogAuthor>
      </BlogAuthorContainer>
    </BlogHeader>
    <BlogContent>
      <template #main>
        <ContentDoc />
      </template>
      <template #sidebar>
        <BlogTableOfContents
          v-if="blogContent?.body && blogContent.body.toc"
          :links="blogContent.body.toc.links"
        />
        <DividerHorizontal />
        <BlogLinks />
        <DividerHorizontal />
        <BlogRelatedBlogs></BlogRelatedBlogs>
        <DividerHorizontal />
        <div class="flex gap-3">
          <BlogLikeButton class="w-full">452</BlogLikeButton>
          <BlogsViewButton class="w-full">2000</BlogsViewButton>
        </div>
      </template>
    </BlogContent>
    <!--    <pre>{{ blogContent }}</pre>-->
  </GenericLayoutWrapper>
</template>
