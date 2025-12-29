export interface BlogAuthor {
  name: string
  avatar: string
}

export interface BlogContentAuthor extends BlogAuthor {
  name: string
  avatar: string
  handle: string
}

export interface BlogDisplay extends BlogContent {
  path: string
  class?: string
}

export interface BlogContent {
  title: string
  description: string
  date: Date
  authors: BlogContentAuthor[]
  tags: string[]
  seo: {
    image: {
      src: string
      alt: string
    }
  }
  related?: string[]
}
