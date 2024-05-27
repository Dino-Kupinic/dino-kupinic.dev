<script setup lang="ts">
import type { ProjectContent } from "~/types/project"

const project = ref<ProjectContent | null>(null)
const { fetchProject } = useProjects()
project.value = (await fetchProject()).value

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Project not found",
  })
}

const isFeatured = computed(() => {
  return project.value?.featured ? "Featured" : null
})

useSeoMeta({
  title: project.value.title,
  ogTitle: project.value.title,
  description: project.value?.description,
  ogDescription: project.value?.description,
})
</script>

<template>
  <ContentLayoutWrapper>
    <ContentHeader
      :title="project?.title as string"
      class="pt-6"
      base="/projects"
    >
      <template #breadcrumb>
        <Icon name="i-ph-lightbulb" class="mr-1" />
        <span class="text-sm tracking-wide">
          {{ $t("project.name") }}
        </span>
      </template>
    </ContentHeader>
    <div class="flex flex-col space-x-2 sm:flex-row">
      <div class="grow-0 basis-3/5">
        <div class="w-max rounded-lg bg-purple-100 dark:bg-purple-900">
          <span
            class="mx-1.5 text-xs font-normal text-purple-600 dark:text-purple-100 sm:text-sm"
          >
            {{ isFeatured }}
          </span>
        </div>
        <GenericTitle>{{ project?.title }}</GenericTitle>
        <GenericSubtitle>{{ project?.description }}</GenericSubtitle>
        <div class="mt-4 flex flex-wrap gap-1">
          <Badge
            v-for="technology in project?.technologies"
            :key="technology"
            variant="outline"
          >
            {{ technology }}
          </Badge>
        </div>
      </div>
      <div class="basis-2/5">
        <div class="h-full w-full rounded-lg bg-accent p-8"></div>
      </div>
    </div>
  </ContentLayoutWrapper>
</template>
