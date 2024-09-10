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
            title: t("footer.call"),
            href: "/call",
          },
          {
            title: t("nav.uses"),
            href: "/uses",
          },
        ],
      },
      {
        title: t("footer.legal"),
        links: [
          {
            title: t("footer.privacy"),
            href: "/privacy",
          },
          {
            title: t("footer.impressum"),
            href: "/impressum",
          },
          {
            title: t("footer.cookies"),
            href: "/cookies",
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
