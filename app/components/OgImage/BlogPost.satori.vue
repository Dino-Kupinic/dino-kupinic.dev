<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: "title",
  },
)
const siteUrl = useRuntimeConfig().public.siteUrl

// TODO: fix this not working (https://github.com/nuxt-modules/og-image/issues/441)
</script>

<template>
  <div
    class="relative flex h-full w-full overflow-hidden"
    style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)"
  >
    <div
      class="relative z-10 flex h-full w-full flex-col justify-between py-14 pr-16 pl-12"
    >
      <h1
        class="text-foreground max-w-[90%] font-sans text-[72px] leading-[1.1] font-semibold tracking-[-0.0075em]"
        style="display: block; line-clamp: 2; text-overflow: ellipsis"
      >
        {{ title }}
      </h1>
      <div class="flex items-center gap-3">
        <div class="h-3 w-3 rounded-full bg-blue-500" />
        <p
          class="text-[26px] font-semibold text-slate-500"
          style="display: block; line-clamp: 1; text-overflow: ellipsis"
        >
          {{ siteUrl }}
        </p>
      </div>
    </div>
  </div>
</template>
