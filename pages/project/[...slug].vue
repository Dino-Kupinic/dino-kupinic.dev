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

const formattedDate = formatDate(new Date(project.value.date))
</script>

<template>
  <ContentLayoutWrapper>
    <ContentHeader
      :title="project?.title as string"
      class="pt-6"
      base="/projects"
    >
      <template #breadcrumb>
        <Icon name="i-ph-cube-focus" class="mr-1" />
        <span class="text-sm tracking-wide">
          {{ $t("project.name") }}
        </span>
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
        <div class="h-full w-full space-y-1 rounded-lg bg-accent p-8">
          <p class="mb-2 font-semibold">Statistics</p>
          <div class="dark:text-secondary">
            <Icon name="i-ph-calendar" class="mr-2" />
            <span>Started {{ formattedDate }}</span>
          </div>
          <div v-if="project?.deployed" class="flex items-center">
            <Icon name="i-heroicons-check-circle" class="mr-2 text-green-500" />
            <span class="dark:text-secondary">
              <NuxtLink :to="project.deployed.url" class="hover:text-blue-500">
                <span>Deployed on</span>
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
                <span>Repository on Github</span>
                <Icon
                  name="i-solar-arrow-right-up-linear"
                  class="mb-0.5 ml-1"
                />
              </NuxtLink>
            </span>
          </div>
        </div>
      </div>
    </div>
    <main class="w-3/5">
      <ContentDoc>
        <template #empty>
          <div class="h-[400px]">
            <h1>No further description provided.</h1>
          </div>
        </template>
      </ContentDoc>
    </main>
  </ContentLayoutWrapper>
</template>
