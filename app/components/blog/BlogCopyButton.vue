<script setup lang="ts">
import { toast } from "vue-sonner"

const props = defineProps<{
  link: string
}>()

const { siteUrl } = useSiteRuntimeConfig()

const source = ref<string>(`${siteUrl}${props.link}`)
const toastPosition = computed(() =>
  isMobile.value ? "top-center" : "bottom-right",
)
const { copy, copied, isSupported } = useClipboard({
  source,
  legacy: true,
})

async function copyToClipboard() {
  if (!isSupported.value) {
    toast.error("Clipboard is not available in this environment.", {
      position: toastPosition.value,
    })
    return
  }

  try {
    await copy(source.value)

    if (!copied.value) {
      toast.error("Could not copy URL.", {
        position: toastPosition.value,
      })
      return
    }

    toast.success("Copied to clipboard", {
      position: toastPosition.value,
    })
  } catch {
    toast.error("Could not copy URL.", {
      position: toastPosition.value,
    })
  }
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
