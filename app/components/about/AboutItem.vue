<script setup lang="ts">
defineProps<{
  icon: string
  noBottomPadding?: boolean
}>()
</script>

<template>
  <div
    :class="[
      'bg-background flex flex-col rounded-lg border p-3 drop-shadow-sm',
      noBottomPadding ? 'pb-0' : '',
    ]"
  >
    <AboutItemHeader :icon="icon">
      <slot name="header" />
    </AboutItemHeader>
    <div class="grow">
      <slot name="content" />
    </div>
  </div>
</template>
