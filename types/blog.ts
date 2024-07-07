import type { z } from "zod"
import type { ParsedContent } from "@nuxt/content"

export type Blog = z.infer<typeof selectBlogSchema>

export type BlogImage = {
  dark: string
  light: string
}

export interface BlogAuthor {
  name: string
  avatar: string
}

export interface BlogContentAuthor extends BlogAuthor {
  name: string
  avatar: string
  handle: string
}

export interface BlogDisplay {
  title: string
  likes: number
  views: number
  path: string
  date: Date
  author: BlogAuthor[]
  image: BlogImage
  class?: string
}

export interface BlogContent extends ParsedContent {
  description: string
  date: Date
  image: BlogImage
  authors: BlogContentAuthor[]
}
