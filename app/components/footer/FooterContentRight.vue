<script setup lang="ts">
type LocalTimeInfo = {
  time: string
  offset: string
}

const localtime = ref<LocalTimeInfo>({
  time: "",
  offset: "",
})

function updateTimeAndOffset() {
  const viennaTime = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Vienna",
  })

  const time = new Date(viennaTime)
  const viennaOffsetInMinutes = time.getTimezoneOffset()

  const sign = viennaOffsetInMinutes > 0 ? "-" : "+"
  const hours = Math.abs(Math.floor(viennaOffsetInMinutes / 60))
    .toString()
    .padStart(2, "0")
  const minutes = Math.abs(viennaOffsetInMinutes % 60)
    .toString()
    .padStart(2, "0")
  const offsetString = `UTC ${sign}${hours}:${minutes}`

  const timeString = time.toString().substring(15, 24)
  localtime.value = {
    time: timeString,
    offset: offsetString,
  }
}

onMounted(() => {
  updateTimeAndOffset()
  setInterval(updateTimeAndOffset, 1000)
})
</script>

<template>
  <div class="flex h-auto space-x-3 sm:flex-col sm:space-x-0 sm:space-y-3">
    <div class="flex w-full flex-col justify-between gap-3">
      <div
        class="flex w-full flex-col space-y-3 rounded-lg border bg-background p-3 pb-5 pt-6 sm:w-64 sm:py-3"
      >
        <div>
          <p class="font-semibold">{{ $t("footer.localTime") }}</p>
          <ClientOnly>
            <div class="h-auto w-full truncate dark:text-secondary">
              {{ localtime.time }}, {{ localtime.offset }}
            </div>
            <template #fallback>
              <Skeleton class="h-6 w-full" />
            </template>
          </ClientOnly>
        </div>
      </div>
      <div
        class="flex w-full flex-col space-y-3 rounded-lg border bg-background px-4 py-2 sm:w-64"
      >
        <div>
          <div class="flex h-auto w-full items-center gap-3">
            <span class="relative flex h-3 w-3">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex h-3 w-3 rounded-full bg-green-500"
              ></span>
            </span>
            <span> Open for work </span>
          </div>
        </div>
      </div>
      <ThemeSelection />
    </div>
  </div>
</template>
