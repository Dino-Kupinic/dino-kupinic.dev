<script setup lang="ts">
import type { NuxtError } from "#app"

const props = defineProps<{ error: NuxtError }>()
const route = useRoute()

const statusCode = computed(() => {
  const code = Number(props.error?.status)
  return Number.isFinite(code) && code > 0 ? code : 500
})

const title = computed(() => {
  if (statusCode.value === 404) return "Page not found"
  if (statusCode.value >= 500) return "Server error"
  if (statusCode.value === 403) return "Access denied"
  return "Request failed"
})

const description = computed(() => {
  if (statusCode.value === 404)
    return "The page you requested does not exist or may have been moved."
  if (statusCode.value >= 500)
    return "Something failed on our side. Please retry in a moment."
  return "We could not complete your request. Please retry or head back home."
})

const primaryMessage = computed(() => {
  const candidate = props.error?.message
  return candidate?.trim() || "Unknown error"
})

const errorPath = computed(() => {
  return route.fullPath || "/"
})

const technicalDetails = computed(() =>
  JSON.stringify(
    {
      statusCode: statusCode.value,
      statusMessage: props.error?.statusMessage ?? null,
      message: props.error?.message ?? null,
      path: route.fullPath || "/",
      fatal: props.error?.fatal ?? null,
      unhandled: props.error?.unhandled ?? null,
      data: props.error?.data ?? null,
      cause: props.error?.cause ?? null,
    },
    null,
    2,
  ),
)

async function handleRetry() {
  await clearError({ redirect: errorPath.value })
}

async function handleHome() {
  await clearError({ redirect: "/" })
}

useSeoMeta({
  title: () => `${statusCode.value} ${title.value}`,
  description: () => description.value,
  robots: "noindex, nofollow",
})
</script>

<template>
  <div
    class="bg-background relative isolate flex min-h-screen items-center overflow-hidden px-4 py-8 sm:px-6 sm:py-10"
  >
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div
        class="bg-destructive/10 absolute -top-24 -left-20 h-72 w-72 rounded-full blur-3xl"
      />
      <div
        class="bg-primary/10 absolute -right-20 -bottom-24 h-80 w-80 rounded-full blur-3xl"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_top,oklch(0.75_0_0/.1),transparent_20%)]"
      />
    </div>

    <div
      class="border-border bg-background relative mx-auto w-full max-w-4xl rounded-lg border p-6 shadow-2xl backdrop-blur-sm sm:p-10"
    >
      <div class="grid items-start gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
        <div
          class="border-border/70 bg-muted/40 inline-flex w-fit items-center gap-3 rounded-lg border px-4 py-3 font-mono text-sm"
        >
          <span
            class="bg-destructive inline-flex h-2.5 w-2.5 animate-pulse rounded-full"
          />
          <span>HTTP {{ statusCode }}</span>
        </div>

        <div class="min-w-0 space-y-6">
          <div class="space-y-3">
            <SectionHeading size="lg"> {{ title }} 😾 </SectionHeading>
            <p class="text-muted-foreground text-base sm:text-lg">
              {{ description }}
            </p>
            <p class="text-foreground/90 text-sm font-medium">
              {{ primaryMessage }}
            </p>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row">
            <Button class="sm:min-w-36" @click="handleRetry">
              Try again
            </Button>
            <Button variant="outline" class="sm:min-w-36" @click="handleHome">
              Back home
            </Button>
          </div>

          <details class="border-border/70 bg-background/80 rounded-md border">
            <summary
              class="text-muted-foreground cursor-pointer list-none px-4 py-3 text-xs font-semibold tracking-wide uppercase"
            >
              Technical details
            </summary>
            <div class="border-border/70 border-t p-4">
              <pre
                class="bg-muted/40 max-h-64 max-w-full overflow-x-auto overflow-y-auto rounded p-3 font-mono text-xs leading-relaxed whitespace-pre"
                >{{ technicalDetails }}</pre
              >
            </div>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>
