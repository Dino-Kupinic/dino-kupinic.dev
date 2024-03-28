<script setup lang="ts">
const birthday = +new Date(2006, 5, 25)
const age = ~~((Date.now() - birthday) / 31557600000)
</script>

<template>
  <AboutItem icon="i-ri-cake-2-fill">
    <template #header>{{ $t("about.age") }}</template>
    <template #content>
      <div class="flex h-full items-center justify-center">
        <span class="text-9xl font-bold tracking-wider">
          {{ age }}
        </span>
      </div>
    </template>
  </AboutItem>
</template>
