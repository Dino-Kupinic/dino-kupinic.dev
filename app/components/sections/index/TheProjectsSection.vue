<script setup lang="ts">
const viewport = useViewport()
</script>

<template>
  <IndexSection>
    <SectionHeading class="m-auto">{{ $t("hero.projects") }}</SectionHeading>
    <ProjectCarousel class="m-auto my-4 sm:my-5" />
    <div class="m-auto">
      <NuxtLink to="/projects">
        <Button
          variant="gradient"
          :size="viewport.isGreaterThan('mobileWide') ? 'default' : 'sm'"
          class="w-full sm:w-40"
        >
          {{ $t("hero.allProjects") }}
        </Button>
      </NuxtLink>
    </div>
  </IndexSection>
</template>
