<script setup lang="ts">
const { data: page } = await useAsyncData("impressum", () => {
  return queryCollection("misc").path("/misc/impressum").first()
})
</script>

<template>
  <GenericLayoutWrapper>
    <GenericPageHeader title="Impressum" />
    <main class="mb-32">
      <ContentRenderer v-if="page" :value="page" />
    </main>
  </GenericLayoutWrapper>
</template>
