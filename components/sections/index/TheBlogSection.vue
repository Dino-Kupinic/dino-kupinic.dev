<script setup lang="ts"></script>

<template>
  <ClientOnly>
    <section class="mt-16 px-5 sm:mt-40 sm:p-0">
      <SectionHeading class="m-auto max-w-[960px] pl-2 sm:pl-4">
        {{ $t("hero.blog") }}
      </SectionHeading>
      <BlogsContainer class="m-auto my-3 pl-2 sm:my-5 sm:pl-4" />
    </section>
  </ClientOnly>
</template>
