import { eq } from "drizzle-orm"
import type { Category } from "~/types/category"

/**
 * Get a category by its id.
 * @param event The HTTP request containing the category id as a parameter.
 */
export default defineEventHandler(async (event) => {
  try {
    const categoryId = getRouterParam(event, "id")
    if (!categoryId) {
      return createError({
        statusCode: 400,
        statusMessage: "missing 'id' parameter",
      })
    }

    const categoryIdInt = parseInt(categoryId)
    if (isNaN(categoryIdInt) || categoryIdInt <= 0) {
      return createError({
        statusCode: 400,
        statusMessage: "'id' parameter is not a valid positive integer",
      })
    }

    const response: Category | undefined =
      await database.query.categories.findFirst({
        where: eq(categories.id, categoryIdInt),
      })

    if (!response) {
      return createError({
        statusCode: 404,
        statusMessage: "category not found",
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
