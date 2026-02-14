<script setup lang="ts">
definePageMeta({
  title: "Blog",
  layout: "default",
})
</script>

<template>
  <GenericLayoutWrapper>
    <div class="mt-8 flex items-center justify-end">
      <ButtonGroup>
        <a href="/feed.atom">
          <Button variant="outline">
            <Icon name="i-heroicons-rss-solid" size="18" /> Feed
          </Button>
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline" size="icon">
              <Icon name="i-heroicons-ellipsis-horizontal-solid" size="20"
            /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <a href="/feed.atom">
                <DropdownMenuItem>
                  <div class="flex w-full items-center gap-3">
                    <Icon name="i-tabler-file-type-xml" size="20" />
                    Atom
                  </div>
                </DropdownMenuItem>
              </a>
              <a href="/feed.xml">
                <DropdownMenuItem>
                  <div class="flex w-full items-center gap-3">
                    <Icon name="i-tabler-file-type-xml" size="20" />
                    RSS
                  </div>
                </DropdownMenuItem>
              </a>
              <a href="/feed.json">
                <DropdownMenuItem>
                  <div class="flex w-full items-center gap-3">
                    <Icon name="i-tabler-json" size="20" />
                    JSON
                  </div>
                </DropdownMenuItem>
              </a>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </div>

    <TheBlogPageMainSection />
  </GenericLayoutWrapper>
</template>
