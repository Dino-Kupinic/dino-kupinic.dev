<script setup lang="ts">
import type { BlogDisplay } from "~/types/blog"

defineProps<{
  blog: BlogDisplay
}>()
</script>

<template>
  <BlogItemContainer
    class="relative flex h-[200px] flex-col overflow-hidden drop-shadow-sm after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-t after:from-white after:from-25% after:to-transparent after:transition-opacity after:duration-500 after:content-[''] after:hover:from-10% dark:after:from-black sm:h-auto"
  >
    <ClientOnly>
      <BlogItemBackground :img-dark="blog.image" :img-light="blog.image" />
    </ClientOnly>
    <div class="z-10 flex h-full w-full flex-col justify-end p-4 sm:gap-2">
      <CardContent class="flex-none p-0">
        <BlogItemTitle>
          <p class="line-clamp-2">
            {{ blog.title }}
          </p>
        </BlogItemTitle>
        <div class="mt-1 flex space-x-3">
          <BlogLikes>{{ blog.likes }}</BlogLikes>
          <BlogViews>{{ blog.views }}</BlogViews>
        </div>
      </CardContent>
      <CardFooter class="mt-2 p-0">
        <div class="flex w-full justify-between space-x-3">
          <BlogItemAuthor class="truncate" avatar-src="">
            {{ blog.author }}
          </BlogItemAuthor>
          <BlogDate :date="blog.date" :short="true" />
        </div>
      </CardFooter>
    </div>
  </BlogItemContainer>
</template>
