<script setup lang="ts">
import type { NavigationItem } from "~/types/nav"

const navigationItems = ref<NavigationItem[]>([
  // {
  //   title: "Yuzzuwo",
  //   href: "/yuzzuwo",
  // },
  {
    title: "Projekte",
    href: "/projects",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Uses",
    href: "/uses",
  },
])
</script>

<template>
  <TheMobileNavBar
    v-if="!$device.isDesktopOrTablet"
    class="sticky top-0 z-50"
    :items="navigationItems"
  />
  <TheDesktopNavbar v-else :items="navigationItems" class="sticky top-0 z-50" />
</template>
