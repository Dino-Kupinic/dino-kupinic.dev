<script setup lang="ts">
import Autoplay from "embla-carousel-autoplay"

const plugin = Autoplay({
  delay: 2000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
})

const projects = ref(15)
// :plugins="[plugin]"
// @mouseenter="plugin.stop"
// @mouseleave="[plugin.reset(), plugin.play()]"
</script>

<template>
  <Carousel
    class="relative w-full max-w-[960px]"
    :opts="{
      align: 'start',
    }"

  >
    <CarouselContent class="-ml-1">
      <CarouselItem v-for="project in projects" :key="project" class="pl-1 basis-1/2 md:basis-1/3">
        <div class="p-1">
          <ProjectItem title="Schulbuchaktion" description="versatile integration for the untis education platform"/>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious/>
    <CarouselNext/>
  </Carousel>
</template>
