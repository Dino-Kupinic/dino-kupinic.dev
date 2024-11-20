<script setup lang="ts"></script>

<template>
  <AboutItem icon="i-ph-music-notes-simple-fill">
    <template #header>{{ $t("about.song") }}</template>
    <template #content>
      <div class="flex h-full flex-col justify-between pt-2">
        <div class="grow sm:grow-0">
          <AboutFavouriteSongTitle color="blue">
            Don't Speak
          </AboutFavouriteSongTitle>
          <AboutFavouriteSongArtist>No Doubt</AboutFavouriteSongArtist>
        </div>
        <div class="p-2 sm:grow">
          <NuxtImg
            class="w-full overflow-hidden rounded-lg border border-none shadow-[0_0px_120px_3px_rgba(29,78,216,0.4)] dark:border-blue-700"
            src="/images/index/dont_speak.jpg"
            alt="Don't Speak No Doubt"
          />
        </div>
      </div>
    </template>
  </AboutItem>
</template>
