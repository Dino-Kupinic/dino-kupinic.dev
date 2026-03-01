<script setup lang="ts">
const props = defineProps<{
  id: string | number
}>()
</script>

<template>
  <li :id="`reference-note-${props.id}`" class="flex items-start gap-2">
    <span class="shrink-0 font-medium text-neutral-500 dark:text-neutral-400">
      [{{ props.id }}]
    </span>
    <div class="min-w-0 flex-1">
      <slot mdc-unwrap="p" />
    </div>
  </li>
</template>
