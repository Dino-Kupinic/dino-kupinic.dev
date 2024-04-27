<script setup lang="ts">
import { theme } from "#tailwind-config"

const DEFAULT_WIDTH: string = "78px"
const DEFAULT_HEIGHT: string = "35px"

withDefaults(
  defineProps<{
    width?: string
    height?: string
  }>(),
  {
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  },
)

const mode = useColorMode()
const fontColor = ref("")

function updateColors() {
  if (mode.value === "dark") {
    fontColor.value = theme.colors.foreground
  } else {
    fontColor.value = "#0A0A0A"
  }
}

watch(mode, updateColors, { immediate: true })
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 78 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="17.5" cy="17.5" r="17.5" fill="url(#paint0_linear_181_36)" />
    <path
      d="M51.584 9.96C57.008 9.96 60.056 13.032 60.056 18.504C60.056 23.952 57.08 27 51.728 27H45.92V9.96H51.584ZM49.04 24.288H51.584C55.136 24.288 56.864 22.392 56.864 18.504C56.864 14.568 55.136 12.672 51.584 12.672H49.04V24.288ZM61.5247 9.96H64.6447V17.736L71.3167 9.96H75.0127L68.6287 17.448L75.4207 27H71.8447L66.5647 19.584L64.6447 21.768V27H61.5247V9.96Z"
      class="font"
    />
    <defs>
      <linearGradient
        id="paint0_linear_181_36"
        x1="0"
        y1="18.0645"
        x2="35"
        y2="18.0645"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="#1B1B1B" />
      </linearGradient>
    </defs>
  </svg>
</template>

<style scoped>
.font {
  fill: v-bind(fontColor);
}
</style>
