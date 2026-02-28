<script setup lang="ts">
const props = defineProps<{
  id: string | number
  label?: string | number
}>()
</script>

<template>
  <sup
    class="inline-block align-super text-[0.6em] leading-none whitespace-nowrap"
  >
    <a
      :href="`#reference-note-${props.id}`"
      :aria-label="`Reference ${props.label ?? props.id}`"
      class="text-neutral-500 no-underline transition-colors hover:text-blue-500"
    >
      [{{ props.label ?? props.id }}]
    </a>
  </sup>
</template>
