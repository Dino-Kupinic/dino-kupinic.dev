<script setup lang="ts">
const route = useRoute()
const { data: blogContent } = await useAsyncData(route.path, () => {
  return queryCollection("blogs").path(route.path).first()
})

if (!blogContent.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Blog not found",
    fatal: true,
  })
}

const title = blogContent.value.title
const image = blogContent.value.seo?.image?.src
const related = blogContent.value?.related
const date = new Date(blogContent?.value.date)

const { data: relatedBlogs } = await useAsyncData(
  `related-${route.path}`,
  async () => {
    if (!related?.length) return []

    const blogs = await Promise.all(
      related.map((path) => queryCollection("blogs").path(path).first()),
    )

    return blogs.filter(Boolean)
  },
)

useSeoMeta({
  title: title,
  ogImage: image,
  ogTitle: title,
})

type SocialLink = {
  icon: string
  to: string
}

const socialLinks: ComputedRef<SocialLink[]> = computed(() => [
  {
    icon: "i-simple-icons-x",
    to: `https://twitter.com/intent/tweet?text=https://dino-kupinic.dev${blogContent.value?.path}`,
  },
  {
    icon: "i-simple-icons-linkedin",
    to: `https://www.linkedin.com/sharing/share-offsite/?url=https://dino-kupinic.dev${blogContent.value?.path}`,
  },
])
</script>

<template>
  <ContentLayoutWrapper>
    <ContentHeader :title="blogContent?.title as string" base="/blog">
      <template #breadcrumb> Blog </template>
      <div class="my-4 flex flex-col items-start justify-between sm:flex-row">
        <GenericTitle class="max-w-190">
          {{ blogContent?.title }}
        </GenericTitle>
        <div class="mb-5 sm:my-5">
          <BlogDate :date />
        </div>
      </div>
      <BlogAuthorContainer>
        <BlogAuthor
          v-for="author in blogContent?.authors"
          :key="author.name"
          :avatar-src="author.avatar"
        >
          <BlogAuthorName :name="author.name" :handle="author.handle" />
        </BlogAuthor>
      </BlogAuthorContainer>
    </ContentHeader>
    <BlogContent>
      <template #main>
        <ContentRenderer v-if="blogContent" :value="blogContent" />
      </template>
      <template #sidebar>
        <BlogTableOfContents
          v-if="blogContent?.body && blogContent.body.toc"
          :links="blogContent.body.toc.links"
        />
        <DividerHorizontal />
        <BlogLinks />
        <template v-if="relatedBlogs && relatedBlogs.length">
          <DividerHorizontal />
          <BlogRelatedBlogs>
            <BlogRelatedBlog
              v-for="relatedBlog in relatedBlogs"
              :key="relatedBlog?.title"
              :title="relatedBlog?.title!"
              :to="relatedBlog?.path!"
              :authors="relatedBlog?.authors!"
            />
          </BlogRelatedBlogs>
        </template>
      </template>
    </BlogContent>
    <BlogFooter>
      <div class="flex justify-between">
        <BlogBackButton />
        <div class="flex items-center space-x-2">
          <BlogCopyButton :link="route.path" />
          <SocialShare
            v-for="social in socialLinks"
            :key="social.to"
            :icon="social.icon"
            :to="social.to"
          />
        </div>
      </div>
    </BlogFooter>
  </ContentLayoutWrapper>
</template>
