<script setup lang="ts">
import type { NavigationItem } from "~/types/nav"

defineProps<{
  items: NavigationItem[]
}>()

const isOpen = ref<boolean>(false)
</script>

<template>
  <NavContainer>
    <div class="ml-1 flex cursor-pointer items-center gap-2">
      <NuxtLink to="/">
        <NavLogo aria-label="Logo" />
      </NuxtLink>
    </div>
    <div class="flex items-center gap-2">
      <NavCommand />
      <DropdownMenu v-model:open="isOpen">
        <DropdownMenuTrigger>
          <NavBurgerMenu :open="isOpen" />
        </DropdownMenuTrigger>
        <DropdownMenuContent class="mr-4 w-44">
          <DropdownMenuLabel class="text-lg">
            {{ $t("nav.menu") }}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            v-for="item in items"
            :key="item.href"
            class="text-lg"
          >
            <NuxtLink :to="item.href">
              {{ item.title }}
            </NuxtLink>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div class="flex w-full flex-col space-y-2">
              <NavLanguageSelection />
              <NavBarThemeSelection />
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </NavContainer>
</template>
