<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <div
    class="relative h-full w-full bg-white text-black dark:bg-black dark:text-white"
  >
    <NuxtLoadingIndicator />
    <SpeedInsights />

    <div
      class="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-size-[16px_16px] dark:bg-[radial-gradient(#2a2a2a_1px,transparent_1px)]"
    />

    <div class="relative z-10">
      <slot />
      <ClientOnly>
        <!--        <CookieBanner />-->
      </ClientOnly>
    </div>
  </div>
</template>
