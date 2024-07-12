<script setup lang="ts"></script>

<template>
  <SectionHeading>{{ $t("comments.title") }}</SectionHeading>
  <ClientOnly>
    <CommentInputContainer />
    <template #fallback>
      <div class="flex min-h-96 w-full items-center justify-center">
        <Icon name="i-svg-spinners-ring-resize" class="mr-1" />
        <p>Loading...</p>
      </div>
    </template>
  </ClientOnly>
</template>
