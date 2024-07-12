<script setup lang="ts"></script>

<template>
  <AboutItem icon="i-ph-music-notes-simple-fill">
    <template #header>{{ $t("about.song") }}</template>
    <template #content>
      <div class="flex h-full flex-col justify-between pt-2">
        <div class="grow sm:grow-0">
          <AboutFavouriteSongTitle color="yellow">
            Houdini
          </AboutFavouriteSongTitle>
          <AboutFavouriteSongArtist>Dua Lipa</AboutFavouriteSongArtist>
        </div>
        <div class="p-2 sm:grow">
          <NuxtImg
            class="w-full overflow-hidden rounded-lg border border-none shadow-[0_0px_120px_3px_rgba(202,138,4,0.4)] dark:border-yellow-700"
            src="/images/index/houdini_dua_lipa.png"
            alt="Training Season Dua Lipa"
          />
        </div>
      </div>
    </template>
  </AboutItem>
</template>
