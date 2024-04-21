<script setup lang="ts">
import type { TocLink } from "@nuxt/content/types"

defineProps<{
  links: TocLink[]
}>()

const route = useRoute()
</script>

<template>
  <div>
    <p class="text-lg font-semibold">{{ $t("blog.toc") }}</p>
    <ul class="mt-3">
      <NuxtLink
        v-for="link in links"
        :key="link.id"
        :to="route.path + '#' + link.id"
      >
        <li
          class="truncate text-sm leading-6 text-neutral-500 hover:text-foreground dark:text-neutral-500 dark:hover:text-foreground"
        >
          <span>
            {{ link.text }}
          </span>
          <!--          <NuxtLink-->
          <!--            v-for="l in link.children"-->
          <!--            :key="l.id"-->
          <!--            :to="route.path + '#' + l.id"-->
          <!--          >-->
          <!--            <li-->
          <!--              class="ml-3 truncate text-sm leading-6 text-neutral-500 hover:text-foreground dark:text-neutral-400"-->
          <!--            >-->
          <!--              {{ l.text }}-->
          <!--            </li>-->
          <!--          </NuxtLink>-->
        </li>
      </NuxtLink>
    </ul>
  </div>
</template>
