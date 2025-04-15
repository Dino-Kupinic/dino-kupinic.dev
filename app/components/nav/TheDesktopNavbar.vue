<script setup lang="ts">
import { navigationMenuTriggerStyle } from "~/components/ui/navigation-menu"
import type { NavigationItem } from "~/types/nav"

defineProps<{
  items: NavigationItem[]
}>()
</script>

<template>
  <NavContainer>
    <div class="flex cursor-pointer items-center">
      <NuxtLink to="/">
        <NavLogo aria-label="Logo" />
      </NuxtLink>
    </div>
    <NavigationMenu>
      <NavigationMenuList>
        <NavItem v-for="item in items" :key="item.title">
          <template #main>
            <NavigationMenuLink
              :href="item.href"
              :class="navigationMenuTriggerStyle()"
            >
              <span
                class="font-mono uppercase tracking-tight decoration-dotted underline-offset-4 hover:underline"
              >
                {{ item.title }}
              </span>
            </NavigationMenuLink>
          </template>
        </NavItem>
      </NavigationMenuList>
    </NavigationMenu>
  </NavContainer>
</template>
