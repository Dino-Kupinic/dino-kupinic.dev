<script setup lang="ts"></script>

<template>
  <AboutItem icon="i-ion-game-controller">
    <template #header>{{ $t("about.hobbies") }}</template>
    <template #content>
      <div class="flex h-full flex-col gap-3 pt-2">
        <div class="flex grow items-center rounded-lg border p-1">
          <span class="w-full text-center text-2xl">Gaming</span>
        </div>
        <div class="flex grow items-center rounded-lg border p-1">
          <span class="w-full text-center text-2xl">Programming</span>
        </div>
      </div>
    </template>
  </AboutItem>
</template>
