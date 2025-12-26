import type { ParsedContent } from "@nuxt/content"

export interface ProjectContent extends ParsedContent {
  description: string
  icons: string[]
  technologies: string[]
  date: Date
  featured?: boolean
  deployed?: {
    vendor: string
    url: string
    icon: string
  }
  repository?: {
    url: string
  }
}
