<script setup lang="ts">
import { useMotionValue, useTransform, animate, RowValue } from "motion-v"

const birthday = +new Date(2006, 4, 25)
const age = ~~((Date.now() - birthday) / 31557600000)

const count = useMotionValue(0)
const rounded = useTransform(count, () => Math.round(count.get()))

const ageRef = ref<HTMLElement | null>(null)
const isInView = useInView(ageRef, {once: true})

watch(isInView, (v) => {
  if (v) {
    animate(count, age, { duration: 2 })
  }
})
</script>

<template>
  <AboutItem icon="i-ri-cake-2-fill">
    <template #header>Age</template>
    <template #content>
      <div class="flex h-full items-center justify-center">
        <span class="text-9xl font-bold tracking-tighter" ref="ageRef" aria-label="Age">
          <RowValue
            :value="rounded"
          />
        </span>
      </div>
    </template>
  </AboutItem>
</template>
