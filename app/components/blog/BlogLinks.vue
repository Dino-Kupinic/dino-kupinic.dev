<script setup lang="ts">
type BlogItem = {
  icon: string
  text: string
  link: string
}

const { t, locale } = useI18n()
const items = ref<BlogItem[]>([])

watch(
  locale,
  () => {
    items.value = [
      {
        icon: "i-ic-baseline-discord",
        text: t("blog.links.chat"),
        link: "https://discord.gg/y3DeWTBEGR",
      },
      {
        icon: "i-simple-icons-x",
        text: t("blog.links.follow"),
        link: "https://x.com/DinoKupinic",
      },
      {
        icon: "i-ic-round-favorite",
        text: t("blog.links.support"),
        link: "https://ko-fi.com/dinokupinic",
      },
    ]
  },
  { immediate: true },
)
</script>

<template>
  <div>
    <p class="mb-3 text-lg font-semibold">Links</p>
    <NuxtLink
      v-for="item in items"
      :key="item.text"
      :to="item.link"
      class="my-1.5 flex"
    >
      <span
        class="text-sm text-neutral-500 hover:text-foreground dark:text-neutral-500 dark:hover:text-foreground"
      >
        <Icon :name="item.icon" class="mr-1" />
        {{ item.text }}
        <Icon name="i-ci-arrow-up-right-md" class="mb-1 h-4 w-4" />
      </span>
    </NuxtLink>
  </div>
</template>
