<script setup lang="ts">
const viewport = useViewport()
</script>

<template>
  <ClientOnly>
    <IndexSection>
      <SectionHeading class="m-auto">{{ $t("hero.projects") }}</SectionHeading>
      <ProjectCarousel class="m-auto my-4 sm:my-5" />
      <div class="m-auto">
        <Button
          variant="gradient"
          :size="viewport.isGreaterThan('mobileWide') ? 'default' : 'sm'"
          class="w-full sm:w-40"
        >
          {{ $t("hero.allProjects") }}
        </Button>
      </div>
    </IndexSection>
  </ClientOnly>
</template>
