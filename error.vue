<script setup lang="ts">
import type { NuxtError } from "#app"

defineProps<{ error: NuxtError }>()

useSeoMeta({
  title: "Page not found",
  description: "Sadly this page could not be found.",
})
</script>

<template>
  <h1>{{ error }}</h1>
  <NuxtLink to="/"> Go home </NuxtLink>
</template>
