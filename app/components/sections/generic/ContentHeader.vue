<script setup lang="ts">
const route = useRoute()
const props = defineProps<{
  title: string
}>()

const strippedTitle = computed(() => {
  if (props.title.length <= 30) {
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
              <NuxtLink to="/blog">
                <div class="flex items-center">
                  <slot name="breadcrumb" />
                </div>
              </NuxtLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink as-child>
              <NuxtLink :to="route.path">
                <span class="text-sm tracking-wide">
                  {{ strippedTitle }}
                </span>
              </NuxtLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
    <slot />
  </div>
</template>
