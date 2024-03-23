<script setup lang="ts">
import type {NavigationItem} from "~/types/nav"

const {t, locale} = useI18n()
const navigationItems = ref<NavigationItem[]>([])

watch(locale, () => {
  navigationItems.value = [
    {
      title: t("nav.projects"),
      href: "/projects",
    },
    {
      title: t("nav.blog"),
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
}, {immediate: true})

const viewport = useViewport()
</script>

<template>
  <TheMobileNavBar v-if="viewport.isLessThan('tablet')" :items="navigationItems"/>
  <TheDesktopNavbar v-else :items="navigationItems"/>
</template>
