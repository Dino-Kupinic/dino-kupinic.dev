<script setup lang="ts">
definePageMeta({
  title: "Home",
  layout: "default",
})
</script>

<template>
  <main class="mx-auto max-w-[1024px] p-5 sm:p-3 lg:p-0">
    <TheHeroSection />
    <TheProjectsSection />
    <TheBlogSection />
    <TheAboutMeSection />
  </main>
</template>
