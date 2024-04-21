<script setup lang="ts">
import type { NuxtError } from "#app"

defineProps<{ error: NuxtError }>()

useSeoMeta({
  title: "Page not found",
  description: "Sadly this page could not be found.",
})
</script>

<template>
  <div class="m-3 flex flex-col space-y-2">
    <SectionHeading>An Error occured ⚠️</SectionHeading>
    <div class="rounded-lg border bg-background p-3">
      <pre class="overflow-hidden">{{ error }}</pre>
    </div>
    <NuxtLink to="/">
      <Button> Go home </Button>
    </NuxtLink>
  </div>
</template>
