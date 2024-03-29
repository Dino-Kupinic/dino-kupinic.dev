<script setup lang="ts">
type Artist = {
  name: string
  link: string
  backgroundColor:
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "pink"
    | "purple"
    | "teal"
}

const artists: Artist[] = [
  {
    name: "Dua Lipa",
    link: "https://www.youtube.com/@dualipa",
    backgroundColor: "red",
  },
  {
    name: "Lady Gaga",
    link: "https://www.youtube.com/@LadyGaga",
    backgroundColor: "purple",
  },
  {
    name: "No Doubt",
    link: "https://www.youtube.com/@nodoubt",
    backgroundColor: "blue",
  },
  {
    name: "Tainted",
    link: "https://www.youtube.com/@taintedsc/videos",
    backgroundColor: "orange",
  },
  {
    name: "Bon Jovi",
    link: "https://www.youtube.com/@bonjovi/videos",
    backgroundColor: "yellow",
  },
  {
    name: "PitBull",
    link: "https://www.youtube.com/@Pitbull/videos",
    backgroundColor: "green",
  },
  {
    name: "Ava Max",
    link: "https://www.youtube.com/@avamax/videos",
    backgroundColor: "pink",
  },
  {
    name: "Boney M.",
    link: "https://www.youtube.com/@boneym.official/videos",
    backgroundColor: "red",
  },
  {
    name: "Bonnie Tyler",
    link: "https://www.youtube.com/@BonnieTylerOfficial/videos",
    backgroundColor: "yellow",
  },
  {
    name: "Troye Sivan",
    link: "https://www.youtube.com/@troyesivan/videos",
    backgroundColor: "teal",
  },
]
</script>

<template>
  <AboutItem icon="i-mdi-account-music">
    <template #header>{{ $t("about.artist") }}</template>
    <template #content>
      <div class="flex flex-col gap-2 pt-3">
        <NuxtLink
          v-for="artist in artists"
          :key="artist.name"
          :to="artist.link"
          class="decoration-1 hover:underline"
        >
          <AboutFavouriteArtistName :color="artist.backgroundColor">
            {{ artist.name }}
          </AboutFavouriteArtistName>
        </NuxtLink>
      </div>
    </template>
  </AboutItem>
</template>

<style scoped></style>
