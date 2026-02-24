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
      icon: "i-simple-icons-github",
      name: "GitHub",
      link: "https://github.com/Dino-Kupinic",
    },
    {
      icon: "i-simple-icons-instagram",
      name: "Instagram",
      link: "https://www.instagram.com/dinokupinic/",
    },
    {
      icon: "i-simple-icons-youtube",
      name: "YouTube",
      link: "https://www.youtube.com/channel/UCeO73z_5j_7U92xByZv3VtA",
    },
    {
      icon: "i-simple-icons-x",
      name: "X (Twitter)",
      link: "https://www.x.com/DinoKupinic",
    },
  ]
}
