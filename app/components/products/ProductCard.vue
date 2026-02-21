<script setup lang="ts">
const props = defineProps<{
  id: string
  name: string
  description?: string
  image?: string
  priceAmount?: number
}>()

const formattedPrice = computed(() =>
  props.priceAmount
    ? new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(props.priceAmount / 100)
    : "Free",
)
</script>

<template>
  <Card>
    <NuxtImg v-if="props.image" :src="props.image" :alt="props.name" />
    <CardContent>
      <CardTitle>{{ props.name }}</CardTitle>
      <CardDescription>{{ props.description }}</CardDescription>
      <p class="mt-2 text-sm font-semibold">{{ formattedPrice }}</p>
    </CardContent>
  </Card>
</template>

<style scoped></style>
