<script setup lang="ts">
import type { RepositoryResponse } from "~/types/github"

defineProps<{
  repository: RepositoryResponse
}>()
</script>

<template>
  <div class="flex flex-col space-y-1">
    <DividerHorizontal />
    <div class="flex items-center dark:text-secondary">
      <Icon name="i-codicon-issues" class="mr-2 text-red-500" />
      <span>
        {{ repository?.data.open_issues }} {{ $t("github.issues") }}
      </span>
    </div>
    <div class="flex items-center dark:text-secondary">
      <Icon name="i-heroicons-star" class="mr-2 text-yellow-500" />
      <span>
        {{ repository?.data.stargazers_count }} {{ $t("github.stars") }}
      </span>
    </div>
    <div class="flex items-center">
      <Icon name="i-ph-git-fork" class="mr-2" />
      <span class="dark:text-secondary">
        {{ repository?.data.forks_count }} {{ $t("github.forks") }}
      </span>
    </div>
  </div>
</template>
