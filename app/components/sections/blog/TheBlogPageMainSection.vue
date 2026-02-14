<script setup lang="ts">
const BLOGS_PER_PAGE = 5

const { blogs, fetchBlogs } = useBlog()
await fetchBlogs()

const currentPage = ref(1)
const searchQuery = ref("")

const normalizedSearchQuery = computed(() =>
  searchQuery.value.trim().toLowerCase(),
)

const filteredBlogs = computed(() => {
  const query = normalizedSearchQuery.value

  if (!query) {
    return blogs.value
  }

  return blogs.value.filter((blog) => {
    const tags = blog.tags ?? []
    const authors = blog.authors.flatMap((author) => [
      author.name,
      author.handle,
    ])
    const searchableFields = [
      blog.title,
      blog.description ?? "",
      ...tags,
      ...authors,
    ]

    return searchableFields.some((field) => field.toLowerCase().includes(query))
  })
})

watch(normalizedSearchQuery, () => {
  currentPage.value = 1
})

const totalBlogs = computed(() => filteredBlogs.value.length)
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
  return filteredBlogs.value.slice(start, start + BLOGS_PER_PAGE)
})

const showPagination = computed(() => totalBlogs.value > BLOGS_PER_PAGE)
</script>
<template>
  <div>
    <FeaturedBlogsContainer class="m-auto my-4 sm:my-5" />
    <main class="my-16 flex flex-col gap-4">
      <div class="flex items-center justify-between">
        <SectionHeading>Latest</SectionHeading>
        <ButtonGroup>
          <Input
            v-model="searchQuery"
            placeholder="Search blogs..."
            aria-label="Search blogs"
          />
          <Button variant="outline" aria-label="Search blogs" type="button">
            <Icon name="i-heroicons-magnifying-glass" size="16" />
          </Button>
        </ButtonGroup>
      </div>
      <BlogTable v-if="paginatedBlogs.length" :blogs="paginatedBlogs" />
      <div
        v-else
        class="text-muted-foreground rounded-md border border-dashed px-4 py-8 text-center text-sm"
      >
        No blog posts found.
      </div>
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
