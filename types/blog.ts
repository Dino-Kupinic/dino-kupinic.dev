import { z } from "zod"

export type Blog = z.infer<typeof selectBlogSchema>
