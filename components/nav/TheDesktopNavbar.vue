<script setup lang="ts">
import { navigationMenuTriggerStyle } from "~/components/ui/navigation-menu"
import type { NavigationItem } from "~/types/nav"

defineProps<{
  items: NavigationItem[]
}>()
</script>

<template>
  <NavContainer>
    <div class="ml-3 flex cursor-pointer items-center">
      <NuxtLink to="/">
        <ClientOnly>
          <NavLogo aria-label="Logo" />
          <template #fallback>
            <Skeleton class="h-10 w-20" />
          </template>
        </ClientOnly>
      </NuxtLink>
    </div>
    <NavigationMenu class="mr-2">
      <NavigationMenuList>
        <NavItem v-for="item in items" :key="item.title">
          <template #main>
            <NavigationMenuLink
              :href="item.href"
              :class="navigationMenuTriggerStyle()"
            >
              {{ item.title }}
            </NavigationMenuLink>
          </template>
        </NavItem>
        <div class="flex items-center space-x-3">
          <NavDivider />
          <ClientOnly>
            <NavBarThemeToggle />
            <NavCommand />
            <template #fallback>
              <Skeleton class="h-10 w-10" />
              <Skeleton class="h-10 w-10" />
            </template>
          </ClientOnly>
          <NavLanguageSelection />
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  </NavContainer>
</template>
