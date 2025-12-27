import { defineContentConfig, defineCollection } from "@nuxt/content"
import { blogFrontmatterSchema } from "./app/schemas/blogSchema"
import { projectFrontmatterSchema } from "./app/schemas/projectSchema"

export default defineContentConfig({
  collections: {
    blogs: defineCollection({
      schema: blogFrontmatterSchema,
      type: "data",
      source: "blogs/*.md",
    }),
    projects: defineCollection({
      schema: projectFrontmatterSchema,
      type: "data",
      source: "projects/*.md",
    }),
    misc: defineCollection({
      type: "page",
      source: "misc/*.md",
    }),
  },
})
