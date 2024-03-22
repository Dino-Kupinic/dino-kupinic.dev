<script setup lang="ts">

</script>

<template>
  <ClientOnly>
    <section class="h-auto flex flex-col justify-between sm:gap-6 mt-12 sm:mt-24 md:mt-48">
      <HeroText class="text-center">Dino Kupinic</HeroText>
      <HeroSubtitle class="text-center">{{ $t("hero.profession").toUpperCase() }}</HeroSubtitle>
    </section>
  </ClientOnly>
</template>
