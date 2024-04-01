<script setup lang="ts">
const { data: categories } = await useFetch("/api/v1/categories")
const route = useRoute()

const viewport = useViewport()
</script>

<template>
  <div class="flex py-2">
    <Drawer v-if="viewport.isLessThan('tablet')">
      <DrawerTrigger>
        <Button variant="outline" class="flex items-center space-x-2">
          <Icon name="i-ic-twotone-filter-list" />
          <span class="text-foreground">Categories</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline"> Cancel </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
    <Button
      v-for="category in categories"
      v-else
      :key="category.id"
      variant="link"
      class="relative block pl-0 pr-8 font-normal text-neutral-600 hover:text-primary hover:no-underline dark:text-foreground"
    >
      <NuxtLink
        :to="
          category.text !== 'All Blogs'
            ? '/blog/category/' + category.text.toLowerCase()
            : '/blog'
        "
      >
        <span
          class="before:absolute before:inset-0 before:ml-2 before:h-[2px] before:w-full before:translate-y-3 before:bg-foreground before:content-['']"
        >
          {{ category.text }}
        </span>
      </NuxtLink>
    </Button>
    <ClientOnly>
      <div class="flex w-full grow justify-end">
        <Popover>
          <PopoverTrigger>
            <Button variant="destructive" size="icon">
              <Icon name="i-jam-triangle-danger" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <p>Categories are currently only in English.</p>
          </PopoverContent>
        </Popover>
      </div>
    </ClientOnly>
  </div>
</template>

<style scoped></style>
