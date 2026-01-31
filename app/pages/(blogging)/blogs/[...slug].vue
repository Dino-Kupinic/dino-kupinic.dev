<script setup lang="ts">
import { useSiteUrl } from "~/utils/seo"

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

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const siteName = config.public.siteName
const siteOgImage = config.public.siteOgImage

const title = blogContent.value.title
const description = blogContent.value.description
const image =
  useSiteUrl(blogContent.value.seo?.image?.src, siteUrl) ?? siteOgImage
const related = blogContent.value?.related
const date = new Date(blogContent?.value.date)
const canonicalUrl = new URL(route.path, siteUrl).toString()

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
  description,
  ogImage: image,
  ogTitle: title,
  ogDescription: description,
  ogUrl: canonicalUrl,
  twitterCard: "summary_large_image",
  twitterImage: image,
  twitterTitle: title,
  twitterDescription: description,
})

useHead({
  link: [
    {
      rel: "canonical",
      href: canonicalUrl,
    },
  ],
})

useSchemaOrg([
  defineWebPage({
    name: title,
    url: canonicalUrl,
    description,
  }),
  defineArticle({
    headline: title,
    description,
    image,
    datePublished: blogContent.value.date,
    // dateModified: blogContent.value.updatedAt ?? blogContent.value.date, // TODO: Uncomment when updatedAt is available
    author: blogContent.value.authors?.map((author) =>
      definePerson({
        name: author.name,
      }),
    ),
    publisher: defineOrganization({
      name: siteName,
      url: siteUrl,
    }),
  }),
])

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
