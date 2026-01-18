<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <pre
    :class="$props.class"
    class="bg-neutral-50 dark:bg-neutral-900 my-6 overflow-auto rounded-lg border border-dashed p-3 font-mono text-xs sm:text-sm"
  ><slot /></pre>
</template>

<style>
pre code .line {
  display: block;
}
</style>
