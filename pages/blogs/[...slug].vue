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

const { data: blog, pending } = await useLazyFetch<Blog>(
  `/api/v1/blogs/${blogContent.value._path}`,
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
    <div class="flex flex-col sm:flex-row">
      <div class="pr-10 sm:border-r">
        <p v-if="pending">Loading...</p>
        <ContentDoc v-slot="{ doc }">
          <article>
            <ContentRenderer :value="doc" />
          </article>
        </ContentDoc>
      </div>
      <SideBarContainer>
        <div class="w-full">Hallo</div>
      </SideBarContainer>
    </div>
  </GenericLayoutWrapper>
</template>
