<script setup lang="ts">
import type { Category } from "~/types/category"

const categories = useState<Category[] | null>("categories", () => null)
</script>

<template>
  <Drawer>
    <DrawerTrigger>
      <Button variant="outline" class="flex items-center space-x-2">
        <Icon name="i-ic-twotone-filter-list" />
        <span class="text-foreground">Categories</span>
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader class="pb-0 pt-8">
        <DrawerTitle class="font-heading text-xl tracking-wide"
          >Category</DrawerTitle
        >
      </DrawerHeader>
      <DrawerFooter>
        <DrawerClose>
          <div class="mb-6 flex flex-col gap-3">
            <Button
              v-for="category in categories"
              :key="category.id"
              variant="link"
            >
              <CategoryFilter
                :to="generateBlogLinks(category)"
                class="flex w-full items-center gap-2 text-left text-lg"
              >
                <Icon :name="category.icon" class="h-6 w-6" />
                {{ category.text }}
              </CategoryFilter>
            </Button>
          </div>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>
