<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
  title: () => t("project.title"),
  layout: "default",
})

const { projects, fetchProjects } = useProjects()
await fetchProjects()

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
      :title="$t('project.title')"
      :subtitle="$t('project.subtitle')"
    />
    <main
      class="mb-32 mt-3 grid h-auto grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5"
    >
      <ProjectItem v-for="project in projects" :key="project.title" :project />
    </main>
  </GenericLayoutWrapper>
</template>
