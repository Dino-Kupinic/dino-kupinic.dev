<script setup lang="ts">
type BlogItem = {
  icon: string
  text: string
  link: string
}

const items = ref<BlogItem[]>([
  {
    icon: "i-simple-icons-x",
    text: "Follow on X",
    link: "https://x.com/DinoKupinic",
  },
  {
    icon: "i-ic-round-favorite",
    text: "Support me",
    link: "https://ko-fi.com/dinokupinic",
  },
])
</script>

<template>
  <div>
    <p class="mb-3 text-lg font-semibold">Links</p>
    <NuxtLink
      v-for="item in items"
      :key="item.text"
      :to="item.link"
      class="my-1.5 flex"
      external
      target="_blank"
      rel="noreferrer"
    >
      <span
        class="hover:text-foreground dark:hover:text-foreground flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-500"
      >
        <Icon :name="item.icon" size="20" />
        {{ item.text }}
        <Icon name="i-ci-arrow-up-right-md" class="mb-1 h-4 w-4" />
      </span>
    </NuxtLink>
  </div>
</template>
