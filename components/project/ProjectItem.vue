<script setup lang="ts">
import type { ProjectContent } from "~/types/project"

const props = defineProps<{
  project: ProjectContent
}>()

const formattedDate = new Date(props.project.date).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
})
</script>

<template>
  <NuxtLink :to="project._path">
    <Card class="h-[220px] sm:h-auto">
      <CardHeader
        class="flex items-center justify-center p-2 pb-1 sm:p-3 sm:pb-2"
      >
        <ProjectItemHeader class="relative">
          <Icon
            v-for="icon in project.icons"
            :key="icon"
            :name="icon"
            class="mx-2 h-8 w-8 text-foreground sm:h-12 sm:w-12"
          />
          <ProjectDate
            class="absolute bottom-2 right-2"
            :date="formattedDate"
          />
        </ProjectItemHeader>
      </CardHeader>
      <CardContent class="px-2 py-0 sm:px-3">
        <ProjectItemTitle>{{ project.title }}</ProjectItemTitle>
      </CardContent>
      <CardFooter class="p-2 pt-1 sm:p-3 sm:pt-0">
        <ProjectItemDescription>
          {{ project.description }}
        </ProjectItemDescription>
      </CardFooter>
    </Card>
  </NuxtLink>
</template>
