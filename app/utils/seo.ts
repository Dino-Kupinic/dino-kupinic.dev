export const useSiteUrl = (path: string | undefined, siteUrl: string) => {
  if (!path) return undefined

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path
  }

  return new URL(path, siteUrl).toString()
}
