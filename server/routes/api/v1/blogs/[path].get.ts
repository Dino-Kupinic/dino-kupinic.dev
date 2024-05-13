import { eq } from "drizzle-orm"
import type { Blog } from "~/types/blog"

/**
 * Get a blog by its path.
 * @param event The HTTP request containing the blog path as a parameter.
 */
export default defineEventHandler(async (event) => {
  try {
    const path = getRouterParam(event, "path")
    if (!path) {
      return createError({
        statusCode: 400,
        statusMessage: "missing 'path' parameter",
      })
    }

    const response: Blog | undefined = await database.query.blogs.findFirst({
      where: eq(blogs.path, `/blogs/${path}`),
    })

    if (!response) {
      return createError({
        statusCode: 404,
        statusMessage: "blog not found",
      })
    }

    setResponseStatus(event, 200, "success")
    return response
  } catch (err: unknown) {
    const error = err as Error
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    })
  }
})
