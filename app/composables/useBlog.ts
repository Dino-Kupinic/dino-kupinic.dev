type BlogListQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof queryCollection<"blogs">>["first"]>>
>

export type BlogQuery = Pick<
  BlogListQueryResult,
  "path" | "title" | "description" | "authors" | "tags" | "images"
> & { date: Date }

export const useBlog = (limit?: number) => {
  const key = `blogs-${limit ?? "all"}`
  const blogs = useState<BlogQuery[]>(key, () => [])

  async function fetchBlogs() {
    if (blogs.value.length) return

    try {
      const blogQuery = queryCollection("blogs")
        .select(
          "path",
          "title",
          "description",
          "authors",
          "tags",
          "images",
          "date",
        )
        .order("date", "DESC")

      const blogsContent = limit
        ? await blogQuery.limit(limit).all()
        : await blogQuery.all()

      blogs.value = blogsContent.map((blog) => ({
        ...blog,
        date: new Date(blog.date),
      }))
    } catch (error) {
      blogs.value = []
      return error
    }
  }

  return {
    blogs,
    fetchBlogs,
  }
}
