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
    <TheAboutMeSection class="mb-16 sm:mb-24" />
    <!--    <TheWorkSection  />-->
  </GenericLayoutWrapper>
</template>
