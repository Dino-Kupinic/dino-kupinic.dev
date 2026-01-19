<script setup lang="ts">
import type { NavigationItem } from "~/types/nav"
import { VisuallyHidden } from "reka-ui"

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
      <ClientOnly>
        <Drawer v-model:open="isOpen">
          <DrawerTrigger>
            <NavBurgerMenu :open="isOpen" />
          </DrawerTrigger>
          <DrawerContent class="px-4">
            <VisuallyHidden>
              <DrawerTitle />
              <DialogDescription />
            </VisuallyHidden>
            <DrawerHeader>
              <div
                class="flex flex-col gap-4 border-b pt-6 pb-4 text-left text-3xl tracking-tight"
              >
                <div class="mb-8 flex w-full items-center justify-between">
                  <NavLogo />
                  <div class="w-40">
                    <ThemeSelection />
                  </div>
                </div>
                <div v-for="item in items" :key="item.href" class="text-xl">
                  <NuxtLink :to="item.href" @click="isOpen = false">
                    <div
                      class="flex w-full items-center justify-between underline decoration-dotted underline-offset-4"
                    >
                      <p class="font-mono">
                        {{ item.title.toUpperCase() }}
                      </p>
                      <Icon name="i-solar-arrow-right-up-linear" />
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </DrawerHeader>
            <DrawerFooter class="flex w-full flex-col gap-2 pt-0 pb-6">
              <DrawerClose>
                <Button variant="outline" class="w-full"> Close </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </ClientOnly>
    </div>
  </NavContainer>
</template>
