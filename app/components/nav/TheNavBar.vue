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
        title: t("nav.uses"),
        href: "/uses",
      },
    ]
  },
  { immediate: true },
)

const viewport = useViewport()
</script>

<template>
  <TheMobileNavBar
    v-if="viewport.isLessThan('tablet')"
    class="sticky top-0 z-50"
    :items="navigationItems"
  />
  <TheDesktopNavbar v-else :items="navigationItems" class="sticky top-0 z-50" />
</template>
