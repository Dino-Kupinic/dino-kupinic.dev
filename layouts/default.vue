<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <div>
    <SpeedInsights />
    <TheNavBar />
    <slot />
    <TheFooter />
  </div>
</template>
