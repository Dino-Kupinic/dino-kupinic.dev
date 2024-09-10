<script setup lang="ts">
import type { BlogDisplay } from "~/types/blog"

defineProps<{
  blog: BlogDisplay
}>()
</script>

<template>
  <BlogItemContainer
    :to="blog.path"
    class="relative flex h-[200px] flex-col overflow-hidden drop-shadow-sm after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-t after:from-white after:from-25% after:to-transparent after:transition-opacity after:duration-500 after:content-[''] after:hover:from-10% dark:after:from-black sm:h-auto"
  >
    <BlogItemBackground :image="blog.seo.image.src" />
    <div class="z-10 flex h-full w-full flex-col justify-end p-4 sm:gap-2">
      <CardContent class="flex-none p-0">
        <h3 class="line-clamp-2 w-full text-xl font-medium text-foreground">
          {{ blog.title }}
        </h3>
      </CardContent>
      <CardFooter class="mt-2 p-0">
        <div class="flex w-full justify-between space-x-2">
          <BlogItemAuthor :authors="blog.authors" class="truncate" />
          <BlogDate :date="blog.date" :short="true" />
        </div>
      </CardFooter>
    </div>
  </BlogItemContainer>
</template>
