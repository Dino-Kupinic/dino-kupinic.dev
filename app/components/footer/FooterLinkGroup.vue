<script setup lang="ts">
import type { NavigationItem } from "~/types/nav"

defineProps<{
  title: string
  links: NavigationItem[]
}>()
</script>

<template>
  <div>
    <p class="font-semibold">{{ title }}</p>
    <NuxtLink
      v-for="item in links"
      :key="item.title"
      :to="item.href"
      class="text-primary dark:text-secondary"
    >
      <p class="my-4">
        {{ item.title }}
      </p>
    </NuxtLink>
  </div>
</template>
