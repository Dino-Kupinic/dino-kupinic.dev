<script setup lang="ts"></script>

<template>
  <div
    class="flex h-3/4 w-full flex-col justify-between space-y-4 rounded-lg border p-3 sm:w-64"
  >
    <div>
      <p class="font-semibold">Friend space</p>
      <p class="text-primary dark:text-secondary">Cool projects from friends</p>
    </div>
    <NuxtLink to="https://sidebox.net" target="_blank" rel="noopener">
      <div
        class="flex items-center justify-between rounded-lg bg-gradient-to-r from-amber-200 to-yellow-400 p-2 px-3 text-black"
      >
        <p>Sidebox</p>
        <Icon name="i-heroicons-arrow-up-right" />
      </div>
    </NuxtLink>
    <div
      class="flex h-full items-center justify-center bg-neutral-100 p-3 dark:bg-neutral-900 sm:p-0"
    >
      <p>
        More on the way! <br />
        Hopefully...
      </p>
    </div>
  </div>
</template>
