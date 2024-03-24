<script setup lang="ts">
const img = useImage()
</script>

<template>
  <div class="h-full w-full overflow-hidden rounded-md border">
    <NuxtImg
      class="h-full w-full object-cover"
      src="/images/gradientbg.jpg"
      fit="cover"
      alt="blog-background"
      :placeholder="
        img(`/images/gradientbg.jpg`, { h: 10, f: 'png', blur: 2, q: 50 })
      "
    />
  </div>
</template>

<style scoped></style>
