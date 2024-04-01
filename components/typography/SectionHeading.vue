<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: "default" | "md" | "lg"
  }>(),
  {
    size: "default",
  },
)

const getSize = () => {
  switch (props.size) {
    case "default":
      return "text-2xl sm:text-3xl"
    case "md":
      return "text-3xl sm:text-4xl"
    case "lg":
      return "text-4xl sm:text-5xl"
  }
}
</script>

<template>
  <h3 :class="['font-heading font-medium tracking-wide', getSize()]">
    <slot />
  </h3>
</template>
