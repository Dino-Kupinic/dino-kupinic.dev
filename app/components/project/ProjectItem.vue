<script setup lang="ts">
import type { ProjectContent } from "~/types/project"

const props = defineProps<{
  project: ProjectContent
}>()

const formattedDate = formatDate(new Date(props.project.date))
</script>

<template>
  <NuxtLink :to="project._path">
    <Card class="h-55 sm:h-auto">
      <CardHeader
        class="flex items-center justify-center p-2.5 pb-1 sm:p-4 sm:pb-2"
      >
        <div
          class="from-background to-accent dark:to-muted relative flex h-32 w-full items-center justify-center rounded-md bg-linear-to-t sm:h-80"
        >
          <Icon
            v-for="icon in project.icons"
            :key="icon"
            :name="icon"
            class="text-foreground mx-2 h-8 w-8 sm:h-12 sm:w-12"
          />
          <ProjectDate
            class="absolute right-2 bottom-2"
            :date="formattedDate"
          />
        </div>
      </CardHeader>
      <CardContent class="px-2.5 py-0 sm:px-4">
        <p class="text-md text-foreground truncate font-semibold sm:text-lg">
          {{ project.title }}
        </p>
      </CardContent>
      <CardFooter class="p-2.5 pt-1 sm:p-4 sm:pt-0">
        <p
          class="text-foreground dark:text-secondary line-clamp-2 text-sm sm:text-base"
        >
          {{ project.description }}
        </p>
      </CardFooter>
    </Card>
  </NuxtLink>
</template>
