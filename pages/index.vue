<script setup lang="ts">
definePageMeta({
  title: "Home",
  layout: "default",
})
</script>

<template>
  <main class="mx-auto max-w-[1024px] p-5 sm:p-0 md:p-3">
    <TheHeroSection />
    <TheProjectsSection />
    <TheBlogSection />
  </main>
</template>
