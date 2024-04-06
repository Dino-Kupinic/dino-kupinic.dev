<script setup lang="ts">
import type { Blog, BlogContent } from "~/types/blog"
import BlogTitle from "~/components/typography/BlogTitle.vue"

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

// const { data: blog, pending } = await useLazyFetch<Blog>(
//   `/api/v1${blogContent.value._path}`,
// )
// if (!pending && !blog.value) {
//   throw createError({
//     statusCode: 404,
//     statusMessage: "Blog not found",
//     fatal: true,
//   })
// }
//
// useSeoMeta({
//   title: title,
//   description: description,
// })
</script>

<template>
  <GenericLayoutWrapper>
    <BlogHeader>
      <BlogTitle>{{ blogContent?.title }}</BlogTitle>
      <BlogSubtitle>{{ blogContent?.description }}</BlogSubtitle>
    </BlogHeader>
    <div class="flex flex-col sm:flex-row">
      <div class="sm:border-r sm:pr-12">
        <!--        <p v-if="pending">Loading...</p>-->
        <!--        <div v-else>-->
        <ContentDoc />
        <!--        <pre>{{ blog?.path }}</pre>-->
        <!--        </div>-->
      </div>
      <SideBarContainer>
        <div class="w-full">
          <BlogTableOfContents />
        </div>
      </SideBarContainer>
    </div>
  </GenericLayoutWrapper>
</template>
