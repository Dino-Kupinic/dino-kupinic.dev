<script setup lang="ts">
import { useToast } from "~/components/ui/toast"

const props = defineProps<{
  link: string
}>()

const source = ref<string>(`https://dino-kupinic.dev${props.link}`)
const { copy, isSupported } = useClipboard({ source })
const { toast } = useToast()
const { t } = useI18n()

function copyToClipboard() {
  copy(source.value)
  toast({
    title: t("clipboard.copy"),
    description: source.value,
  })
}
</script>

<template>
  <ClientOnly>
    <div v-if="isSupported">
      <Button variant="ghost" size="default" @click="copyToClipboard()">
        <span class="text-sm">
          <Icon name="i-ph-link" class="mr-1" />
          <span>{{ $t("blog.copy") }}</span>
        </span>
      </Button>
    </div>
    <p v-else>{{ $t("copy.unsupported") }}</p>
    <template #fallback>
      <Skeleton class="h-10 w-28" />
    </template>
  </ClientOnly>
</template>
