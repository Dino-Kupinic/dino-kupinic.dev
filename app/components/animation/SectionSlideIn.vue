<script setup lang="ts">
import { ref } from "vue"
import { motion, useInView } from "motion-v"

const sectionRef = ref<HTMLElement | null>(null)
const inView = useInView(sectionRef, { once: true })
</script>

<template>
  <motion.section
    ref="sectionRef"
    :initial="{ opacity: 0, y: 16 }"
    :animate="inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }"
    :transition="{ duration: 0.35, ease: 'easeOut' }"
  >
    <slot />
  </motion.section>
</template>
