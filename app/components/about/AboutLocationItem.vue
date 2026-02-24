<script setup lang="ts"></script>

<template>
  <AboutItem icon="i-heroicons-map-pin" :no-bottom-padding="true">
    <template #header>Austria</template>
    <template #content>
      <div class="flex h-full items-end justify-center">
        <div class="h-[180px] w-full max-w-[420px] overflow-hidden">
          <AboutLocationGlobe />
        </div>
      </div>
    </template>
  </AboutItem>
</template>
