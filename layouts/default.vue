<script setup lang="ts">
import {SpeedInsights} from "@vercel/speed-insights/nuxt"
</script>

<template>
  <SpeedInsights/>
  <ClientOnly>
    <TheNavBar/>
    <template #fallback>
      <TheNavBarSkeleton/>
    </template>
  </ClientOnly>
  <slot/>
</template>
