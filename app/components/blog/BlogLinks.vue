<script setup lang="ts">
type BlogItem = {
  icon: string
  text: string
  link: string
}

const props = defineProps<{
  canonicalUrl: string
  mobileGrid?: boolean
}>()

const items = computed<BlogItem[]>(() => [
  {
    icon: "i-simple-icons-openai",
    text: "Open in ChatGPT",
    link: `https://chatgpt.com/?q=${encodeURIComponent(props.canonicalUrl)}`,
  },
  {
    icon: "i-simple-icons-anthropic",
    text: "Open in Claude",
    link: `https://claude.ai/new?q=${encodeURIComponent(props.canonicalUrl)}`,
  },
  {
    icon: "i-simple-icons-x",
    text: "Follow on X",
    link: "https://x.com/DinoKupinic",
  },
  {
    icon: "i-heroicons-heart-solid",
    text: "Support me",
    link: "https://ko-fi.com/dinokupinic",
  },
])
</script>

<template>
  <div>
    <p class="mb-3 text-lg font-semibold">Links</p>
    <div :class="props.mobileGrid ? 'grid grid-cols-2 gap-2' : ''">
      <NuxtLink
        v-for="item in items"
        :key="item.text"
        :to="item.link"
        :class="
          props.mobileGrid ? 'flex min-w-0 rounded border p-2' : 'my-1.5 flex'
        "
        external
        target="_blank"
        rel="noreferrer"
      >
        <span
          class="hover:text-foreground dark:hover:text-foreground flex min-w-0 items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-500"
        >
          <Icon :name="item.icon" size="20" />
          <span class="truncate">
            {{ item.text }}
          </span>
        </span>
      </NuxtLink>
    </div>
  </div>
</template>
