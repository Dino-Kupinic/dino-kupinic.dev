<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
}>()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ title }}</CardTitle>
      <CardDescription>{{ description }}</CardDescription>
    </CardHeader>
    <CardContent>
      <NuxtImg :src="image" width="256" height="256" />
    </CardContent>
  </Card>
</template>
