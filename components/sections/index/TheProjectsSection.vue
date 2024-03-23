<script setup lang="ts">
const viewport = useViewport()
</script>

<template>
  <ClientOnly>
    <section class="p-3 mt-16 sm:mt-40">
      <SectionHeading class="max-w-[960px] m-auto pl-8">{{
        $t("hero.projects")
      }}</SectionHeading>
      <ProjectCarousel class="m-auto my-2 sm:my-5 px-7" />
      <div class="max-w-[960px] m-auto px-8">
        <Button
          variant="gradient"
          :size="viewport.isGreaterThan('mobileWide') ? 'default' : 'xs'"
          class="w-full sm:w-32"
        >
          {{ $t("hero.allProjects") }}
        </Button>
      </div>
    </section>
  </ClientOnly>
</template>
