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
              <div class="flex items-center gap-1">
                <span
                  class="font-mono tracking-tight uppercase decoration-dotted underline-offset-4 hover:underline"
                >
                  {{ item.title }}
                </span>
                <Badge
                  v-if="item.badge"
                  variant="default"
                  class="bg-blue-500 text-white"
                >
                  {{ item.badge }}
                </Badge>
              </div>
            </NavigationMenuLink>
          </template>
        </NavItem>
      </NavigationMenuList>
    </NavigationMenu>
  </NavContainer>
</template>
