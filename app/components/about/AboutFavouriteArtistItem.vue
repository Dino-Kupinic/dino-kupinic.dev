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
    link: "https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we?si=LHwN-361QOGmiL8X2e9zFw",
    backgroundColor: "red",
  },
  {
    name: "Lady Gaga",
    link: "https://open.spotify.com/artist/1HY2Jd0NmPuamShAr6KMms?si=hjIbQs_OQPeUrzLkAR0Fww",
    backgroundColor: "purple",
  },
  {
    name: "Michael Jackson",
    link: "https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm?si=amJGfgpMRIq6WwlE51yrbw",
    backgroundColor: "green",
  },
  {
    name: "Linkin Park",
    link: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz?si=2bEBTiN9SxSvu15okEe21w",
    backgroundColor: "yellow",
  },
  {
    name: "Troye Sivan",
    link: "https://open.spotify.com/artist/3WGpXCj9YhhfX11TToZcXP?si=44fa43ac5e1646bb",
    backgroundColor: "pink",
  },
  {
    name: "No Doubt",
    link: "https://open.spotify.com/artist/0cQbJU1aAzvbEmTuljWLlF?si=OCkAS8VzSyGVzHaBRfsHjA",
    backgroundColor: "green",
  },
  {
    name: "asteria",
    link: "https://open.spotify.com/artist/0I7VmE5LkRmWoHltutTUh9?si=GU7QnLc5QhKTUGbfEfgO7g",
    backgroundColor: "teal",
  },
  {
    name: "d3r",
    link: "https://open.spotify.com/artist/41PE0deubI6MpwYruSEWHG?si=lWuwK-hnTuG7ALEWUy3QBg",
    backgroundColor: "purple",
  },
  {
    name: "Disturbed",
    link: "https://open.spotify.com/artist/3TOqt5oJwL9BE2NG9MEwDa?si=I_1N2GSLQuexj712hFOecQ",
    backgroundColor: "orange",
  },
  {
    name: "luvwillow",
    link: "https://open.spotify.com/artist/3QMquHHgjA58upVZerNHNx?si=BnPdvHnTSoShTaZr6SZ_jA",
    backgroundColor: "red",
  },
  {
    name: "TOMORROW X TOGETHER",
    link: "https://open.spotify.com/artist/0ghlgldX5Dd6720Q3qFyQB?si=aFCGGct0RjixZ9vPC70_rg",
    backgroundColor: "yellow",
  },
  {
    name: "m1v",
    link: "https://open.spotify.com/artist/5pfVvTVQiPCMClDlE3bj0S?si=YA5KuKaLRtKb-tYEENhuDA",
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
