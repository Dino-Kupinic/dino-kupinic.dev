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
    name: "Earth Wind & Fire",
    link: "https://www.youtube.com/@earthwindandfire/videos",
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
    name: "Michael Jackson",
    link: "https://www.youtube.com/@MichaelJackson/videos",
    backgroundColor: "green",
  },
  {
    name: "Gotye",
    link: "https://www.youtube.com/@gotye/videos",
    backgroundColor: "pink",
  },
  {
    name: "Nirvana",
    link: "https://www.youtube.com/@nirvana/videos",
    backgroundColor: "yellow",
  },
  {
    name: "Ado",
    link: "https://www.youtube.com/@Ado1024/videos",
    backgroundColor: "teal",
  },
  {
    name: "Boney M.",
    link: "https://www.youtube.com/@boneym.official/videos",
    backgroundColor: "red",
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
