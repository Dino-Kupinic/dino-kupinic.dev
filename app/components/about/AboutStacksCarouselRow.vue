<script setup lang="ts">
import Autoscroll from "embla-carousel-auto-scroll"

const props = defineProps<{
  direction: "forward" | "backward"
}>()

const plugin = Autoscroll({
  speed: 0.5,
  direction: props.direction,
  startDelay: 200,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
})
</script>

<template>
  <div
    class="relative w-full"
    :style="{
      maskImage:
        'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, transparent 100%)',
    }"
  >
    <Carousel
      :opts="{
        align: 'start',
        loop: true,
      }"
      :plugins="[plugin]"
      @mouseenter="plugin.stop"
      @mouseleave="[plugin.reset(), plugin.play()]"
    >
      <CarouselContent class="-ml-3 sm:-ml-5">
        <slot />
      </CarouselContent>
    </Carousel>
  </div>
</template>
