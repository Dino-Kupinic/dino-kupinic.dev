<script setup lang="ts"></script>

<template>
  <ClientOnly>
    <IndexSection>
      <SectionHeading class="m-auto">{{ $t("hero.aboutMe") }}</SectionHeading>
      <div>
        <AboutContainer class="my-3 sm:my-5" />
      </div>
    </IndexSection>
  </ClientOnly>
</template>

<style scoped></style>
