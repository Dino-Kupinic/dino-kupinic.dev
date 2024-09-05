<script setup lang="ts">
import type { BlogContent } from "~/types/blog"

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
const image = blogContent.value?.seo.image.src
const related = blogContent.value?.related
const date = new Date(blogContent?.value.date)
const tags = blogContent?.value.tags

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
    to: `https://twitter.com/intent/tweet?text=https://dino-kupinic.dev${blogContent.value?._path}`,
  },
  {
    icon: "i-simple-icons-linkedin",
    to: `https://www.linkedin.com/sharing/share-offsite/?url=https://dino-kupinic.dev${blogContent.value?._path}`,
  },
])
</script>

<template>
  <ContentLayoutWrapper>
    <ContentHeader :title="blogContent?.title as string" base="/blogs">
      <template #breadcrumb>
        {{ $t("blog.name") }}
      </template>
      <div class="my-4 flex items-end justify-between">
        <BlogDate :date />
        <!--        <div class="flex space-x-2">-->
        <!--          <CategoryDisplay-->
        <!--            v-for="tag in tags"-->
        <!--            :key="tag"-->
        <!--            :text="tag"-->
        <!--            to="/blog"-->
        <!--          />-->
        <!--        </div>-->
      </div>
      <GenericTitle class="max-w-[760px]">
        {{ blogContent?.title }}
      </GenericTitle>
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
              :authors="relatedBlog.authors"
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
