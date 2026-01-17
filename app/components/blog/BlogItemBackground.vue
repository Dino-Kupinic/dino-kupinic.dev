<script setup lang="ts">
defineProps<{
  image: string
}>()

const img = useImage()
</script>

<template>
  <NuxtImg
    class="absolute top-0 left-0 h-full w-full overflow-clip object-cover object-top"
    :src="image"
    alt="blog-background"
    loading="lazy"
  />
  <!--    :placeholder="img(image, { h: 10, f: 'webp', blur: 2, q: 50 })"-->
</template>

<style scoped>
NuxtImg {
  color: transparent;
}
</style>
