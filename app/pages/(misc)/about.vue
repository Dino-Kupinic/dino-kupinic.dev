<script setup lang="ts">
const { data: page } = await useAsyncData("about-page", () => {
  return queryCollection("misc").path("/misc/about").first()
})
</script>

<template>
  <GenericLayoutWrapper>
    <GenericPageHeader title="About me" subtitle="Software Engineer" />
    <ProseCodeInline>Last updated: 28.02.2026</ProseCodeInline>
    <main>
      <ContentRenderer v-if="page" :value="page" />
    </main>
  </GenericLayoutWrapper>
</template>
