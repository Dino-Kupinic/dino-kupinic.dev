import type { Category } from "~/types/category"

export default defineEventHandler(async () => {
  try {
    const response: Category[] | null = await database
      .select()
      .from(categories)
      .all()
    return response
  } catch (err: unknown) {
    const error = err as Error
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    })
  }
})
