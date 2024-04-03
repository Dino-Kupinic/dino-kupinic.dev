<script setup lang="ts">
import type { Category } from "~/types/category"

const { data: categories, pending } = useLazyFetch("/api/v1/categories")

const viewport = useViewport()
const route = useRoute()

const isCurrentCategory = (categoryText: string) => {
  return route.params.text === categoryText.toLowerCase()
}

const generateLinks = (category: Category) => {
  return category.text !== "All Blogs"
    ? "/blog/category/" + category.text.toLowerCase()
    : "/blog"
}
</script>

<template>
  <div v-if="pending">
    <p>Loading...</p>
  </div>
  <div v-else>
    <Drawer v-if="viewport.isLessThan('tablet')">
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
                  :to="generateLinks(category)"
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
    <ul v-else class="flex grow gap-8">
      <li v-for="category in categories" :key="category.id">
        <CategoryFilter
          :to="generateLinks(category)"
          :class="{
            'text-neutral-900': isCurrentCategory(category.text),
            active: isCurrentCategory(category.text),
          }"
          class="relative h-auto font-normal text-neutral-600 hover:text-primary dark:text-foreground"
        >
          <span
            v-if="isCurrentCategory(category.text)"
            class="before:absolute before:inset-0 before:h-[2px] before:w-full before:translate-y-10 before:bg-foreground before:content-['']"
          ></span>
          {{ category.text }}
        </CategoryFilter>
      </li>
    </ul>
  </div>
</template>
