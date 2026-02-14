<script setup lang="ts"></script>

<template>
  <div class="flex flex-col sm:flex-row">
    <div class="order-2 border-dashed sm:order-1 md:border-r md:pr-12 md:pb-24">
      <slot name="main" />
    </div>
    <SideBarContainer class="order-1 sm:order-2">
      <slot name="sidebar" />
    </SideBarContainer>
  </div>
</template>
