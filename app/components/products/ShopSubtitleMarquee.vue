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
    text: "HURRY UP AND BUY! ",
    toneClass: "bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200",
  },
  {
    text: "YOU HAVE TOO MUCH MONEY",
    toneClass: "bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200",
  },
  {
    text: "TAKE THE DEAL YOU LITTLE [Sponge]",
    toneClass:
      "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900 dark:text-fuchsia-200",
  },
] as const
</script>

<template>
  <div
    class="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y-2 border-black bg-neutral-950 py-2"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.18)_0%,rgba(6,182,212,0.16)_45%,rgba(234,179,8,0.18)_100%)]"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.14)_0px,rgba(255,255,255,0.14)_1px,transparent_1px,transparent_3px)] opacity-35"
    />
    <div
      class="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-neutral-950 to-transparent"
    />
    <div
      class="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-neutral-950 to-transparent"
    />

    <div class="shop-subtitle-marquee-track relative z-10 flex w-max">
      <div
        v-for="groupIndex in 2"
        :key="groupIndex"
        class="flex shrink-0 gap-2 pr-2"
        :aria-hidden="groupIndex === 2 ? 'true' : undefined"
      >
        <p
          v-for="subtitle in subtitles"
          :key="`${groupIndex}-${subtitle.text}`"
          :class="[
            'shop-subtitle-marquee-card border-2 border-black px-3 py-1.5 font-mono text-sm font-bold tracking-[0.05em] whitespace-nowrap uppercase italic sm:px-4 sm:text-base',
            '[text-shadow:1px_1px_0_rgba(0,0,0,0.5)]',
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
  animation: shop-subtitle-marquee 24s infinite;
  will-change: transform;
}

.shop-subtitle-marquee-card {
  animation: shop-subtitle-flicker 1.4s infinite;
  box-shadow: 2px 2px 0 0 rgb(0 0 0 / 0.9);
}

@keyframes shop-subtitle-marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@keyframes shop-subtitle-flicker {
  0%,
  100% {
    filter: brightness(1);
  }

  48% {
    filter: brightness(1);
  }

  52% {
    filter: brightness(1.12) saturate(1.1);
  }
}
</style>
