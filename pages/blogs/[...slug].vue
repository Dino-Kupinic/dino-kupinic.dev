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
const image = blogContent.value?.image
const date = new Date(blogContent?.value.date)

const { data: blog, pending } = await useLazyFetch<Blog>(
  `/api/v1/${route.path}`,
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
  ogImage: image,
  ogTitle: title,
})
</script>

<template>
  <GenericLayoutWrapper>
    <BlogHeader>
      <div class="my-4 flex items-center gap-3">
        <Category text="Programming" to="/blog/category/programming" />
        <BlogDate :date />
      </div>
      <BlogTitle class="max-w-[760px]">{{ blogContent?.title }}</BlogTitle>
      <BlogSubtitle class="max-w-[600px]">
        {{ blogContent?.description }}
      </BlogSubtitle>
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
          <div v-if="pending">
            <Skeleton />
            <Skeleton />
          </div>
          <template v-else>
            <BlogLikeButton class="w-full">{{ blog?.likes }}</BlogLikeButton>
            <BlogsViewButton class="w-full">{{ blog?.views }}</BlogsViewButton>
          </template>
        </div>
      </template>
    </BlogContent>
  </GenericLayoutWrapper>
</template>
