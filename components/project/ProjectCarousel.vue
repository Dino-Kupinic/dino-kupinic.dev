<script setup lang="ts">
import Autoplay from "embla-carousel-autoplay"

const plugin = Autoplay({
  delay: 3000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
})

const projects = ref(8)
const viewport = useViewport()
</script>

<template>
  <div class="relative w-full">
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
        <CarouselItem
          v-for="project in projects"
          :key="project"
          class="basis-1/2 pl-3 sm:pl-5 md:basis-1/3"
        >
          <div>
            <ProjectItem
              title="Schulbuchaktion"
              description="versatile integration for the untis education platform"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <template v-if="viewport.isGreaterThan('tablet')">
        <CarouselPrevious />
        <CarouselNext />
      </template>
    </Carousel>
  </div>
</template>
