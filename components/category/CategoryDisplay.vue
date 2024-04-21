<script setup lang="ts">
defineProps<{
  text: string
  to: string
}>()
</script>

<template>
  <div>
    <NuxtLink :to>
      <Button variant="gradient" size="xs" class="rounded-full">
        <span class="mx-1.5 text-sm font-normal">
          {{ text }}
        </span>
      </Button>
    </NuxtLink>
  </div>
</template>
