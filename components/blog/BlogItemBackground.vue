<script setup lang="ts">
const img = useImage()
</script>

<template>
  <NuxtImg
    class="h-full w-full object-cover"
    src="/images/gradientbg.jpg"
    alt="blog-background"
    :placeholder="
      img(`/images/gradientbg.jpg`, { h: 10, f: 'png', blur: 2, q: 50 })
    "
  />
</template>

<style scoped></style>
