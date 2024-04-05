import { eq } from "drizzle-orm"

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id")

    if (!id || !parseInt(id)) {
      return createError({ statusCode: 500, statusMessage: "invalid id" })
    }

    const author = await database
      .select()
      .from(authors)
      .where(eq(authors.id, parseInt(id)))

    setResponseStatus(event, 200, "success")
    return author
  } catch (err: unknown) {
    const error = err as Error
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    })
  }
})
