<script setup lang="ts">
const viewport = useViewport()
</script>

<template>
  <ClientOnly>
    <section class="mt-16 px-5 sm:mt-40 sm:p-0">
      <SectionHeading class="m-auto max-w-[960px] pl-2 sm:pl-4">
        {{ $t("hero.blog") }}
      </SectionHeading>
      <FeaturedBlogsContainer class="m-auto my-3 pl-2 sm:my-5 sm:pl-4" />
      <div class="m-auto max-w-[960px] pl-2 sm:px-4">
        <Button
          variant="gradient"
          :size="viewport.isGreaterThan('mobileWide') ? 'default' : 'xs'"
          class="w-full sm:w-32"
        >
          {{ $t("hero.readMore") }}
        </Button>
      </div>
    </section>
  </ClientOnly>
</template>
