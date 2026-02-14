<script setup lang="ts">
const DEFAULT_WIDTH: string = "80px"
const DEFAULT_HEIGHT: string = "35px"

withDefaults(
  defineProps<{
    width?: string
    height?: string
  }>(),
  {
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  },
)
</script>

<template>
  <div
    class="transition-transform duration-300 ease-in-out hover:scale-105 dark:text-[hsl(var(--foreground))]"
  >
    <svg
      class="invert dark:invert-0"
      :width="width"
      :height="height"
      viewBox="56 39 409 179"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="56" y="51" width="154" height="154" rx="16" fill="white" />
      <path
        d="M132.5 80L143.389 113.513H178.626L150.119 134.225L161.008 167.737L132.5 147.025L103.992 167.737L114.881 134.225L86.3738 113.513H121.611L132.5 80Z"
        fill="black"
      />
      <path
        d="M297.783 182H257.419L275.288 74.3636H314.443C325.375 74.3636 334.485 76.5885 341.773 81.0383C349.096 85.4531 354.264 91.795 357.277 100.064C360.325 108.298 360.903 118.108 359.011 129.496C357.189 140.498 353.528 149.923 348.027 157.771C342.561 165.62 335.554 171.629 327.004 175.798C318.455 179.933 308.714 182 297.783 182ZM287.061 159.821H299.412C305.438 159.821 310.764 158.735 315.389 156.562C320.049 154.355 323.903 150.834 326.952 145.999C330 141.128 332.172 134.734 333.469 126.815C334.73 119.247 334.678 113.273 333.311 108.893C331.98 104.479 329.387 101.325 325.533 99.4332C321.714 97.5061 316.721 96.5426 310.554 96.5426H297.625L287.061 159.821ZM353.688 182L371.558 74.3636H397.573L390.058 119.878H391.477L434.573 74.3636H465.214L419.227 122.401L448.028 182H416.914L397.363 139.692L384.539 152.989L379.704 182H353.688Z"
        fill="white"
      />
    </svg>
  </div>
</template>
