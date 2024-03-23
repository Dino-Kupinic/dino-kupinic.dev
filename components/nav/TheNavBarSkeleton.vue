<script setup lang="ts">
const viewport = useViewport()
</script>

<template>
  <TheMobileNavBarSkeleton v-if="viewport.isLessThan('tablet')" />
  <TheDesktopNavBarSkeleton v-else />
</template>
