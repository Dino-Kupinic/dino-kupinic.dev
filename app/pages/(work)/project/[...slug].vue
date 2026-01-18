<script setup lang="ts">
import type { RepositoryResponse } from "~/types/github"

const { fetchProject } = useProjects()
const project = await fetchProject()

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

const formattedDate = formatDate(new Date(project.value.date))
const repository = ref<RepositoryResponse | null>(null)
if (project.value?.repository) {
  const { fetchRepository } = useGitHub()
  const url = project.value?.repository?.url
  try {
    repository.value = await fetchRepository(
      url.substring(url.lastIndexOf("/") + 1).toLowerCase(),
    )
  } catch (error) {
    console.error(error)
    repository.value = null
  }
}
</script>

<template>
  <ContentLayoutWrapper>
    <ContentHeader
      :title="project?.title as string"
      base="/projects"
      class="pt-6"
    >
      <template #breadcrumb> Projects </template>
    </ContentHeader>
    <div class="mb-8 flex flex-col space-y-4 sm:flex-row sm:space-x-2">
      <div class="grow-0 basis-3/5">
        <div
          v-if="isFeatured"
          class="w-max rounded-lg bg-purple-100 dark:bg-purple-900"
        >
          <span
            class="mx-1.5 text-xs font-normal text-purple-600 sm:text-sm dark:text-purple-100"
          >
            {{ isFeatured }}
          </span>
        </div>
        <div class="flex flex-col">
          <GenericTitle>{{ project?.title }}</GenericTitle>
          <GenericSubtitle>{{ project?.description }}</GenericSubtitle>
        </div>
        <ProjectTechnologies
          v-if="project?.technologies"
          :technologies="project?.technologies"
        />
      </div>
      <div class="basis-2/5">
        <div class="bg-accent h-full w-full space-y-1 rounded-lg p-8">
          <p class="mb-2 font-semibold">Statistics</p>
          <div class="flex items-center gap-2">
            <Icon name="i-ph-calendar" size="20" />
            <span class="dark:text-secondary">
              Started {{ formattedDate }}
            </span>
          </div>
          <div v-if="project?.deployed" class="flex items-center">
            <Icon
              name="i-heroicons-check-circle"
              size="20"
              class="text-green-500"
            />
            <span class="dark:text-secondary">
              <NuxtLink :to="project.deployed.url" class="hover:text-blue-500">
                <span>Deployed on</span>
                <Icon
                  v-if="project.deployed.icon"
                  :name="project.deployed.icon"
                  class="mx-1 mb-0.5"
                />
                <span>{{ project.deployed.vendor }}</span>
                <Icon
                  name="i-solar-arrow-right-up-linear"
                  class="mb-0.5 ml-1"
                />
              </NuxtLink>
            </span>
          </div>
          <div v-if="project?.repository" class="flex items-center gap-2">
            <Icon
              name="i-heroicons-check-circle"
              size="20"
              class="text-green-500"
            />
            <span class="dark:text-secondary">
              <NuxtLink
                :to="project.repository.url"
                class="hover:text-blue-500"
              >
                <span>Repository on Github</span>
                <Icon
                  name="i-solar-arrow-right-up-linear"
                  class="mb-0.5 ml-1"
                />
              </NuxtLink>
            </span>
          </div>
          <ProjectGithubStatistics v-if="repository" :repository="repository" />
        </div>
      </div>
    </div>
    <main class="mb-48 sm:w-3/5">
      <ContentRenderer v-if="project" :value="project" />
      <template v-else>
        <div class="h-100">
          <ClientOnly>
            <h1>No further description provided.</h1>
          </ClientOnly>
        </div>
      </template>
    </main>
  </ContentLayoutWrapper>
</template>
