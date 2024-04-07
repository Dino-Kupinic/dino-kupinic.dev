import { z } from "zod"
import type { ParsedContent } from "@nuxt/content/types"

export type Blog = z.infer<typeof selectBlogSchema>

export interface BlogAuthor {
  name: string
  avatar: string
  handle: string
}

export interface BlogContent extends ParsedContent {
  description: string
  date: Date
  image: string
  authors: BlogAuthor[]
}
