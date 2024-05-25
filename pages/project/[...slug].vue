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

useSeoMeta({
  title: project.value.title,
  ogTitle: project.value.title,
  description: project.value?.description,
  ogDescription: project.value?.description,
})
</script>

<template>
  <GenericLayoutWrapper>
    <p>{{ project?.title }}</p>
  </GenericLayoutWrapper>
</template>
