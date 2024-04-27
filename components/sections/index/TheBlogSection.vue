<script setup lang="ts">
const viewport = useViewport()
</script>

<template>
  <IndexSection>
    <SectionHeading class="m-auto">
      {{ $t("hero.blog") }}
    </SectionHeading>
    <FeaturedBlogsContainer class="m-auto my-4 sm:my-5" />
    <div class="m-auto">
      <NuxtLink to="/blog">
        <Button
          variant="gradient"
          :size="viewport.isGreaterThan('mobileWide') ? 'default' : 'sm'"
          class="w-full sm:w-40"
        >
          {{ $t("hero.readMore") }}
        </Button>
      </NuxtLink>
    </div>
  </IndexSection>
</template>
