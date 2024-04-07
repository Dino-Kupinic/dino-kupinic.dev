<script setup lang="ts">
defineProps<{
  avatarSrc: string
}>()
</script>

<template>
  <Button
    variant="ghost"
    size="default"
    class="mr-2 flex h-auto items-center px-2 py-2 text-primary dark:text-secondary"
  >
    <Avatar size="sm" class="mr-2">
      <AvatarImage :src="avatarSrc" alt="author avatar" />
      <AvatarFallback class="text-base">DK</AvatarFallback>
    </Avatar>
    <slot />
  </Button>
</template>
