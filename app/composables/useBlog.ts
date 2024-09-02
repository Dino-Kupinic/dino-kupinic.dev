import type { Blog, BlogDisplay } from "~/types/blog"

export const useBlog = () => {
  const blogs = useState<BlogDisplay[]>("blogs", () => [])

  async function fetchBlogs() {
    if (blogs.value.length) return

    try {
      const queriedBlogs = await queryContent("/blogs").find()

      for (const blog of queriedBlogs) {
        const { data } = await useLazyFetch<Blog>(`/api/v1${blog._path}`)

        blogs.value.push({
          title: blog.title || "",
          author: blog.authors,
          date: new Date(blog.date),
          likes: data.value?.likes || 0,
          views: data.value?.views || 0,
          path: blog._path as string,
          image: {
            dark: blog.image_dark,
            light: blog.image_light,
          },
        })
      }
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
