<script setup lang="ts">
type SocialItem = {
  icon: string
  name: string
  link: string
}

const socialItems: SocialItem[] = [
  {
    icon: "i-mdi-github",
    name: "GitHub",
    link: "https://github.com/Dino-Kupinic",
  },
  {
    icon: "i-ic-baseline-discord",
    name: "Discord",
    link: "https://discord.gg/y3DeWTBEGR",
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
</script>

<template>
  <AboutItem icon="i-heroicons-link-16-solid">
    <template #header>{{ $t("about.socials") }}</template>
    <template #content>
      <div class="flex h-full w-auto items-center justify-center">
        <div class="flex flex-col gap-2">
          <NuxtLink
            v-for="item in socialItems"
            :key="item.name"
            :to="item.link"
            class="decoration-1 hover:text-primary hover:underline"
            target="_blank"
            rel="noopener"
            external
          >
            <div class="flex w-full items-center space-x-2">
              <Icon :name="item.icon" />
              <span>{{ item.name }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </template>
  </AboutItem>
</template>
