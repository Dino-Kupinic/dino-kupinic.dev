export default defineEventHandler(async (event) => {
  try {
    const response = await database.query.blogs.findMany()

    if (!response) {
      return createError({
        statusCode: 404,
        statusMessage: "No blogs found",
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
