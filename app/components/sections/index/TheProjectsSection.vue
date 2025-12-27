<template>
  <IndexSection>
    <SectionHeading class="m-auto">Projects</SectionHeading>
    <ProjectCarousel class="m-auto my-4 sm:my-5" />
    <div class="m-auto">
      <NuxtLink to="/projects">
        <Button
          :size="$device.isMobile ? 'default' : 'sm'"
          class="w-full sm:w-40"
        >
          All Projects
        </Button>
      </NuxtLink>
    </div>
  </IndexSection>
</template>
