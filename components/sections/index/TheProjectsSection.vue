<script setup lang="ts">
const viewport = useViewport()
</script>

<template>
  <ClientOnly>
    <section class="mt-16 px-5 sm:mt-40 sm:p-0">
      <SectionHeading class="m-auto max-w-[960px] pl-2 sm:pl-4">{{
        $t("hero.projects")
      }}</SectionHeading>
      <ProjectCarousel class="m-auto my-3 sm:my-5" />
      <div class="m-auto max-w-[960px] pl-2 sm:px-4">
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
