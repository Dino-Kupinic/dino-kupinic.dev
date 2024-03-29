<script setup lang="ts">
const props = defineProps<{
  color:
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "pink"
    | "purple"
    | "teal"
}>()

const getGradientColorClass = () => {
  switch (props.color) {
    case "red":
      return "to-red-700"
    case "orange":
      return " to-orange-700"
    case "yellow":
      return "to-yellow-700"
    case "green":
      return "to-green-700"
    case "blue":
      return "to-blue-700"
    case "pink":
      return "to-pink-700"
    case "purple":
      return "to-purple-700"
    case "teal":
      return "to-teal-700"
    default:
      return ""
  }
}

const getTextColorClass = () => {
  switch (props.color) {
    case "red":
      return "text-red-600"
    case "orange":
      return "text-orange-600"
    case "yellow":
      return "text-yellow-600"
    case "green":
      return "text-green-600"
    case "blue":
      return "text-blue-600"
    case "pink":
      return "text-pink-600"
    case "purple":
      return "text-purple-600"
    case "teal":
      return "text-teal-600"
    default:
      return ""
  }
}
</script>

<template>
  <div
    class="flex h-10 w-full items-center rounded-lg pl-2 dark:from-15%"
    :class="[
      'flex h-10 w-full items-center rounded-lg bg-gradient-to-r from-background pl-2',
      getGradientColorClass(),
    ]"
  >
    <span :class="[getTextColorClass()]">
      <slot />
    </span>
  </div>
</template>
