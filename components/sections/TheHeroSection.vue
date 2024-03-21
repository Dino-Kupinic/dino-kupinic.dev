<script setup lang="ts">

import HeroSubtitle from "~/components/typography/HeroSubtitle.vue"
</script>

<template>
  <main class="h-[600px]">
    <HeroText class="text-center">Dino Kupinic</HeroText>
    <HeroSubtitle>{{ $t("hero.profession") }}</HeroSubtitle>
  </main>
</template>
