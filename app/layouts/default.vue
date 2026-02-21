<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
import "vue-sonner/style.css"
</script>

<template>
  <div>
    <SpeedInsights />
    <TheNavBar />
    <slot />
    <ClientOnly>
      <!--      <CookieBanner />-->
    </ClientOnly>
    <TheFooter />
    <Toaster />
  </div>
</template>
