<script setup lang="ts"></script>

<template>
  <div>
    <Button
      class="w-full bg-yellow-200 hover:bg-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700"
      size="xs"
    >
      <span
        class="flex items-center text-base text-yellow-600 dark:text-yellow-200"
      >
        <Icon
          name="i-ic-outline-remove-red-eye"
          class="mr-1 h-5 w-5 text-yellow-600 dark:text-yellow-200"
        />
        <slot />
      </span>
    </Button>
  </div>
</template>

<style scoped></style>
