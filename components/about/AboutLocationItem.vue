<script setup lang="ts"></script>

<template>
  <AboutItem icon="i-ic-baseline-location-on">
    <template #header>{{ $t("about.country") }}</template>
    <template #content>
      <AboutLocationGlobe />
    </template>
  </AboutItem>
</template>

<style scoped></style>
