<script lang="ts" setup>
const colorMode = useColorMode()

const props = defineProps<{
  light: string
  dark: string
  alt: string
}>()

const isPreviewOpen = ref(false)
let previousBodyOverflow = ""
const MIN_ZOOM = 1
const MAX_ZOOM = 3
const ZOOM_STEP = 0.25
const previewScale = ref(MIN_ZOOM)
const previewViewport = ref<HTMLElement | null>(null)
const previewTransformOrigin = ref("50% 50%")

const currentImageSrc = computed(() =>
  colorMode.value === "dark" ? props.dark : props.light,
)

const downloadFileName = computed(() => {
  const source = currentImageSrc.value ?? ""
  const pathWithoutQuery = source.split(/[?#]/)[0] ?? ""
  const fileName = pathWithoutQuery.split("/").pop()
  return fileName || "image"
})

const setZoom = (value: number) => {
  const clampedValue = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, value))
  previewScale.value = Number(clampedValue.toFixed(2))
}

const zoomIn = () => {
  setZoom(previewScale.value + ZOOM_STEP)
}

const zoomOut = () => {
  setZoom(previewScale.value - ZOOM_STEP)
}

const updateTransformOrigin = (event: MouseEvent | WheelEvent) => {
  const viewport = previewViewport.value
  if (!viewport) return

  const rect = viewport.getBoundingClientRect()
  if (!rect.width || !rect.height) return

  const x = ((event.clientX - rect.left) / rect.width) * 100
  const y = ((event.clientY - rect.top) / rect.height) * 100

  const clampedX = Math.min(100, Math.max(0, x))
  const clampedY = Math.min(100, Math.max(0, y))

  previewTransformOrigin.value = `${clampedX}% ${clampedY}%`
}

const onPreviewWheel = (event: WheelEvent) => {
  updateTransformOrigin(event)

  if (event.deltaY < 0) {
    zoomIn()
    return
  }
  zoomOut()
}

const onPreviewDoubleClick = (event: MouseEvent) => {
  updateTransformOrigin(event)
  if (previewScale.value === MIN_ZOOM) {
    setZoom(2)
    return
  }
  setZoom(MIN_ZOOM)
}

const openPreview = () => {
  if (!currentImageSrc.value) return
  setZoom(MIN_ZOOM)
  previewTransformOrigin.value = "50% 50%"
  isPreviewOpen.value = true
}

const closePreview = () => {
  setZoom(MIN_ZOOM)
  previewTransformOrigin.value = "50% 50%"
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
  <ClientOnly>
    <NuxtImg
      :src="currentImageSrc"
      :alt="props.alt"
      class="mb-4 w-full cursor-zoom-in overflow-hidden rounded-xl border"
      role="button"
      tabindex="0"
      @click="openPreview"
      @keydown.enter.prevent="openPreview"
      @keydown.space.prevent="openPreview"
    />
    <template #fallback>
      <Skeleton class="h-[420px] w-full overflow-hidden rounded-xl border" />
    </template>
  </ClientOnly>

  <Teleport to="body">
    <div
      v-if="isPreviewOpen"
      class="fixed inset-0 z-[100] bg-black/80 p-4 backdrop-blur-sm sm:p-8"
      @click.self="closePreview"
    >
      <div class="mx-auto flex h-full max-w-7xl flex-col items-center">
        <div
          ref="previewViewport"
          class="flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden hover:cursor-zoom-in"
          @wheel.prevent="onPreviewWheel"
          @dblclick.prevent="onPreviewDoubleClick"
        >
          <NuxtImg
            :src="currentImageSrc"
            :alt="props.alt"
            :draggable="false"
            class="max-h-full max-w-full rounded-xl border border-white/20 object-contain transition-transform duration-150 ease-out"
            :style="{
              transform: `scale(${previewScale})`,
              transformOrigin: previewTransformOrigin,
            }"
          />
        </div>

        <div class="mt-4 flex flex-wrap items-center justify-center gap-2">
          <Button as-child variant="outline">
            <a :href="currentImageSrc" :download="downloadFileName">Download</a>
          </Button>
          <Button type="button" @click="closePreview">Close</Button>
        </div>

        <p
          v-if="props.alt"
          class="mt-3 text-center text-sm leading-5 font-medium tracking-wide text-white/80"
        >
          {{ props.alt }}
        </p>
      </div>
    </div>
  </Teleport>
</template>
