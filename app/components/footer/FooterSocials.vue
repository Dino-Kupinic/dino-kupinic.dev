<script setup lang="ts">
const socials = getSocials()
</script>

<template>
  <div class="flex gap-2">
    <NuxtLink
      v-for="item in socials"
      :key="item.name"
      :to="item.link"
      target="_blank"
      rel="noopener"
      external
      class="text-primary dark:text-secondary"
    >
      <Icon :name="item.icon" />
    </NuxtLink>
  </div>
</template>
