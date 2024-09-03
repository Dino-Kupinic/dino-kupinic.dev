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
    name: "Sabrina Carpenter",
    link: "https://www.youtube.com/channel/UCPKWE1H6xhxwPlqUlKgHb_w",
    backgroundColor: "blue",
  },
  {
    name: "Tainted",
    link: "https://www.youtube.com/@taintedsc/videos",
    backgroundColor: "orange",
  },
  {
    name: "Ariana Grande",
    link: "https://www.youtube.com/@ArianaGrande/videos",
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
    name: "Clover!",
    link: "https://www.youtube.com/channel/UCR9ZNh-c-aXU6qOURo1lMrg",
    backgroundColor: "teal",
  },
  {
    name: "d3r",
    link: "https://www.youtube.com/@d3r/featured",
    backgroundColor: "red",
  },
  {
    name: "Tate McRae",
    link: "https://www.youtube.com/@TateMcRae/videos",
    backgroundColor: "orange",
  },
  {
    name: "Kaneda7",
    link: "https://www.youtube.com/channel/UCq8XyJ2xTACSZkt3pidTFrg",
    backgroundColor: "blue",
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
          external
          target="_blank"
          rel="noopener noreferrer"
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
