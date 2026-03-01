<script setup lang="ts">
defineProps<{
  contentClass?: string
  wrapperClass?: string
}>()
</script>

<template>
  <div class="bg-background h-full py-3" :class="contentClass">
    <GenericLayoutWrapper :class="wrapperClass">
      <slot />
    </GenericLayoutWrapper>
  </div>
</template>
