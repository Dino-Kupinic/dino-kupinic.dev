<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { Slash } from "lucide-vue-next"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <li
    role="presentation"
    aria-hidden="true"
    :class="cn('[&>svg]:size-3.5', props.class)"
  >
    <slot>
      <strong class="text-base">/</strong>
    </slot>
  </li>
</template>
