import { eq } from "drizzle-orm"

export default defineEventHandler(async (event) => {
  try {
    const p = getRouterParam(event, "path")
    if (!p) {
      return createError({
        statusCode: 400,
        statusMessage: "missing 'path' parameter",
      })
    }

    const response = await database.query.blogs.findFirst({
      where: eq(blogs.path, `/blogs/${p}`),
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
