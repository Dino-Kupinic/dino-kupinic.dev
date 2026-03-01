import { defineContentConfig, defineCollection } from "@nuxt/content"
import { blogFrontmatterSchema } from "./app/schemas/blogSchema"
import { projectFrontmatterSchema } from "./app/schemas/projectSchema"
import { z } from "zod"

export default defineContentConfig({
  collections: {
    blogs: defineCollection({
      schema: blogFrontmatterSchema,
      type: "page",
      source: "blogs/*.md",
      indexes: [{ columns: ["date"] }, { columns: ["tags"] }],
    }),
    projects: defineCollection({
      schema: projectFrontmatterSchema,
      type: "page",
      source: "project/*.md",
      indexes: [
        { columns: ["date"] },
        { columns: ["featured"] },
        { columns: ["technologies"] },
        { columns: ["featured", "date"] },
      ],
    }),
    misc: defineCollection({
      type: "page",
      source: "misc/*.md",
      schema: z.object({
        rawbody: z.string(),
      }),
    }),
  },
})
