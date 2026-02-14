type SiteRuntimeConfig = {
  siteUrl: string
  siteName: string
  siteDescription: string
  siteOgImage: string
}

export const useSiteRuntimeConfig = (): SiteRuntimeConfig => {
  const config = useRuntimeConfig()

  return {
    siteUrl: String(config.public.siteUrl),
    siteName: String(config.public.siteName),
    siteDescription: String(config.public.siteDescription),
    siteOgImage: String(config.public.siteOgImage),
  }
}
