<script setup lang="ts">
import type { ProjectContent } from "~/types/project"

const route = useRoute()

const { data: project } = await useAsyncData(route.path, () =>
  queryContent<ProjectContent>(route.path).findOne(),
)

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
