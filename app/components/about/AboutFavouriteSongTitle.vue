<script setup lang="ts">
const props = defineProps<{
  color: "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "teal"
}>()

const getColor = () => {
  switch (props.color) {
    case "red":
      return "text-red-600"
    case "orange":
      return "text-orange-600"
    case "yellow":
      return "text-yellow-600"
    case "green":
      return "text-green-600"
    case "teal":
      return "text-teal-600"
    case "blue":
      return "text-blue-600"
    case "purple":
      return "text-purple-600"
  }
}
</script>

<template>
  <h3
    class="text-2xl font-bold leading-6 sm:text-xl sm:leading-5"
    :class="getColor()"
  >
    <slot />
  </h3>
</template>
