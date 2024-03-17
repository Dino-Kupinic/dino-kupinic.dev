<script setup lang="ts">
import {navigationMenuTriggerStyle} from "~/components/ui/navigation-menu"
import type {NavigationItem} from "~/types/nav"

defineProps<{
  items: NavigationItem[]
}>()
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
        <NavItem v-for="item in items" :key="item.title">
          <template #main>
            <NavigationMenuLink :href="item.href" :class="navigationMenuTriggerStyle()">
              {{ item.title }}
            </NavigationMenuLink>
          </template>
        </NavItem>
        <div class="flex items-center space-x-3">
          <NavDivider/>
          <NavBarThemeToggle/>
          <NavCommand/>
          <NavLanguageSelection/>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  </NavContainer>
</template>
