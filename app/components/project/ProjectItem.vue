<script setup lang="ts">
import type { ProjectContent } from "~/types/project"

const props = defineProps<{
  project: ProjectContent
}>()

const formattedDate = formatDate(new Date(props.project.date))
</script>

<template>
  <NuxtLink :to="project._path">
    <Card class="h-[220px] sm:h-auto">
      <CardHeader
        class="flex items-center justify-center p-2.5 pb-1 sm:p-4 sm:pb-2"
      >
        <div
          class="relative flex h-32 w-full items-center justify-center rounded-md bg-gradient-to-t from-background to-accent dark:to-muted sm:h-80"
        >
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
        </div>
      </CardHeader>
      <CardContent class="px-2.5 py-0 sm:px-4">
        <p class="text-md truncate font-semibold text-foreground sm:text-lg">
          {{ project.title }}
        </p>
      </CardContent>
      <CardFooter class="p-2.5 pt-1 sm:p-4 sm:pt-0">
        <p
          class="line-clamp-2 text-sm text-foreground dark:text-secondary sm:text-base"
        >
          {{ project.description }}
        </p>
      </CardFooter>
    </Card>
  </NuxtLink>
</template>
