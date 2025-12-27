<script setup lang="ts">
// @ts-nocheck
const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h1)
</script>

<template>
  <h1
    :id="id"
    class="mb-6 mt-12 text-3xl font-semibold tracking-tight sm:text-4xl"
  >
    <a v-if="generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>
