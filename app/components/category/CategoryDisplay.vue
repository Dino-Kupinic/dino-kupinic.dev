<script setup lang="ts">
defineProps<{
  text: string
  to: string
}>()
</script>

<template>
  <div>
    <NuxtLink :to>
      <Button size="xs" class="rounded-full">
        <span class="mx-1.5 text-sm font-medium">
          {{ text }}
        </span>
      </Button>
    </NuxtLink>
  </div>
</template>
