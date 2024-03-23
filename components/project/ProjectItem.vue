<script setup lang="ts">
import ProjectItemDescription from "~/components/project/ProjectItemDescription.vue"

defineProps<{
  title: string,
  description: string
}>()
</script>

<template>
  <Card>
    <CardHeader class="flex items-center justify-center p-2 sm:p-3 pb-1 sm:pb-2">
      <ProjectItemHeader>
        <Icon name="i-simple-icons-nuxtdotjs" class="h-16 w-16" />
      </ProjectItemHeader>
    </CardHeader>
    <CardContent class="px-2 sm:px-3 py-0">
      <ProjectItemTitle>{{ title }}</ProjectItemTitle>
    </CardContent>
    <CardFooter class="p-2 sm:p-3 pt-1 sm:pt-1.5">
      <ProjectItemDescription>
        {{ description }}
      </ProjectItemDescription>
    </CardFooter>
  </Card>
</template>
