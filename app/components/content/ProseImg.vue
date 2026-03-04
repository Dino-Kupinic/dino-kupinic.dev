<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from "ufo"
import { useRuntimeConfig, computed } from "#imports"

const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
})

const isPreviewOpen = ref(false)
const runtimeConfig = useRuntimeConfig()
let previousBodyOverflow = ""

const refinedSrc = computed(() => {
  if (props.src?.startsWith("/") && !props.src.startsWith("//")) {
    const _base = withLeadingSlash(withTrailingSlash(runtimeConfig.app.baseURL))
    if (_base !== "/" && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src)
    }
  }
  return props.src
})

const downloadFileName = computed(() => {
  const source = refinedSrc.value ?? ""
  const pathWithoutQuery = source.split(/[?#]/)[0] ?? ""
  const fileName = pathWithoutQuery.split("/").pop()
  return fileName || "image"
})

const openPreview = () => {
  if (!refinedSrc.value) return
  isPreviewOpen.value = true
}

const closePreview = () => {
  isPreviewOpen.value = false
}

const onEscape = (event: KeyboardEvent) => {
  if (event.key !== "Escape" || !isPreviewOpen.value) return
  closePreview()
}

watch(isPreviewOpen, (isOpen) => {
  if (!import.meta.client) return

  if (isOpen) {
    previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onEscape)
    return
  }

  document.body.style.overflow = previousBodyOverflow
  window.removeEventListener("keydown", onEscape)
})

onBeforeUnmount(() => {
  if (!import.meta.client) return
  window.removeEventListener("keydown", onEscape)
  document.body.style.overflow = previousBodyOverflow
})
</script>

<template>
  <NuxtImg
    :src="refinedSrc"
    :alt="alt"
    :width="width"
    :height="height"
    class="w-full cursor-zoom-in overflow-hidden rounded-xl border"
    role="button"
    tabindex="0"
    @click="openPreview"
    @keydown.enter.prevent="openPreview"
    @keydown.space.prevent="openPreview"
  />

  <Teleport to="body">
    <div
      v-if="isPreviewOpen"
      class="fixed inset-0 z-100 bg-black/80 p-4 backdrop-blur-sm sm:p-8"
      @click.self="closePreview"
    >
      <div class="mx-auto flex h-full max-w-7xl flex-col items-center">
        <div class="flex min-h-0 flex-1 items-center justify-center">
          <NuxtImg
            :src="refinedSrc"
            :alt="alt"
            class="max-h-full max-w-full rounded-xl border border-white/20 object-contain"
          />
        </div>

        <div class="mt-4 flex flex-wrap items-center justify-center gap-2">
          <Button as-child variant="outline">
            <a :href="refinedSrc" :download="downloadFileName">Download</a>
          </Button>
          <Button type="button" @click="closePreview">Close</Button>
        </div>

        <p
          v-if="alt"
          class="mt-3 text-center text-sm leading-5 font-medium tracking-wide text-white/80"
        >
          {{ alt }}
        </p>
      </div>
    </div>
  </Teleport>
</template>
