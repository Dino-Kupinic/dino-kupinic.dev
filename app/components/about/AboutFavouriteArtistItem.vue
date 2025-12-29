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
    name: "Gwen Stefani",
    link: "https://open.spotify.com/artist/4yiQZ8tQPux8cPriYMWUFP?si=baq4V29EQAOIBVwX_SyHFA",
    backgroundColor: "green",
  },
  {
    name: "Charli XCX",
    link: "https://open.spotify.com/artist/25uiPmTg16RbhZWAqwLBy5?si=VrMxzZlEQ5S9tOBGKUcM5g",
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
    name: "Avril Lavigne",
    link: "https://open.spotify.com/artist/0p4nmQO2msCgU4IF37Wi3j?si=RRUJr37sS52th0Ef3LCOJg",
    backgroundColor: "teal",
  },
  {
    name: "Ariana Grande",
    link: "https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR?si=voSoudvmTXypa_QuDt3h4A",
    backgroundColor: "orange",
  },
  {
    name: "d3r",
    link: "https://open.spotify.com/artist/41PE0deubI6MpwYruSEWHG?si=lWuwK-hnTuG7ALEWUy3QBg",
    backgroundColor: "purple",
  },
  {
    name: "luvwillow",
    link: "https://open.spotify.com/artist/3QMquHHgjA58upVZerNHNx?si=BnPdvHnTSoShTaZr6SZ_jA",
    backgroundColor: "red",
  },
  {
    name: "6arelyhuman",
    link: "https://open.spotify.com/artist/1oYXEVbGh1L7EWGm9C68cN?si=6FTDkrz8SFuhi5oGbVjC9g",
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
    <template #header>Favorite Artists</template>
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
