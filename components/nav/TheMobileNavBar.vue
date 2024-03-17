<script setup lang="ts">
import type {NavigationItem} from "~/types/nav"

defineProps<{
  items: NavigationItem[]
}>()

const isOpen = ref<boolean>(false)
</script>

<template>
  <NavContainer>
    <div class="flex items-center ml-1 cursor-pointer">
      <NuxtLink to="/">
        <NavLogo/>
      </NuxtLink>
    </div>
    <div class="flex items-center gap-2">
      <NavBarThemeToggle/>
      <DropdownMenu v-model:open="isOpen">
        <DropdownMenuTrigger>
          <NavBurgerMenu :open="isOpen"/>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="mr-4 w-44">
          <DropdownMenuLabel class="text-lg">{{ $t("nav.menu") }}</DropdownMenuLabel>
          <DropdownMenuSeparator/>
          <DropdownMenuItem v-for="item in items" class="text-lg">
            <NuxtLink :to="item.href">
              {{ item.title }}
            </NuxtLink>
          </DropdownMenuItem>
          <DropdownMenuSeparator/>
          <DropdownMenuItem>
            <NavLanguageSelection/>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </NavContainer>
</template>
