<script setup lang="ts">
import Autoplay from "embla-carousel-autoplay"

const plugin = Autoplay({
  delay: 3000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
})

const { featuredProjects, fetchProjects } = useProjects()
await fetchProjects()
</script>

<template>
  <div class="relative w-full">
    <Carousel
      :opts="{
        align: 'start',
        loop: true,
      }"
      :plugins="[plugin]"
      aria-label="Featured Projects Carousel"
      @mouseenter="plugin.stop"
      @mouseleave="[plugin.reset(), plugin.play()]"
    >
      <CarouselContent class="-ml-4 sm:-ml-5">
        <CarouselItem
          v-for="project in featuredProjects"
          :key="project.title"
          class="basis-1/2 pl-4 sm:pl-5 md:basis-1/3"
        >
          <div>
            <ProjectItem :project />
          </div>
        </CarouselItem>
      </CarouselContent>
      <template v-if="$device.isDesktopOrTablet">
        <CarouselPrevious aria-label="Carousel Previous Item" />
        <CarouselNext aria-label="Carousel Next Item" />
      </template>
    </Carousel>
  </div>
</template>
