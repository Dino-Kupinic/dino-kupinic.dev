<script setup lang="ts">
import type { RepositoryResponse } from "~/types/github"

defineProps<{
  repository: RepositoryResponse
}>()
</script>

<template>
  <div class="flex flex-col space-y-1">
    <DividerHorizontal />
    <div class="dark:text-secondary flex items-center">
      <Icon name="i-codicon-issues" class="mr-2 text-red-500" />
      <span> {{ repository?.data.open_issues }} Issues</span>
    </div>
    <div class="dark:text-secondary flex items-center">
      <Icon name="i-heroicons-star" class="mr-2 text-yellow-500" />
      <span> {{ repository?.data.stargazers_count }} Stars</span>
    </div>
    <div class="flex items-center">
      <Icon name="i-ph-git-fork" class="mr-2" />
      <span class="dark:text-secondary">
        {{ repository?.data.forks_count }} Forks
      </span>
    </div>
  </div>
</template>
