<script setup lang="ts">
import AboutFavouriteSongArtist from "~/components/about/AboutFavouriteSongArtist.vue"
</script>

<template>
  <AboutItem icon="i-ph-music-notes-simple-fill">
    <template #header>{{ $t("about.song") }}</template>
    <template #content>
      <div class="flex h-full flex-col justify-evenly pt-2">
        <div>
          <AboutFavouriteSongTitle color="red">
            TRAINING SEASON
          </AboutFavouriteSongTitle>
          <AboutFavouriteSongArtist>Dua Lipa</AboutFavouriteSongArtist>
        </div>
        <div>
          <NuxtImg
            class="overflow-hidden rounded-lg"
            src="/images/index/trainingseason.png"
          />
        </div>
      </div>
    </template>
  </AboutItem>
</template>
