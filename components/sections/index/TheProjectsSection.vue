<script setup lang="ts">
const viewport = useViewport()
</script>

<template>
  <ClientOnly>
    <section class="mt-16 sm:mt-36 sm:p-0">
      <SectionHeading class="m-auto">{{ $t("hero.projects") }}</SectionHeading>
      <ProjectCarousel class="m-auto my-3 sm:my-5" />
      <div class="m-auto">
        <Button
          variant="gradient"
          :size="viewport.isGreaterThan('mobileWide') ? 'default' : 'xs'"
          class="w-full sm:w-40"
        >
          {{ $t("hero.allProjects") }}
        </Button>
      </div>
    </section>
  </ClientOnly>
</template>
