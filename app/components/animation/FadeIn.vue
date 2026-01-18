<script setup lang="ts">
import { motion } from "motion-v"

const props = withDefaults(defineProps<{
  duration?: number
}>(), {
  duration: 0.4,
})
</script>

<template>
  <motion.div
  :initial="{ opacity: 0, y: 6 }"
    :animate="{
      opacity: 1,
      y: 0,
      transition: {
        duration: props.duration,
        ease: 'easeOut',
      },
    }"
  >
    <slot />
  </motion.div>
</template>
