<script setup lang="ts">
import { animate, inView } from "motion"

definePageMeta({
  title: "Home",
  layout: "default",
})

inView("section", ({ target }) => {
  console.log("reached section")
  animate(
    target,
    { y: -50, opacity: [0.1, 0.2, 0.6, 1] },
    { duration: 1, easing: "ease", delay: 0.35 },
  )
})
</script>

<template>
  <GenericLayoutWrapper>
    <TheHeroSection />
    <TheProjectsSection />
    <TheBlogSection />
    <TheAboutMeSection />
    <TheWorkSection class="mb-16 sm:mb-24" />
  </GenericLayoutWrapper>
</template>
