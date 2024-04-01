<script setup lang="ts"></script>

<template>
  <section class="my-8 sm:my-12">
    <div
      class="flex flex-col items-center justify-between space-y-3 sm:flex-row"
    >
      <SectionHeading class="w-full text-left" size="md">
        {{ $t("blog.pageTitle") }}
      </SectionHeading>
      <BlogSearch />
    </div>
    <BlogCategories />
  </section>
</template>

<style scoped></style>
