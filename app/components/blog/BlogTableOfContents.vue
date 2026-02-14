<script setup lang="ts">
import type { TocLink } from "@nuxt/content"

defineProps<{
  links: TocLink[]
}>()
</script>

<template>
  <div>
    <p class="text-lg font-semibold">Table of Contents</p>
    <ul class="mt-3 space-y-1">
      <li v-for="link in links" :key="link.id">
        <NuxtLink
          class="hover:text-foreground dark:hover:text-foreground block w-full truncate text-sm leading-6 text-neutral-500 transition-colors dark:text-neutral-500"
          :href="`#${link.id}`"
        >
          {{ link.text }}
        </NuxtLink>

        <ul v-if="link.children?.length" class="mt-1 space-y-1">
          <li v-for="child in link.children" :key="child.id">
            <NuxtLink
              class="hover:text-foreground dark:hover:text-foreground block w-full truncate pl-3 text-sm leading-6 text-neutral-500 transition-colors dark:text-neutral-500"
              :href="`#${child.id}`"
            >
              {{ child.text }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
