<script setup lang="ts">
const props = defineProps<{
  imgName: string
}>()

const pathDark = computed(() => {
  return `/images/${props.imgName}-dark.webp`
})

const pathLight = computed(() => {
  return `/images/${props.imgName}-light.webp`
})

const path = computed(() => {
  return mode.value == "dark" ? pathDark : pathLight
})

const img = useImage()
const mode = useColorMode()
</script>

<template>
  <NuxtImg
    class="absolute left-0 top-0 h-full w-full overflow-clip object-cover object-top"
    :src="path.value"
    alt="blog-background"
    loading="lazy"
    :placeholder="img(path.value, { h: 10, f: 'png', blur: 2, q: 50 })"
  />
</template>

<style scoped>
NuxtImg {
  color: transparent;
}
</style>
