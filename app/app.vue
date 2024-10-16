<script setup lang="ts">
useSeoMeta({
  ogTitle: "Discover Dino Kupinic's Portfolio",
  description: "Personal portfolio website.",
  ogDescription:
    "Dino Kupinic is a personal portfolio website designed to showcase the professional work and " +
    "personal information of Dino Kupinic.",
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
