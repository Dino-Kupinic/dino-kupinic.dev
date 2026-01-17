<template>
  <IndexSection>
    <SectionHeading class="m-auto"> Blog </SectionHeading>
    <FeaturedBlogsContainer class="m-auto my-4 sm:my-5" />
    <div class="m-auto">
      <NuxtLink to="/blog">
        <Button
          :size="$device.isMobile ? 'default' : 'sm'"
          class="w-full sm:w-40"
        >
          Read me
        </Button>
      </NuxtLink>
    </div>
  </IndexSection>
</template>
