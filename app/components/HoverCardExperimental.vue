<template>
  <div
    ref="divRef"
    class="relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-r from-black to-gray-950 px-8 py-16 shadow-2xl"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <div
      v-if="divRef"
      class="pointer-events-none absolute -inset-px"
      :style="{
        opacity: opacity,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
        transition: 'opacity 0.3s',
      }"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
const divRef = ref<HTMLDivElement | null>(null)
const isFocused = ref(false)
const position = reactive({ x: 0, y: 0 })
const opacity = ref(0)

const handleMouseMove = (e: MouseEvent) => {
  if (!divRef.value || isFocused.value) return

  const rect = divRef.value.getBoundingClientRect()

  position.x = e.clientX - rect.left
  position.y = e.clientY - rect.top
}

const handleFocus = () => {
  isFocused.value = true
  opacity.value = 1
}

const handleBlur = () => {
  isFocused.value = false
  opacity.value = 0
}

const handleMouseEnter = () => {
  opacity.value = 1
}

const handleMouseLeave = () => {
  opacity.value = 0
}
</script>

<style scoped></style>
