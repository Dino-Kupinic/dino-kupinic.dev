<script setup lang="ts">
import Yzwo from "~/components/yuzzuwo/Yzwo.vue"

definePageMeta({
  layout: "yuzzuwo",
})
</script>

<template>
  <GenericLayoutWrapper>
    <div class="h-96 w-full border">
      <NuxtLink to="/" class="flex items-center gap-2 p-4">
        <span
          class="font-mono uppercase tracking-tight decoration-dotted underline-offset-4 hover:underline"
        >
          <Icon name="i-material-symbols-arrow-left-alt-rounded" class="mr-1" />
          back to dino-kupinic.dev
        </span>
      </NuxtLink>
      <p>Open-source tools and experiments by @Dino-Kupinic</p>
      <div>
        <Yzwo />
      </div>
    </div>
    <div class="h-12 border"></div>
    <div class="grid w-full grid-cols-3">
      <div class="h-96 border"></div>
      <div class="h-96 border"></div>
      <div class="h-96 border"></div>
    </div>
    <div class="grid w-full grid-cols-3">
      <div class="h-96 border"></div>
      <div class="col-span-2 h-96 border"></div>
    </div>
    <div class="h-[32rem] border">ok</div>
  </GenericLayoutWrapper>
</template>
