<script setup lang="ts">
defineProps<{
  avatarSrc: string
}>()
</script>

<template>
  <span class="text-primary dark:text-secondary">
    <Avatar size="xs" class="mr-2">
      <AvatarImage :src="avatarSrc" alt="author avatar" />
      <AvatarFallback>?</AvatarFallback>
    </Avatar>
    <slot />
  </span>
</template>
