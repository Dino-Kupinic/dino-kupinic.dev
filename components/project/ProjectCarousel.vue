<script setup lang="ts">
import Autoplay from "embla-carousel-autoplay"
import type { ProjectContent } from "~/types/project"

const plugin = Autoplay({
  delay: 3000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
})

const { data: projects } = await useAsyncData("projects", () =>
  queryContent<ProjectContent>("/projects").find(),
)

if (!projects.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "No Projects found",
  })
}
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
      <CarouselContent class="-ml-4 sm:-ml-5">
        <CarouselItem
          v-for="project in projects"
          :key="project.title"
          class="basis-1/2 pl-4 sm:pl-5 md:basis-1/3"
        >
          <div>
            <ProjectItem :project="project" />
          </div>
        </CarouselItem>
      </CarouselContent>
      <template v-if="viewport.isGreaterThan('tablet')">
        <CarouselPrevious aria-label="Carousel Previous Item" />
        <CarouselNext aria-label="Carousel Next Item" />
      </template>
    </Carousel>
  </div>
</template>
