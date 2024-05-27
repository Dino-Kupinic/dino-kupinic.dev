<script setup lang="ts">
const route = useRoute()
defineProps<{
  title: string
  base: string
}>()
</script>

<template>
  <div class="h-auto w-full pb-2 sm:pb-6">
    <div class="mb-8 w-full sm:mb-12">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink as-child>
              <NuxtLink :to="base">
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
                  {{ title }}
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
