<script setup lang="ts">
import createGlobe from "cobe"
import { motion, type PanInfo } from "motion-v"

const GLOBE_SIZE = 420
const AUTO_SPIN_SPEED = 0.007
const DRAG_SENSITIVITY = 0.004
const VELOCITY_SENSITIVITY = 0.00008
const MOMENTUM_DAMPING = 0.94
const MOMENTUM_EPSILON = 0.00001

const el = ref<HTMLCanvasElement | null>(null)
const phi = ref(0)
const dragMomentum = ref(0)
const isDragging = ref(false)
let globe: ReturnType<typeof createGlobe> | null = null

const handleDragStart = () => {
  isDragging.value = true
}

const handleDrag = (_event: PointerEvent, info: PanInfo) => {
  phi.value -= info.delta.x * DRAG_SENSITIVITY
  dragMomentum.value = -info.velocity.x * VELOCITY_SENSITIVITY
}

const handleDragEnd = (_event: PointerEvent, info: PanInfo) => {
  isDragging.value = false
  dragMomentum.value = -info.velocity.x * VELOCITY_SENSITIVITY
}

onMounted(() => {
  if (!el.value) return

  globe = createGlobe(el.value, {
    devicePixelRatio: 2,
    width: GLOBE_SIZE * 2,
    height: GLOBE_SIZE * 2,
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
      phi.value += AUTO_SPIN_SPEED + (isDragging.value ? 0 : dragMomentum.value)

      if (isDragging.value) return

      dragMomentum.value *= MOMENTUM_DAMPING
      if (Math.abs(dragMomentum.value) < MOMENTUM_EPSILON) {
        dragMomentum.value = 0
      }
    },
  })
})

onUnmounted(() => {
  globe?.destroy()
})
</script>

<template>
  <motion.div
    drag="x"
    :drag-constraints="{ left: 0, right: 0 }"
    :drag-elastic="0.12"
    :drag-momentum="false"
    :on-drag-start="handleDragStart"
    :on-drag="handleDrag"
    :on-drag-end="handleDragEnd"
    class="cursor-grab touch-none select-none active:cursor-grabbing"
  >
    <canvas ref="el" class="pointer-events-none h-[420px] w-[420px]"></canvas>
  </motion.div>
</template>
