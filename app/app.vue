<script setup lang="ts">
import { ConfigProvider } from "radix-vue"

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

const useIdFunction = () => useId()
</script>

<template>
  <!-- @vue-ignore -->
  <ConfigProvider :use-id="useIdFunction">
    <NuxtLayout>
      <NuxtPage />
      <Toaster />
    </NuxtLayout>
  </ConfigProvider>
</template>
