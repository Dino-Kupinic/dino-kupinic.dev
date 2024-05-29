<script setup lang="ts">
const props = defineProps<{
  date: string
}>()

const dateMonth = computed(() => props.date.split(" ")[0].toLowerCase())

const getColorClass = (background: boolean) => {
  switch (dateMonth.value) {
    case "december":
    case "january":
    case "february":
      if (background) {
        return "bg-blue-100 dark:bg-blue-900"
      }
      return "text-blue-600 dark:text-blue-100"
    case "march":
    case "april":
    case "may":
      if (background) {
        return "bg-green-100 dark:bg-green-900"
      }
      return "text-green-600 dark:text-green-100"
    case "june":
    case "july":
    case "august":
      if (background) {
        return "bg-yellow-100 dark:bg-yellow-900"
      }
      return "text-yellow-600 dark:text-yellow-100"
    case "september":
    case "october":
    case "november":
      if (background) {
        return "bg-orange-100 dark:bg-orange-900"
      }
      return "text-orange-600 dark:text-orange-100"
    default:
      return ""
  }
}
</script>

<template>
  <div :class="['w-max rounded-lg', getColorClass(true)]">
    <span
      :class="['mx-1.5 text-xs font-normal sm:text-sm', getColorClass(false)]"
    >
      {{ date }}
    </span>
  </div>
</template>
