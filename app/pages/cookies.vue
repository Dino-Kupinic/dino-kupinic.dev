<script setup lang="ts">
const change = () => {
  localStorage.removeItem("va-disable")
  window.location.reload()
}

const { data: page } = await useAsyncData("cookies", () => {
  return queryCollection("misc").path("cookies").first()
})
</script>

<template>
  <GenericLayoutWrapper>
    <template v-if="page">
      <ContentRenderer :value="page" />
    </template>
    <template v-else>
      <div>
        <h1>Page Not Found</h1>
        <p>Oops! The content you're looking for doesn't exist.</p>
        <NuxtLink to="/">Go back home</NuxtLink>
      </div>
    </template>
    <Button @click="change">Change Preferences</Button>
  </GenericLayoutWrapper>
</template>
