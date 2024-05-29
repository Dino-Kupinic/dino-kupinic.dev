<script setup lang="ts">
definePageMeta({
  title: "Home",
  layout: "default",
})
</script>

<template>
  <GenericLayoutWrapper>
    <TheHeroSection />
    <!--    <TheProjectsSection />-->
    <!--    <TheBlogSection />-->
    <TheAboutMeSection />
    <TheWorkSection class="mb-16 sm:mb-24" />
  </GenericLayoutWrapper>
</template>
