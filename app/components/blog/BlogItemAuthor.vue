<script setup lang="ts">
import type { BlogAuthor } from "~/types/blog"

defineProps<{
  authors: BlogAuthor[]
}>()
</script>

<template>
  <div class="text-sm text-primary dark:text-secondary">
    <div v-if="authors.length === 1" class="flex items-center">
      <Avatar size="xs" class="mr-2">
        <AvatarImage :src="authors[0]?.avatar ?? ''" alt="author avatar" />
        <BlogAvatarFallback />
      </Avatar>
      <span class="truncate">{{ authors[0]?.name ?? "" }}</span>
    </div>
    <div v-else-if="authors.length === 2" class="flex items-center">
      <Avatar size="xs" class="-mr-2">
        <AvatarImage :src="authors[0]?.avatar ?? ''" alt="author avatar" />
        <BlogAvatarFallback />
      </Avatar>
      <Avatar size="xs" class="mr-2">
        <AvatarImage :src="authors[1]?.avatar ?? ''" alt="author avatar" />
        <AvatarFallback>?</AvatarFallback>
      </Avatar>
      <span class="truncate"
        >{{ authors[0]?.name ?? "" }}, {{ authors[1]?.name ?? "" }}</span
      >
    </div>
    <div v-else class="flex items-center">
      <Avatar size="xs" class="-mr-2">
        <AvatarImage :src="authors[0]?.avatar ?? ''" alt="author avatar" />
        <BlogAvatarFallback />
      </Avatar>
      <Avatar size="xs" class="-mr-2">
        <AvatarImage :src="authors[1]?.avatar ?? ''" alt="author avatar" />
        <AvatarFallback>?</AvatarFallback>
      </Avatar>
      <Avatar size="xs">
        <BlogAvatarFallback>+{{ authors.length - 2 }}</BlogAvatarFallback>
      </Avatar>
    </div>
  </div>
</template>
