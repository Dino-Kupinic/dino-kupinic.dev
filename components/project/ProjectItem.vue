<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <Card class="h-[200px] sm:h-auto">
    <CardHeader
      class="flex items-center justify-center p-2 pb-1 sm:p-3 sm:pb-2"
    >
      <ProjectItemHeader>
        <Icon
          name="i-simple-icons-nuxtdotjs"
          class="h-8 w-8 text-foreground sm:h-16 sm:w-16"
        />
      </ProjectItemHeader>
    </CardHeader>
    <CardContent class="px-2 py-0 sm:px-3">
      <ProjectItemTitle>{{ title }}</ProjectItemTitle>
    </CardContent>
    <CardFooter class="p-2 pt-1 sm:p-3 sm:pt-1.5">
      <ProjectItemDescription>
        {{ description }}
      </ProjectItemDescription>
    </CardFooter>
  </Card>
</template>
