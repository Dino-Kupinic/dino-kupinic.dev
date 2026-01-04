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
    class="sticky top-0 z-50 md:hidden"
    :items="navigationItems"
  />
  <TheDesktopNavbar
    :items="navigationItems"
    class="sticky top-0 z-50 hidden md:block"
  />
</template>
