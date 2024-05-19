<script setup lang="ts">
import type { ProjectContent } from "~/types/project"

definePageMeta({
  title: "Projects",
  layout: "default",
})

const { data: projects } = await useAsyncData("projects", () =>
  queryContent<ProjectContent>("/projects").sort({ date: -1 }).find(),
)

if (!projects.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "No Projects found",
  })
}
</script>

<template>
  <GenericLayoutWrapper>
    <GenericPageHeader
      title="Projects"
      subtitle="Showcase of all of my projects"
    />
    <main class="mb-32 mt-3 grid h-auto grid-cols-2 gap-5 sm:grid-cols-3">
      <ProjectItem v-for="project in projects" :key="project.title" :project />
      <div
        class="flex h-full w-full items-center justify-center rounded-lg bg-accent"
      >
        <span class="font-heading text-2xl font-semibold tracking-wide"
          >More soon</span
        >
      </div>
    </main>
  </GenericLayoutWrapper>
</template>
