<script setup lang="ts">
import AboutFavouriteSongArtist from "~/components/about/AboutFavouriteSongArtist.vue"
</script>

<template>
  <AboutItem icon="i-ph-music-notes-simple-fill">
    <template #header>{{ $t("about.song") }}</template>
    <template #content>
      <div class="flex h-full flex-col justify-between pt-2">
        <div class="grow sm:grow-0">
          <AboutFavouriteSongTitle color="red">
            TRAINING SEASON
          </AboutFavouriteSongTitle>
          <AboutFavouriteSongArtist>Dua Lipa</AboutFavouriteSongArtist>
        </div>
        <div class="sm:grow">
          <NuxtImg
            class="w-full overflow-hidden rounded-lg"
            src="/images/index/trainingseason.webp"
            alt="Training Season Dua Lipa"
          />
        </div>
      </div>
    </template>
  </AboutItem>
</template>
