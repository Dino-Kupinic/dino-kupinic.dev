<script setup lang="ts"></script>

<template>
  <div>
    <FeaturedBlogsContainer class="m-auto my-4 sm:my-5" />
    <main class="my-16 flex flex-col gap-4">
      <SectionHeading>{{ $t("blog.latest") }}</SectionHeading>
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
                  <div class="flex max-h-24 w-full flex-col space-y-4">
                    <div>
                      <BlogItemTitle class="line-clamp-1">
                        {{ article.title }}
                      </BlogItemTitle>
                      <p class="line-clamp-1">{{ article.description }}</p>
                    </div>
                    <div class="flex justify-between space-x-2">
                      <BlogItemAuthor
                        :author="article.authors"
                        class="truncate"
                      />
                      <BlogDate :date="new Date(article.date)" :short="true" />
                    </div>
                  </div>
                </NuxtLink>
              </TableCell>
            </TableRow>
          </ContentList>
        </TableBody>
      </Table>
      <div class="flex w-full">
        <Button class="w-full px-24 sm:w-auto">
          {{ $t("blog.loadMore") }}
        </Button>
      </div>
    </main>
  </div>
</template>
