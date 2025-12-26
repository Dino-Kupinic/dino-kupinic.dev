<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <SpeedInsights />
    <TheNavBar />
    <slot />
    <ClientOnly>
      <!--      <CookieBanner />-->
    </ClientOnly>
    <!--    <TheFooter />-->
  </div>
</template>
