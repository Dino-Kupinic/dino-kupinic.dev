<script setup lang="ts"></script>

<template>
  <div>
    <Button
      class="w-full bg-rose-200 hover:bg-rose-300 dark:bg-rose-700 dark:hover:bg-rose-800"
      size="xs"
    >
      <span
        class="flex items-center text-base text-rose-600 dark:text-rose-200"
      >
        <Icon
          name="i-material-symbols-light-favorite-rounded"
          class="mr-1 h-5 w-5 text-rose-600 dark:text-rose-200"
        />
        <slot />
      </span>
    </Button>
  </div>
</template>
