import { z } from "zod"

export const projectFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  icons: z.array(z.string()).optional(),
  technologies: z.array(z.string()).optional(),
  date: z.date(),
  featured: z.boolean().optional(),
  deployed: z
    .object({
      vendor: z.string().optional(),
      url: z.url().optional(),
      icon: z.string().optional(),
    })
    .optional(),
  repository: z
    .object({
      url: z.url(),
    })
    .optional(),
})
export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>
