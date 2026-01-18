<script setup lang="ts">
import { format } from "date-fns"

const props = withDefaults(
  defineProps<{
    date: Date
    short?: boolean
  }>(),
  {
    short: false,
  },
)

const formattedDate = computed(() => {
  return props.short
    ? format(props.date, "MMM. do yyyy")
    : format(props.date, "EEEE, MMMM do yyyy")
})
</script>

<template>
  <span
    class="dark:text-secondary flex items-center text-sm text-nowrap text-neutral-500"
  >
    {{ formattedDate }}
  </span>
</template>
