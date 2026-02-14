<script setup lang="ts">
const BLOGS_PER_PAGE = 5

const { blogs, fetchBlogs } = useBlog()
await fetchBlogs()

const currentPage = ref(1)

const totalBlogs = computed(() => blogs.value.length)
const totalPages = computed(() =>
  Math.max(1, Math.ceil(totalBlogs.value / BLOGS_PER_PAGE)),
)

watchEffect(() => {
  if (currentPage.value < 1) {
    currentPage.value = 1
  }

  if (currentPage.value > totalPages.value) {
    currentPage.value = totalPages.value
  }
})

const paginatedBlogs = computed(() => {
  const start = (currentPage.value - 1) * BLOGS_PER_PAGE
  return blogs.value.slice(start, start + BLOGS_PER_PAGE)
})

const showPagination = computed(() => totalBlogs.value > BLOGS_PER_PAGE)
</script>
<template>
  <div>
    <FeaturedBlogsContainer class="m-auto my-4 sm:my-5" />
    <main class="my-16 flex flex-col gap-4">
      <SectionHeading>Latest</SectionHeading>
      <BlogTable :blogs="paginatedBlogs" />
      <div v-if="showPagination" class="flex flex-col gap-6">
        <Pagination
          v-slot="{ page }"
          v-model:page="currentPage"
          :items-per-page="BLOGS_PER_PAGE"
          :total="totalBlogs"
          class="justify-start"
        >
          <PaginationContent v-slot="{ items }">
            <PaginationPrevious />
            <template v-for="(item, index) in items" :key="index">
              <PaginationItem
                v-if="item.type === 'page'"
                :value="item.value"
                :is-active="item.value === page"
              >
                {{ item.value }}
              </PaginationItem>
              <PaginationEllipsis v-else :index="index" />
            </template>
            <PaginationNext />
          </PaginationContent>
        </Pagination>
      </div>
    </main>
  </div>
</template>
