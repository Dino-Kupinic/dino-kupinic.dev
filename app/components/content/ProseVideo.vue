<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from "ufo"
import { useRuntimeConfig, computed } from "#imports"

const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  controls: {
    type: Boolean,
    default: true,
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
  muted: {
    type: Boolean,
    default: false,
  },
  loop: {
    type: Boolean,
    default: false,
  },
  playsinline: {
    type: Boolean,
    default: true,
  },
  poster: {
    type: String,
    default: "",
  },
  preload: {
    type: String,
    default: "metadata",
  },
})

const runtimeConfig = useRuntimeConfig()

const refinedSrc = computed(() => {
  if (props.src?.startsWith("/") && !props.src.startsWith("//")) {
    const _base = withLeadingSlash(withTrailingSlash(runtimeConfig.app.baseURL))
    if (_base !== "/" && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src)
    }
  }
  return props.src
})

const refinedPoster = computed(() => {
  if (props.poster?.startsWith("/") && !props.poster.startsWith("//")) {
    const _base = withLeadingSlash(withTrailingSlash(runtimeConfig.app.baseURL))
    if (_base !== "/" && !props.poster.startsWith(_base)) {
      return joinURL(_base, props.poster)
    }
  }
  return props.poster
})
</script>

<template>
  <video
    :src="refinedSrc"
    :controls="controls"
    :autoplay="autoplay"
    :muted="muted"
    :loop="loop"
    :playsinline="playsinline"
    :poster="refinedPoster || undefined"
    :preload="preload"
    class="my-6 w-full rounded-xl border"
  >
    <slot />
  </video>
</template>
