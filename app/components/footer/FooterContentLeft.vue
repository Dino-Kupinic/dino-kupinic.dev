<script setup lang="ts"></script>

<template>
  <div
    class="flex h-auto w-full flex-col justify-between space-y-2 rounded-lg border p-3 lg:w-64"
  >
    <div>
      <p class="font-semibold">Ad space</p>
      <p class="text-primary dark:text-secondary">I love these, use them</p>
    </div>
    <NuxtLink to="https://posthog.com" target="_blank" rel="noopener">
      <div
        class="from-background flex items-center justify-between rounded-lg bg-linear-to-r to-orange-500 p-2 px-3 text-orange-600 dark:from-10% dark:to-orange-700"
      >
        <p>PostHog</p>
        <Icon
          name="i-heroicons-arrow-up-right"
          class="text-background dark:text-orange-400"
        />
      </div>
    </NuxtLink>
    <NuxtLink to="https://openai.com/codex" target="_blank" rel="noopener">
      <div
        class="from-background flex items-center justify-between rounded-lg bg-linear-to-r to-blue-500 p-2 px-3 text-blue-600 dark:from-10% dark:to-blue-700"
      >
        <p>Codex</p>
        <Icon
          name="i-heroicons-arrow-up-right"
          class="text-background dark:text-blue-400"
        />
      </div>
    </NuxtLink>
    <NuxtLink to="https://linear.app" target="_blank" rel="noopener">
      <div
        class="from-background flex items-center justify-between rounded-lg bg-linear-to-r to-purple-500 p-2 px-3 text-purple-600 dark:from-10% dark:to-purple-700"
      >
        <p>Linear</p>
        <Icon
          name="i-heroicons-arrow-up-right"
          class="text-background dark:text-purple-400"
        />
      </div>
    </NuxtLink>
  </div>
</template>
