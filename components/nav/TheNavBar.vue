<script setup lang="ts">
import {navigationMenuTriggerStyle} from "~/components/ui/navigation-menu"

type NavigationItem = {
  title: string,
  href: string
}

const {t} = useI18n()
const navigationItems = ref<NavigationItem[]>([
  {
    title: t("nav.projects"),
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
    title: "Contact",
    href: "/contact",
  },
])
</script>

<template>
  <NavContainer>
    <div class="flex items-center ml-3 cursor-pointer">
      <NuxtLink to="/">
        <NavLogo/>
      </NuxtLink>
    </div>
    <NavigationMenu class="mr-2">
      <NavigationMenuList>
        <NavItem v-for="item in navigationItems" :key="item.title">
          <template #main>
            <NavigationMenuLink :href="item.href" :class="navigationMenuTriggerStyle()">
              {{ item.title }}
            </NavigationMenuLink>
          </template>
        </NavItem>
        <div class="flex items-center space-x-3">
          <NavDivider/>
          <NavBarThemeToggle/>
          <NavLanguageSelection/>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  </NavContainer>
</template>
