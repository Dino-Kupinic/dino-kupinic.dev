<script setup lang="ts"></script>

<template>
  <Table>
    <TableBody>
      <ContentList v-slot="{ list }" path="/blogs">
        <TableRow
          v-for="article in list"
          :key="article._path"
          class="w-full p-3 hover:bg-accent"
        >
          <TableCell class="w-full">
            <NuxtLink :to="article._path">
              <div class="flex max-h-28 w-full flex-col space-y-4">
                <div>
                  <div class="flex justify-between pb-1">
                    <BlogItemTitle class="line-clamp-1">
                      {{ article.title }}
                    </BlogItemTitle>
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
                  <p class="text-md line-clamp-1 dark:text-secondary">
                    {{ article.description }}
                  </p>
                </div>
                <div class="flex justify-between space-x-2">
                  <BlogItemAuthor :author="article.authors" class="truncate" />
                  <BlogDate :date="new Date(article.date)" :short="true" />
                </div>
              </div>
            </NuxtLink>
          </TableCell>
        </TableRow>
      </ContentList>
    </TableBody>
  </Table>
</template>
