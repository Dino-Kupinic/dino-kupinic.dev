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
                  <div class="flex items-center justify-between pb-1">
                    <h3
                      class="w-full text-ellipsis pr-3 text-sm font-semibold tracking-tight text-foreground sm:text-xl"
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
                  <p class="text-md line-clamp-1 dark:text-secondary">
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
      </ContentList>
    </TableBody>
  </Table>
</template>
