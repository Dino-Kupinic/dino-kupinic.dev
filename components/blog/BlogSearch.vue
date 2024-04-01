<script setup lang="ts"></script>

<template>
  <div class="relative flex w-full items-center sm:max-w-sm">
    <Input
      id="search"
      type="text"
      placeholder="Search blogs..."
      class="pl-10 font-heading tracking-wide"
    />
    <span
      class="absolute inset-y-0 start-0 flex h-10 items-center justify-center px-3"
    >
      <Icon class="text-muted-foreground" name="i-mi-search" />
    </span>
  </div>
</template>

<style scoped></style>
