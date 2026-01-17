<script setup lang="ts">
import type { RepositoryResponse } from "~/types/github"

defineProps<{
  repository: RepositoryResponse
}>()
</script>

<template>
  <div class="flex flex-col space-y-1">
    <DividerHorizontal />
    <div class="dark:text-secondary flex items-center gap-2">
      <Icon name="i-codicon-issues" size="20" class="text-red-500" />
      <span> {{ repository?.data.open_issues }} Issues</span>
    </div>
    <div class="dark:text-secondary flex items-center gap-2">
      <Icon name="i-heroicons-star" size="20" class="text-yellow-500" />
      <span> {{ repository?.data.stargazers_count }} Stars</span>
    </div>
    <div class="flex items-center gap-2">
      <Icon name="i-ph-git-fork" size="20" />
      <span class="dark:text-secondary">
        {{ repository?.data.forks_count }} Forks
      </span>
    </div>
  </div>
</template>
