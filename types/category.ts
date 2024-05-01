import type { z } from "zod"

export type Category = z.infer<typeof selectCategorySchema>
