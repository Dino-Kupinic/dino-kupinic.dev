<script setup lang="ts">
const props = defineProps<{
  project: ProjectQuery
}>()

const formattedDate = formatDate(new Date(props.project.date))
</script>

<template>
  <NuxtLink :to="project.path">
    <Card class="h-55 gap-0 py-0 sm:h-auto">
      <CardHeader
        class="flex items-center justify-center p-2.5 pb-1 sm:p-4 sm:pb-2"
      >
        <div
          class="from-background to-accent dark:to-muted relative flex h-32 w-full items-center justify-center rounded-md bg-linear-to-t sm:h-80"
        >
          <ClientOnly>
            <Icon
              v-for="icon in project.icons"
              :key="icon"
              :name="icon"
              :size="isMobile ? 28 : 48"
              class="text-foreground mx-2"
            />
          </ClientOnly>
          <ProjectDate
            class="absolute right-2 bottom-2"
            :date="formattedDate"
          />
        </div>
      </CardHeader>
      <CardContent class="px-2.5 py-0 sm:px-4">
        <p class="text-md text-foreground truncate font-semibold sm:text-lg">
          {{ project.title }}
        </p>
      </CardContent>
      <CardFooter class="p-2.5 pt-1 sm:p-4 sm:pt-0">
        <p
          class="text-foreground dark:text-secondary line-clamp-2 text-sm sm:text-base"
        >
          {{ project.description }}
        </p>
      </CardFooter>
    </Card>
  </NuxtLink>
</template>
