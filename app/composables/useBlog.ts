export type BlogQuery = Omit<
  NonNullable<
    Awaited<ReturnType<ReturnType<typeof queryCollection<"blogs">>["first"]>>
  >,
  "date"
> & { date: Date }

export const useBlog = () => {
  const blogs = useState<BlogQuery[]>("blogs", () => [])

  async function fetchBlogs() {
    if (blogs.value.length) return

    try {
      const blogsContent = await queryCollection("blogs").limit(5).all()

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
