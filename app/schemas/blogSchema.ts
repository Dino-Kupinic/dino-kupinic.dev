import { z } from "zod"

export const authorSchema = z.object({
  name: z.string(),
  avatar: z.url(),
  handle: z.string(),
})

export const seoImageSchema = z.object({
  src: z.string(),
  alt: z.string(),
})

export const seoSchema = z.object({
  image: seoImageSchema.optional(),
})

export const blogFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.date(),
  authors: z.array(authorSchema),
  tags: z.array(z.string()).optional(),
  related: z.array(z.string()).optional(),
  seo: seoSchema.optional(),
})
export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>
