<script setup lang="ts">
definePageMeta({
  title: "Home",
  layout: "default",
})
</script>

<template>
  <GenericLayoutWrapper>
    <TheHeroSection />
    <TheProjectsSection />
    <TheBlogSection />
    <TheAboutMeSection />
    <TheWorkSection />
  </GenericLayoutWrapper>
</template>
