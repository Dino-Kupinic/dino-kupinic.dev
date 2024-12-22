type SocialItem = {
  icon: string
  name: string
  link: string
}

/**
 * Returns an array of social items.
 * @return {SocialItem[]} An array of social items.
 */
export default function (): SocialItem[] {
  return [
    {
      icon: "i-mdi-github",
      name: "GitHub",
      link: "https://github.com/Dino-Kupinic",
    },
    {
      icon: "i-mdi-instagram",
      name: "Instagram",
      link: "https://www.instagram.com/dinokupinic?igsh=ejhvbTA1dDZrYmFr&utm_source=qr",
    },
    {
      icon: "i-mdi-youtube",
      name: "YouTube",
      link: "https://www.youtube.com/channel/UCeO73z_5j_7U92xByZv3VtA",
    },
  ]
}
