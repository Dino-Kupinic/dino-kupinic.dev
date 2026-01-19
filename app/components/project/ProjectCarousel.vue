<script setup lang="ts">
import Autoplay from "embla-carousel-autoplay"
import type { ProjectQuery } from "~/types/query"

const plugin = Autoplay({
  delay: 3000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
})

const { data: projects } = await useAsyncData<ProjectQuery[]>(
  "home-projects",
  () => queryCollection("projects").order("date", "DESC").all(),
)

const featuredProjects = computed(() =>
  (projects.value ?? []).filter((project) => project.featured),
)
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
      <template v-if="isTablet">
        <CarouselPrevious aria-label="Carousel Previous Item" />
        <CarouselNext aria-label="Carousel Next Item" />
      </template>
    </Carousel>
  </div>
</template>
