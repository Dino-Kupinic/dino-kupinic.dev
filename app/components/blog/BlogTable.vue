<script setup lang="ts">
const { blogs, fetchBlogs } = useBlog()
await fetchBlogs()
</script>

<template>
  <Table>
    <TableBody>
      <TableRow
        v-for="article in blogs"
        :key="article.path"
        class="hover:bg-accent w-full p-3"
      >
        <TableCell class="w-full">
          <NuxtLink :to="article.path">
            <div class="flex max-h-28 w-full flex-col space-y-4">
              <div>
                <div class="flex items-center justify-between pb-1">
                  <h3
                    class="text-foreground w-full pr-3 text-sm font-semibold tracking-tight text-ellipsis sm:text-xl"
                  >
                    {{ article.title }}
                  </h3>
                  <div class="mb-1 flex space-x-1">
                    <Badge
                      v-for="tag in article.tags"
                      :key="tag"
                      variant="outline"
                    >
                      {{ tag }}
                    </Badge>
                  </div>
                </div>
                <p class="text-md dark:text-secondary line-clamp-1">
                  {{ article.description }}
                </p>
              </div>
              <div class="flex justify-between space-x-2">
                <BlogItemAuthor :authors="article.authors" class="truncate" />
                <BlogDate :date="new Date(article.date)" :short="true" />
              </div>
            </div>
          </NuxtLink>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
