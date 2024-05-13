<script setup lang="ts">
import type { BlogAuthor } from "~/types/blog"

defineProps<{
  author: BlogAuthor[]
}>()
</script>

<template>
  <div class="text-sm text-primary dark:text-secondary">
    <div v-if="author.length === 1" class="flex items-center">
      <Avatar size="xs" class="mr-2">
        <AvatarImage :src="author[0].avatar" alt="author avatar" />
        <BlogAvatarFallback />
      </Avatar>
      <span class="truncate">{{ author[0].name }}</span>
    </div>
    <div v-else-if="author.length === 2" class="flex items-center">
      <Avatar size="xs" class="-mr-2">
        <AvatarImage :src="author[0].avatar" alt="author avatar" />
        <BlogAvatarFallback />
      </Avatar>
      <Avatar size="xs" class="mr-2">
        <AvatarImage :src="author[1].avatar" alt="author avatar" />
        <AvatarFallback>?</AvatarFallback>
      </Avatar>
      <span class="truncate">{{ author[0].name }}, {{ author[1].name }}</span>
    </div>
    <div v-else class="flex items-center">
      <Avatar size="xs" class="-mr-2">
        <AvatarImage :src="author[0].avatar" alt="author avatar" />
        <BlogAvatarFallback />
      </Avatar>
      <Avatar size="xs" class="-mr-2">
        <AvatarImage :src="author[1].avatar" alt="author avatar" />
        <AvatarFallback>?</AvatarFallback>
      </Avatar>
      <Avatar size="xs">
        <BlogAvatarFallback>+{{ author.length - 2 }}</BlogAvatarFallback>
      </Avatar>
    </div>
  </div>
</template>
