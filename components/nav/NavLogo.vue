<script setup lang="ts">
import {theme} from "#tailwind-config"

const DEFAULT_WIDTH: string = "75px"
const DEFAULT_HEIGHT: string = "35px"

withDefaults(defineProps<{
  width?: string,
  height?: string,
}>(), {
  width: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,
})

const mode = useColorMode()
const mainColor = ref("")
const fontColor = ref("")

function updateColors() {
  if (mode.value === "dark") {
    mainColor.value = fontColor.value = theme.colors.foreground
  } else {
    mainColor.value = theme.colors.background
    fontColor.value = "#000000" // TODO: fix
  }
}

onMounted(updateColors)
watch(mode, updateColors)
</script>

<template>
  <svg :width="width" :height="height" viewBox="0 0 75 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g style="mix-blend-mode:difference">
      <circle cx="17" cy="17" r="7" class="fill"/>
    </g>
    <g style="mix-blend-mode:difference">
      <circle cx="7" cy="7" r="7" class="fill"/>
    </g>
    <g style="mix-blend-mode:difference">
      <circle cx="27" cy="27" r="7" class="fill"/>
    </g>
    <g style="mix-blend-mode:difference">
      <circle cx="17" cy="17" r="15" class="fill"/>
    </g>
    <path class="font"
          d="M50.6364,26H44.7216V8.54545H50.7557C52.4886,8.54545 53.9773,8.89489,55.2216,9.59375C56.4716,10.2869,57.4318,11.2841,58.1023,12.5852C58.7727,13.8864,59.108,15.4432,59.108,17.2557C59.108,19.0739,58.7699,20.6364,58.0938,21.9432C57.4233,23.25,56.4545,24.2528,55.1875,24.9517C53.9261,25.6506,52.4091,26,50.6364,26ZM47.8835,23.2642H50.483C51.6989,23.2642 52.7131,23.0426,53.5256,22.5994C54.3381,22.1506,54.9489,21.483,55.358,20.5966C55.767,19.7045,55.9716,18.5909,55.9716,17.2557C55.9716,15.9205,55.767,14.8125,55.358,13.9318C54.9489,13.0455,54.3438,12.3835,53.5426,11.946C52.7472,11.5028,51.7585,11.2812,50.5767,11.2812H47.8835V23.2642ZM59.9522,26V8.54545H63.1141V16.5653H63.3272L70.1369,8.54545H73.9977L67.2477,16.3778L74.0573,26H70.2562L65.0488,18.517L63.1141,20.8011V26H59.9522Z"/>
  </svg>
</template>

<style scoped>
.fill {
  fill: v-bind(mainColor);
}

.font {
  fill: v-bind(fontColor);
}
</style>
