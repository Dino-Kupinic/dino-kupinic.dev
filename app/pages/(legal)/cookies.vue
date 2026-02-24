<script setup lang="ts">
throw createError({ statusCode: 404, fatal: true })

const { data: page } = await useAsyncData("cookies-page", () => {
  return queryCollection("misc").path("/misc/cookies").first()
})

const { $c15tStore } = useNuxtApp()

const change = () => {
  const consentState = $c15tStore.getState()
  consentState.setShowPopup(true, true)
  consentState.setIsPrivacyDialogOpen(true)
}
</script>

<template>
  <GenericLayoutWrapper>
    <GenericPageHeader title="Cookie Policy" />
    <main class="mb-32 w-full space-y-8">
      <ContentRenderer v-if="page" :value="page" />

      <section class="bg-card rounded-xl border p-5 sm:p-6">
        <h2 class="text-foreground text-lg font-semibold">
          Manage Preferences
        </h2>
        <p class="text-muted-foreground mt-2 text-sm">
          You can reopen the consent settings at any time and update your
          choices.
        </p>
        <Button class="mt-4" @click="change">Change Preferences</Button>
      </section>
    </main>
  </GenericLayoutWrapper>
</template>
