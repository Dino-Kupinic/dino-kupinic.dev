<script setup lang="ts">
import createGlobe from "cobe"
import { motion, type PanInfo } from "motion-v"

const isMobile = useMediaQuery("(max-width: 767px)")
const GLOBE_SIZE = computed(() => {
  return isMobile.value ? 375 : 420
})
const AUTO_SPIN_SPEED = 0.007
const DRAG_SENSITIVITY = 0.004
const VELOCITY_SENSITIVITY = 0.00008
const MOMENTUM_DAMPING = 0.94
const MOMENTUM_EPSILON = 0.00001

const el = ref<HTMLCanvasElement | null>(null)
const phi = ref(0)
const dragMomentum = ref(0)
const isPanning = ref(false)
let globe: ReturnType<typeof createGlobe> | null = null

const setupGlobe = () => {
  if (!el.value) return

  globe?.destroy()
  globe = createGlobe(el.value, {
    devicePixelRatio: 2,
    width: GLOBE_SIZE.value * 2,
    height: GLOBE_SIZE.value * 2,
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
      if (isPanning.value) return

      phi.value += AUTO_SPIN_SPEED + dragMomentum.value

      dragMomentum.value *= MOMENTUM_DAMPING
      if (Math.abs(dragMomentum.value) < MOMENTUM_EPSILON) {
        dragMomentum.value = 0
      }
    },
  })
}

const handlePanStart = () => {
  isPanning.value = true
}

const handlePan = (_event: PointerEvent, info: PanInfo) => {
  phi.value -= info.delta.x * DRAG_SENSITIVITY
  dragMomentum.value = -info.velocity.x * VELOCITY_SENSITIVITY
}

const handlePanEnd = (_event: PointerEvent, info: PanInfo) => {
  isPanning.value = false
  dragMomentum.value = -info.velocity.x * VELOCITY_SENSITIVITY
}

onMounted(() => {
  setupGlobe()
})

watch(GLOBE_SIZE, () => {
  setupGlobe()
})

onUnmounted(() => {
  globe?.destroy()
})
</script>

<template>
  <motion.div
    :on-pan-start="handlePanStart"
    :on-pan="handlePan"
    :on-pan-end="handlePanEnd"
    class="mx-auto cursor-grab touch-none select-none active:cursor-grabbing"
  >
    <canvas
      ref="el"
      :style="{ width: `${GLOBE_SIZE}px`, height: `${GLOBE_SIZE}px` }"
      class="pointer-events-none block"
    ></canvas>
  </motion.div>
</template>
