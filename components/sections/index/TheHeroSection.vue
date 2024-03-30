<script setup lang="ts"></script>

<template>
  <ClientOnly>
    <section
      class="mt-12 flex h-auto flex-col justify-between sm:mt-24 sm:gap-6 md:mt-48"
    >
      <HeroText class="text-center">Dino Kupinic</HeroText>
      <HeroSubtitle class="text-center">
        {{ $t("hero.profession").toUpperCase() }}
      </HeroSubtitle>
    </section>
  </ClientOnly>
</template>
