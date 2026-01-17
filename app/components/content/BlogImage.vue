<script lang="ts" setup>
const colorMode = useColorMode()

defineProps<{
  light: string
  dark: string
  alt: string
}>()
</script>

<template>
  <ClientOnly>
    <NuxtImg
      :src="colorMode.value === 'dark' ? dark : light"
      :alt="alt"
      class="w-full overflow-hidden rounded-xl border"
    />
    <template #fallback>
      <Skeleton class="w-full h-[420px] overflow-hidden rounded-xl border" />
    </template>
  </ClientOnly>
</template>
