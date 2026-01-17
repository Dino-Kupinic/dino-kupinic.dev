export type BlogQuery = Omit<
  NonNullable<
    Awaited<ReturnType<ReturnType<typeof queryCollection<"blogs">>["first"]>>
  >,
  "date"
> & { date: Date }

export const useBlog = (limit?: number) => {
  const key = `blogs-${limit ?? "all"}`
  const blogs = useState<BlogQuery[]>(key, () => [])

  async function fetchBlogs() {
    if (blogs.value.length) return

    try {
      const blogsContent = limit
        ? await queryCollection("blogs").limit(limit).all()
        : await queryCollection("blogs").all()

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
