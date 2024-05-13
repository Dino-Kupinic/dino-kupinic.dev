import type { Category } from "~/types/category"

export default defineEventHandler(async (event) => {
  try {
    const response: Category[] | null = await database
      .select()
      .from(categories)
      .orderBy(categories.text)
      .all()

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
