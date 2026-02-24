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
    name: "Miley Cyrus",
    link: "https://open.spotify.com/artist/5YGY8feqx7naU7z4HrwZM6?si=3a61fd4824ee4dec",
    backgroundColor: "purple",
  },
  {
    name: "Britney Spears",
    link: "https://open.spotify.com/artist/26dSoYclwsYLMAKD3tpOr4?si=nZt-STxNSJiLLD6M5OdB4g",
    backgroundColor: "red",
  },
  {
    name: "Crush 40",
    link: "https://open.spotify.com/artist/4gNEgDZhEu6ldAI2wWdZsL?si=489fec2294b74cd7",
    backgroundColor: "yellow",
  },
  {
    name: "Linkin Park",
    link: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz?si=5bde26b3993c4cad",
    backgroundColor: "blue",
  },
]
</script>

<template>
  <AboutItem icon="i-ph-music-notes">
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
