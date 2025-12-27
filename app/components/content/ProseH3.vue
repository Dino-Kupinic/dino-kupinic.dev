<script setup lang="ts">
// @ts-nocheck
import { computed, useRuntimeConfig } from "#imports"

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h3)
</script>

<template>
  <h3
    :id="id"
    class="mb-6 mt-12 font-heading text-xl font-semibold tracking-tight decoration-1 underline-offset-8 hover:underline sm:text-2xl"
  >
    <a v-if="id && generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h3>
</template>
