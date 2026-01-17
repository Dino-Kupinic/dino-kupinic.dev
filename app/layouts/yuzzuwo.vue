<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <div
    class="relative h-full w-full bg-white text-black dark:bg-black dark:text-white"
  >
    <NuxtLoadingIndicator />
    <SpeedInsights />
    <div class="relative z-10">
      <slot />
      <ClientOnly>
        <!--        <CookieBanner />-->
      </ClientOnly>
    </div>
  </div>
</template>
