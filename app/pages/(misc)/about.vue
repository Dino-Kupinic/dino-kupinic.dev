<script setup lang="ts">
const { data: page } = await useAsyncData("about-page", () => {
  return queryCollection("misc").path("/misc/about").first()
})
console.log(page.value)
</script>

<template>
  <GenericLayoutWrapper>
    <GenericPageHeader title="About me" subtitle="Software Engineer" />
    <main>
      <ContentRenderer v-if="page" :value="page" />
    </main>
  </GenericLayoutWrapper>
</template>
