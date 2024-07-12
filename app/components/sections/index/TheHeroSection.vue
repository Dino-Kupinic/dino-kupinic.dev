<script setup lang="ts"></script>

<template>
  <IndexSection
    class="mt-12 flex h-auto flex-col justify-between sm:mt-24 sm:gap-6 md:mt-48"
  >
    <div class="m-auto w-auto rounded-lg bg-red-100 dark:bg-red-900">
      <span class="mx-1.5 text-sm font-normal text-red-500 dark:text-red-100">
        This website is in active development!
      </span>
    </div>
    <HeroText class="text-center">Dino Kupinic</HeroText>
    <HeroSubtitle class="text-center">
      {{ $t("hero.profession").toUpperCase() }}
    </HeroSubtitle>
  </IndexSection>
</template>
