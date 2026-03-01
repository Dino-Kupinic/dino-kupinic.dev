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
        class="flex items-center justify-between rounded-lg bg-linear-to-r from-orange-500/20 to-neutral-100 p-2 px-3 text-orange-600 dark:from-orange-500/15 dark:to-zinc-900 dark:text-orange-400"
      >
        <p>PostHog</p>
        <Icon
          name="i-heroicons-arrow-up-right"
          class="text-orange-600 dark:text-orange-400"
        />
      </div>
    </NuxtLink>
    <NuxtLink to="https://openai.com/codex" target="_blank" rel="noopener">
      <div
        class="flex items-center justify-between rounded-lg bg-linear-to-r from-blue-500/20 to-neutral-100 p-2 px-3 text-blue-600 dark:from-blue-500/15 dark:to-zinc-900 dark:text-blue-400"
      >
        <p>Codex</p>
        <Icon
          name="i-heroicons-arrow-up-right"
          class="text-blue-600 dark:text-blue-400"
        />
      </div>
    </NuxtLink>
    <NuxtLink to="https://linear.app" target="_blank" rel="noopener">
      <div
        class="flex items-center justify-between rounded-lg bg-linear-to-r from-purple-500/20 to-neutral-100 p-2 px-3 text-purple-600 dark:from-purple-500/15 dark:to-zinc-900 dark:text-purple-400"
      >
        <p>Linear</p>
        <Icon
          name="i-heroicons-arrow-up-right"
          class="text-purple-600 dark:text-purple-400"
        />
      </div>
    </NuxtLink>
  </div>
</template>
