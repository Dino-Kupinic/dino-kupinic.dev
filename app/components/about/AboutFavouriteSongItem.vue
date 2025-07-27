<script setup lang="ts">
</script>

<template>
  <AboutItem icon="i-ph-music-notes-simple-fill">
    <template #header>{{ $t("about.song") }}</template>
    <template #content>
      <div class="flex h-full flex-col justify-between pt-2">
        <div class="grow sm:grow-0">
          <AboutFavouriteSongTitle color="teal">
            Poker Face
          </AboutFavouriteSongTitle>
          <AboutFavouriteSongArtist>Lady Gaga</AboutFavouriteSongArtist>
        </div>
        <div class="p-2 sm:grow ">
          <NuxtImg
            class="w-full overflow-hidden rounded-lg shadow-[0_0px_198px_5px_rgba(58,111,133,0.5)]"
            src="/images/index/poker_face.jpg"
            alt="Poker Face by Lady Gaga"
          />
        </div>
      </div>
    </template>
  </AboutItem>
</template>
