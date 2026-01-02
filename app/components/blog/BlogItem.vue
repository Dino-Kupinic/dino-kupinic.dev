<script setup lang="ts">
import type { Blog } from "~/schemas/blogSchema"

defineProps<{
  blog: Blog & { path: string }
}>()
</script>

<template>
  <BlogItemContainer
    :to="blog.path"
    class="relative flex h-50 flex-col overflow-hidden drop-shadow-sm after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-linear-to-t after:from-white after:from-25% after:to-transparent after:transition-opacity after:duration-500 after:content-[''] after:hover:from-10% sm:h-auto dark:after:from-black"
  >
    <BlogItemBackground v-if="blog.seo?.image" :image="blog.seo.image.src" />
    <div class="z-10 flex h-full w-full flex-col justify-end p-4 sm:gap-2">
      <CardContent class="flex-none p-0">
        <h3 class="text-foreground line-clamp-2 w-full text-xl font-semibold">
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
