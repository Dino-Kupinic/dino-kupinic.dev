<script setup lang="ts">
import type { NavigationItem } from "~/types/nav"

type NavigationItemGroup = { title: string; links: NavigationItem[] }

const { t, locale } = useI18n()
const navigationItems = ref<NavigationItemGroup[]>([])

watch(
  locale,
  () => {
    navigationItems.value = [
      {
        title: t("footer.links"),
        links: [
          {
            title: t("nav.home"),
            href: "/",
          },
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
        ],
      },
      {
        title: t("footer.resources"),
        links: [
          {
            title: t("nav.uses"),
            href: "/uses",
          },
        ],
      },
    ]
  },
  { immediate: true },
)
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
