<script setup lang="ts">
import type { NavigationItem } from "~/types/nav"

type NavigationItemGroup = { title: string; links: NavigationItem[] }

const navigationItems = ref<NavigationItemGroup[]>([
  {
    title: "Links",
    links: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Projects",
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
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Uses",
        href: "/uses",
      },
      /*       {
        title: "Cookies",
        href: "/cookies",
      }, */
    ],
  },
])
</script>

<template>
  <div class="flex gap-16 sm:px-3">
    <FooterLinkGroup
      v-for="item in navigationItems"
      :key="item.title"
      :links="item.links"
      :title="item.title"
    />
  </div>
</template>
