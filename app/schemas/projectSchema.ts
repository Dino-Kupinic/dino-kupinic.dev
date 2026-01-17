import { z } from "zod"

export const deployedSchema = z.object({
  vendor: z.string().optional(),
  url: z.url().optional(),
  icon: z.string().optional(),
})

export const projectFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  icons: z.array(z.string()).optional(),
  technologies: z.array(z.string()).optional(),
  date: z.date(),
  featured: z.boolean().optional(),
  deployed: deployedSchema.optional(),
  repository: z
    .object({
      url: z.url(),
    })
    .optional(),
})
export type Project = z.infer<typeof projectFrontmatterSchema>
