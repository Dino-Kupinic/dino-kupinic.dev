<script setup lang="ts">
const { data: page } = await useAsyncData("cookies-page", () => {
  return queryCollection("misc").path("/misc/cookies").first()
})

const change = () => {}
</script>

<template>
  <GenericLayoutWrapper>
    <GenericPageHeader title="Cookie Policy" />
    <main class="mb-32">
      <ContentRenderer v-if="page" :value="page" />
      <Button @click="change">Change Preferences</Button>
    </main>
  </GenericLayoutWrapper>
</template>
