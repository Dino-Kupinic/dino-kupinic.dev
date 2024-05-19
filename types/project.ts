import type { ParsedContent } from "@nuxt/content/types"

export interface ProjectContent extends ParsedContent {
  description: string
  icons: string[]
  technologies: string[]
  date: Date
}
