export const useBlog = () => {
  const blogs = useState<any[]>("blogs", () => [])

  async function fetchBlogs() {
    if (blogs.value.length) return

    try {
      const blogsContent = await queryCollection("blogs").limit(5).all()

      blogs.value = blogsContent.map((blog) => ({
        ...blog,
        date: new Date(blog.date),
        path: blog.path as string,
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
