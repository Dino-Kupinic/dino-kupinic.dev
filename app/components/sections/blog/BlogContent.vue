<script setup lang="ts"></script>

<template>
  <div class="flex flex-col sm:flex-row">
    <div class="border-dashed md:border-r md:pr-12 md:pb-24">
      <slot name="main" />
    </div>
    <SideBarContainer v-if="$device.isDesktopOrTablet">
      <slot name="sidebar" />
    </SideBarContainer>
  </div>
</template>
