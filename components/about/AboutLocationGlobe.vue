<script setup lang="ts">
import createGlobe from "cobe"

const el = ref()
const phi = ref(0)

onMounted(() => {
  const globe = createGlobe(el.value, {
    devicePixelRatio: 2,
    width: 300 * 2,
    height: 300 * 2,
    phi: 0,
    theta: 0,
    dark: 1,
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [0.3, 0.3, 0.3],
    markerColor: [0.1, 0.8, 1],
    glowColor: [1, 1, 1],
    markers: [{ location: [47.5162, -14.5501], size: 0.03 }],
    onRender: (state) => {
      // Called on every animation frame.
      // `State` will be an empty object, return updated params.
      state.phi = phi.value
    },
  })
})
</script>

<template>
  <canvas ref="el" class="h-[300px] w-[300px]"></canvas>
</template>

<style scoped></style>
