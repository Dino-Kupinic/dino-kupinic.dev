<script setup lang="ts">
import type { NavigationItem } from "~/types/nav"

const { t, locale } = useI18n()
const navigationItems = ref<NavigationItem[]>([])

watch(
  locale,
  () => {
    navigationItems.value = [
      {
        title: t("nav.projects"),
        href: "/projects",
      },
      {
        title: t("nav.blogs"),
        href: "/blog",
      },
      {
        title: t("nav.about"),
        href: "/about",
      },
      {
        title: t("nav.contact"),
        href: "/contact",
      },
    ]
  },
  { immediate: true },
)
</script>

<template>
  <div class="m-auto mb-24 h-[300px] w-full border-t bg-background">
    <div class="m-auto my-12 max-w-[1024px] px-5 lg:px-0">
      <NuxtLink
        v-for="item in navigationItems"
        :key="item.title"
        :to="item.href"
        class="text-primary dark:text-secondary"
      >
        <p>
          {{ item.title }}
        </p>
      </NuxtLink>
      <div></div>
    </div>
  </div>
</template>
