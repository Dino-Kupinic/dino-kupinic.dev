<script setup lang="ts">
// @ts-nocheck
import { computed, useRuntimeConfig } from "#imports"

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h2)
</script>

<template>
  <h2
    :id="id"
    class="mb-6 mt-12 font-heading text-2xl font-semibold tracking-normal decoration-1 underline-offset-8 hover:underline sm:text-3xl"
  >
    <a v-if="id && generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>
