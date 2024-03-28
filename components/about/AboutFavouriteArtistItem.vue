<script setup lang="ts">
type Artist = {
  name: string
  backgroundColor:
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "pink"
    | "purple"
}

const artists: Artist[] = [
  {
    name: "Dua Lipa",
    backgroundColor: "red",
  },
  {
    name: "Lady Gaga",
    backgroundColor: "purple",
  },
  {
    name: "No Doubt",
    backgroundColor: "blue",
  },
  {
    name: "Tainted",
    backgroundColor: "orange",
  },
  {
    name: "Bon Jovi",
    backgroundColor: "yellow",
  },
  {
    name: "PitBull",
    backgroundColor: "green",
  },
  {
    name: "Ava Max",
    backgroundColor: "pink",
  },
]
</script>

<template>
  <AboutItem icon="i-mdi-account-music">
    <template #header>{{ $t("about.artist") }}</template>
    <template #content>
      <div class="flex flex-col gap-2 pt-3">
        <AboutFavouriteArtistName
          v-for="artist in artists"
          :key="artist.name"
          :color="artist.backgroundColor"
        >
          {{ artist.name }}
        </AboutFavouriteArtistName>
      </div>
    </template>
  </AboutItem>
</template>

<style scoped></style>
