<script setup lang="ts">
import createGlobe from "cobe"

const el = ref()
const phi = ref(0)

onMounted(() => {
  createGlobe(el.value, {
    devicePixelRatio: 2,
    width: 275 * 2,
    height: 275 * 2,
    phi: 0,
    theta: 0,
    dark: 1,
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [0.3, 0.3, 0.3],
    markerColor: [255, 0, 0],
    glowColor: [1, 1, 1],
    markers: [{ location: [47.5162, 14.5501], size: 0.07 }],
    onRender: (state) => {
      state.phi = phi.value
      phi.value += 0.007
    },
  })
})
</script>

<template>
  <canvas ref="el" class="h-[275px] w-[275px]"></canvas>
</template>
