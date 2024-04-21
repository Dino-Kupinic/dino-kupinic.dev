<script setup lang="ts">
import { useToast } from "~/components/ui/toast"

const props = defineProps<{
  link: string
}>()

const source = ref<string>(props.link)
const { copy, copied, isSupported } = useClipboard({ source })
const { toast } = useToast()

function copyToClipboard() {
  copy(source.value)
  toast({
    title: "Copied to clipboard! 👌🏻",
    description: `Value: ${source.value}`,
  })
}
</script>

<template>
  <ClientOnly>
    <div v-if="isSupported">
      <Button variant="ghost" size="sm" @click="copyToClipboard()">
        <span class="text-sm">
          <Icon name="i-ph-link" class="mr-1" />
          <span v-if="!copied">{{ $t("blog.copy") }}</span>
          <span v-else>Copied!</span>
        </span>
      </Button>
    </div>
    <p v-else>Your browser does not support Clipboard API</p>
    <template #fallback>
      <Skeleton class="h-9 w-24" />
    </template>
  </ClientOnly>
</template>
