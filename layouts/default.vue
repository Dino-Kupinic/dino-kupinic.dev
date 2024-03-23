<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <div>
    <SpeedInsights />
    <ClientOnly>
      <TheNavBar />
      <template #fallback>
        <TheNavBarSkeleton />
      </template>
    </ClientOnly>
    <slot />
  </div>
</template>
