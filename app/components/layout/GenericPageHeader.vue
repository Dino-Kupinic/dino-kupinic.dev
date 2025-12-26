<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <header class="mt-8 flex w-full flex-col gap-2 py-5 sm:mt-16">
    <PageTitle>{{ title }}</PageTitle>
    <PageSubtitle>{{ subtitle }}</PageSubtitle>
    <div>
      <slot />
    </div>
  </header>
</template>
