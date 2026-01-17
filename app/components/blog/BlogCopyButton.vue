<script setup lang="ts">
const props = defineProps<{
  link: string
}>()

const source = ref<string>(`https://dino-kupinic.dev${props.link}`)
const { copy } = useClipboard({ source })

function copyToClipboard() {
  copy(source.value)
}
</script>

<template>
  <Button variant="ghost" size="default" @click="copyToClipboard()">
    <span class="text-sm flex items-center gap-1.5">
      <Icon name="i-ph-link" size="20" />
      <span>Copy URL</span>
    </span>
  </Button>
</template>
