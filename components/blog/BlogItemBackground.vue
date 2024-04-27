<script setup lang="ts">
const props = defineProps<{
  imgDark: string
  imgLight: string
}>()

const mode = useColorMode()
const img = useImage()
const path = computed(() => {
  return mode.value == "dark" ? props.imgDark : props.imgLight
})
</script>

<template>
  <NuxtImg
    class="absolute left-0 top-0 h-full w-full overflow-clip object-cover object-top"
    :src="path"
    alt="blog-background"
    loading="lazy"
    :placeholder="img(path, { h: 10, f: 'webp', blur: 2, q: 50 })"
  />
</template>

<style scoped>
NuxtImg {
  color: transparent;
}
</style>
