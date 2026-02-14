<script setup lang="ts">
import { toast } from "vue-sonner"

const props = defineProps<{
  link: string
}>()

const { siteUrl } = useSiteRuntimeConfig()

const source = ref<string>(`${siteUrl}${props.link}`)
const { copy } = useClipboard({ source })

async function copyToClipboard() {
  await copy(source.value)
  toast.success("Copied to clipboard", {
    position: isMobile.value ? "top-center" : "bottom-right",
  })
}
</script>

<template>
  <Button variant="ghost" size="default" type="button" @click="copyToClipboard">
    <span class="flex items-center gap-1.5 text-sm">
      <Icon name="i-ph-link" size="20" />
      <span>Copy URL</span>
    </span>
  </Button>
</template>
