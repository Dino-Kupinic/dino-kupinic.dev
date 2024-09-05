<script setup lang="ts">
const viewport = useViewport()
</script>

<template>
  <div class="flex flex-col sm:flex-row">
    <div class="border-dashed md:border-r md:pb-24 md:pr-12">
      <slot name="main" />
    </div>
    <SideBarContainer v-if="viewport.isGreaterThan('tablet')">
      <slot name="sidebar" />
    </SideBarContainer>
  </div>
</template>
