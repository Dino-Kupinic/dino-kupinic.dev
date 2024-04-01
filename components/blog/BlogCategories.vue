<script setup lang="ts">
const { data: categories } = await useFetch("/api/v1/categories")
const viewport = useViewport()
</script>

<template>
  <div class="flex py-2">
    <Drawer v-if="viewport.isLessThan('tablet')">
      <DrawerTrigger>
        <Button variant="outline"> Filter </Button>
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
      class="pl-0 pr-8"
    >
      <span class="text-foreground">
        {{ category.text }}
      </span>
    </Button>
  </div>
</template>

<style scoped></style>
