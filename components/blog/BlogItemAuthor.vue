<script setup lang="ts"></script>

<template>
  <span class="text-sm text-primary dark:text-secondary">
    <Avatar size="xs" class="mr-2">
      <AvatarImage src="" alt="@radix-vue" />
      <AvatarFallback>DK</AvatarFallback>
    </Avatar>
    <slot />
  </span>
</template>
