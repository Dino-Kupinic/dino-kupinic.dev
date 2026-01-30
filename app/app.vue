<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const siteName = config.public.siteName
const siteDescription = config.public.siteDescription
const siteOgImage = config.public.siteOgImage

useSeoMeta({
  titleTemplate: `%s · ${siteName}`,
  ogSiteName: siteName,
  description: siteDescription,
  ogDescription: siteDescription,
  ogImage: siteOgImage,
  ogImageAlt: `${siteName} open graph image`,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterImage: siteOgImage,
  twitterDescription: siteDescription,
  twitterTitle: siteName,
})

useHead({
  link: [
    {
      rel: "canonical",
      href: siteUrl,
    },
  ],
})

useSchemaOrg([
  definePerson({
    name: siteName,
    url: siteUrl,
  }),
  defineWebSite({
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    inLanguage: "en",
  }),
])
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
