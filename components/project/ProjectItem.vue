<script setup lang="ts">
import type { ProjectContent } from "~/types/project"

defineProps<{
  project: ProjectContent
}>()
</script>

<template>
  <Card class="h-[220px] sm:h-auto">
    <CardHeader
      class="flex items-center justify-center p-2 pb-1 sm:p-3 sm:pb-2"
    >
      <ProjectItemHeader>
        <Icon
          v-for="icon in project.icons"
          :key="icon"
          :name="icon"
          class="mx-2 h-8 w-8 text-foreground sm:h-12 sm:w-12"
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
</template>
