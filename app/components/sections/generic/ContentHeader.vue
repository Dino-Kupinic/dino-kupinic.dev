<script setup lang="ts">
const route = useRoute()
const props = defineProps<{
  base: string
  title: string
}>()

const viewport = useViewport()
const strippedTitle = computed(() => {
  if (viewport.isGreaterThan("tablet") || props.title.length <= 30) {
    return props.title
  }
  return props.title.substring(0, 30).concat("...")
})
</script>

<template>
  <div class="h-auto w-full pb-2 sm:pb-6">
    <div class="mb-8 mt-4 w-full sm:mb-12">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink as-child>
              <NuxtLink :to="base">
                <slot name="breadcrumb" />
              </NuxtLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink as-child>
              <NuxtLink :to="route.path">
                {{ strippedTitle }}
              </NuxtLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
    <slot />
  </div>
</template>
