<script setup lang="ts">
import type { NuxtError } from "#app"

defineProps<{ error: NuxtError }>()

useSeoMeta({
  title: "Error",
  description: "Oops! An error occured.",
})
</script>

<template>
  <div class="flex h-screen w-full items-center justify-center">
    <div class="m-3 flex flex-col space-y-3">
      <div class="rounded-lg border bg-background p-3">
        <SectionHeading class="text-center">
          {{ $t("error.title") }}
        </SectionHeading>
      </div>
      <div class="rounded-lg border bg-background p-3">
        <pre class="overflow-hidden">{{ error }}</pre>
      </div>
      <NuxtLink to="/">
        <Button class="w-full">{{ $t("error.home") }}</Button>
      </NuxtLink>
    </div>
  </div>
</template>
