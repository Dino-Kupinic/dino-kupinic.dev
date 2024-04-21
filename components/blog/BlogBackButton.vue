<script setup lang="ts"></script>

<template>
  <NuxtLink to="/blog">
    <Button variant="outline">
      <span>
        <Icon name="i-material-symbols-arrow-left-alt-rounded" class="mr-1" />
        {{ $t("blog.back") }}
      </span>
    </Button>
  </NuxtLink>
</template>
