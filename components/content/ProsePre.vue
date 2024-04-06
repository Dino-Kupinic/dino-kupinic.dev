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
    class="my-6 text-wrap rounded-lg border bg-background p-3 font-mono text-sm"
  ><slot /></pre>
</template>

<style>
pre code .line {
  display: block;
}
</style>
