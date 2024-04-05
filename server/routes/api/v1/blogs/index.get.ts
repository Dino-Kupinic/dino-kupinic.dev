export default defineEventHandler(async (event) => {
  try {
    const response = await database.select().from(blogs).all()

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
