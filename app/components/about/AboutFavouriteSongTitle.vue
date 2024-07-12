<script setup lang="ts">
const props = defineProps<{
  color: "red" | "orange" | "yellow" | "green" | "blue" | "purple"
}>()

const getColor = () => {
  switch (props.color) {
    case "red":
      return "text-red-700"
    case "orange":
      return "text-orange-700"
    case "yellow":
      return "text-yellow-600"
    case "green":
      return "text-green-700"
    case "blue":
      return "text-blue-700"
    case "purple":
      return "text-purple-700"
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
