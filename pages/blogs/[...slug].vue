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
const image = blogContent.value?.imageDark
const related = blogContent.value?.related
const date = new Date(blogContent?.value.date)

const relatedBlogs = ref<BlogContent[]>([])

if (related) {
  for (const relatedBlog of related) {
    const { data: relatedBlogData } = await useAsyncData(relatedBlog.path, () =>
      queryContent<BlogContent>(relatedBlog.path).findOne(),
    )
    if (!relatedBlogData.value) {
      continue
    }
    relatedBlogs.value.push(relatedBlogData.value)
  }
}

const { data: blog, pending } = await useLazyFetch<Blog>(`/api/v1${route.path}`)
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

type SocialLink = {
  icon: string
  to: string
}

const socialLinks: ComputedRef<SocialLink[]> = computed(() => [
  {
    icon: "i-simple-icons-x",
    to: `https://twitter.com/intent/tweet?text=https://dino-kupinic.dev${blogContent.value?._path}`,
  },
  {
    icon: "i-simple-icons-linkedin",
    to: `https://www.linkedin.com/sharing/share-offsite/?url=https://dino-kupinic.dev${blogContent.value?._path}`,
  },
])
</script>

<template>
  <GenericLayoutWrapper>
    <BlogHeader :title="blogContent?.title as string">
      <div class="my-4 flex items-center gap-3">
        <CategoryDisplay text="Programming" to="/blog/category/programming" />
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
        <template v-if="relatedBlogs.length">
          <DividerHorizontal />
          <BlogRelatedBlogs>
            <BlogRelatedBlog
              v-for="relatedBlog in relatedBlogs"
              :key="relatedBlog.title"
              :title="relatedBlog.title as string"
              :to="relatedBlog._path as string"
              :author="relatedBlog.authors"
            />
          </BlogRelatedBlogs>
        </template>
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
    <BlogCommentSection />
  </GenericLayoutWrapper>
</template>
