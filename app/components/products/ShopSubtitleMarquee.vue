<script setup lang="ts">
const subtitles = [
  {
    text: "LOOKING FOR [Irresistible Deals] THAT WILL [Blow Your Mind!?]",
    toneClass:
      "bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-200",
  },
  {
    text: "AN AWESOME PRICE.! AN ABSOLUTELY [[Terrifying]] PRICE",
    toneClass: "bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200",
  },
  {
    text: "I JUST NEED YOUR [Account Details] AND THE [Number on theB4ck]!",
    toneClass:
      "bg-yellow-100 text-yellow-500 dark:bg-yellow-800 dark:text-yellow-200",
  },
  {
    text: "YOU HAVE TOO MUCH MONEY",
    toneClass: "bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200",
  },
  {
    text: "TAKE THE DEAL YOU LITTLE [Sponge]",
    toneClass:
      "bg-purple-100 text-purple-500 dark:bg-purple-800 dark:text-purple-200",
  },
] as const
</script>

<template>
  <div class="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
    <div class="shop-subtitle-marquee-track flex w-max">
      <div
        v-for="groupIndex in 2"
        :key="groupIndex"
        class="flex shrink-0"
        :aria-hidden="groupIndex === 2 ? 'true' : undefined"
      >
        <p
          v-for="subtitle in subtitles"
          :key="`${groupIndex}-${subtitle.text}`"
          :class="[
            'mr-2 px-5 py-1.5 font-mono text-lg font-normal tracking-tight whitespace-nowrap italic sm:text-xl',
            subtitle.toneClass,
          ]"
        >
          {{ subtitle.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shop-subtitle-marquee-track {
  animation: shop-subtitle-marquee 24s linear infinite;
}

@keyframes shop-subtitle-marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}
</style>
