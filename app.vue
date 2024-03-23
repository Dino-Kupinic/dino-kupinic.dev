<script setup lang="ts">
useSeoMeta({
  ogTitle: "Discover Dino Kupinic's Portfolio",
  description: "Personal portfolio website.",
  ogDescription:
    "Dino Kupinic is a personal portfolio website designed to showcase the professional work and " +
    "achievements of its namesake. With a clean and intuitive interface, visitors can explore Dino Kupinic's " +
    "projects, skills, and experiences. Through carefully curated content and seamless navigation, the website offers " +
    "a glimpse into Dino Kupinic's expertise and creativity, making it an engaging platform for potential clients, " +
    "collaborators, and employers alike. Whether seeking inspiration or seeking professional services, Dino Kupinic's " +
    "portfolio website serves as a compelling digital destination.",
})

const { locale } = useI18n()
const localeCookie = useCookie("locale")

const setLocale = () => {
  if (!localeCookie.value) {
    localeCookie.value = "en-US"
  }
  locale.value = localeCookie.value
}

onMounted(() => {
  setLocale()
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
