<script setup lang="ts">
import type { ProjectContent } from "~/types/project"
import type { RepositoryResponse } from "~/types/github"

const project = ref<ProjectContent | null>(null)
const { fetchProject } = useProjects()
project.value = (await fetchProject()).value ?? null

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
      <template #breadcrumb>
        {{ $t("project.breadcrumb") }}
      </template>
    </ContentHeader>
    <div class="mb-8 flex flex-col space-y-4 sm:flex-row sm:space-x-2">
      <div class="grow-0 basis-3/5">
        <div
          v-if="isFeatured"
          class="w-max rounded-lg bg-purple-100 dark:bg-purple-900"
        >
          <span
            class="mx-1.5 text-xs font-normal text-purple-600 dark:text-purple-100 sm:text-sm"
          >
            {{ isFeatured }}
          </span>
        </div>
        <GenericTitle>{{ project?.title }}</GenericTitle>
        <GenericSubtitle>{{ project?.description }}</GenericSubtitle>
        <ProjectTechnologies
          v-if="project?.technologies"
          :technologies="project?.technologies"
        />
      </div>
      <div class="basis-2/5">
        <div class="h-full w-full space-y-1 rounded-lg bg-accent p-8">
          <p class="mb-2 font-semibold">{{ $t("project.statistics") }}</p>
          <div>
            <Icon name="i-ph-calendar" class="mr-2" />
            <span class="dark:text-secondary">
              {{ $t("project.started") }} {{ formattedDate }}
            </span>
          </div>
          <div v-if="project?.deployed" class="flex items-center">
            <Icon name="i-heroicons-check-circle" class="mr-2 text-green-500" />
            <span class="dark:text-secondary">
              <NuxtLink :to="project.deployed.url" class="hover:text-blue-500">
                <span>{{ $t("project.deployedOn") }}</span>
                <Icon :name="project?.deployed?.icon" class="mx-1 mb-0.5" />
                <span>{{ project?.deployed?.vendor }}</span>
                <Icon
                  name="i-solar-arrow-right-up-linear"
                  class="mb-0.5 ml-1"
                />
              </NuxtLink>
            </span>
          </div>
          <div v-if="project?.repository" class="flex items-center">
            <Icon name="i-heroicons-check-circle" class="mr-2 text-green-500" />
            <span class="dark:text-secondary">
              <NuxtLink
                :to="project.repository.url"
                class="hover:text-blue-500"
              >
                <span>{{ $t("project.repoOnGithub") }}</span>
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
      <ContentDoc>
        <template #empty>
          <div class="h-[400px]">
            <ClientOnly>
              <h1>{{ $t("project.noDescription") }}</h1>
            </ClientOnly>
          </div>
        </template>
      </ContentDoc>
    </main>
  </ContentLayoutWrapper>
</template>
