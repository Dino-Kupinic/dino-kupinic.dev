<script setup lang="ts">
const { data: page } = await useAsyncData("privacy-policy", () => {
  return queryCollection("misc").path("/misc/privacy-policy").first()
})
</script>

<template>
  <GenericLayoutWrapper>
    <GenericPageHeader title="Privacy Policy" />
    <main class="mb-32">
      <ContentRenderer v-if="page" :value="page" />
    </main>
  </GenericLayoutWrapper>
</template>
