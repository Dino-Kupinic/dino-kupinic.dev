<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <SpeedInsights />
    <TheNavBar />
    <slot />
    <!-- Enable after request, also finish it -->
    <!--    <CookieBanner />-->
    <TheFooter />
  </div>
</template>
