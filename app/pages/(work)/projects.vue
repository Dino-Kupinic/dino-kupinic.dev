<script setup lang="ts">
definePageMeta({
  title: "Projects",
  layout: "default",
})

const { projects } = await useProjects()

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
    <main
      class="mt-3 mb-32 grid h-auto grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5"
    >
      <ProjectItem v-for="project in projects" :key="project.title" :project />
    </main>
  </GenericLayoutWrapper>
</template>
