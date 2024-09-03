import type { BlogContent, BlogDisplay } from "~/types/blog"

export const useBlog = () => {
  const blogs = useState<BlogDisplay[]>("blogs", () => [])

  async function fetchBlogs() {
    if (blogs.value.length) return

    try {
      const blogsContent = await queryContent<BlogContent>("/blogs").find()

      blogs.value = blogsContent.map((blog) => ({
        ...blog,
        date: new Date(blog.date),
        path: blog._path as string,
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
