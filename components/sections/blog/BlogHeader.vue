<script setup lang="ts"></script>

<template>
  <div class="h-auto w-full pb-6">
    <div class="mb-6 w-full">
      <NuxtLink to="/blog">
        <Button
          variant="link"
          class="pl-0 font-light text-primary hover:no-underline dark:text-secondary dark:hover:text-foreground"
        >
          <Icon name="i-basil-arrow-left-outline" class="mr-1" />
          <span class="tracking-wide"> Back to blog </span>
        </Button>
      </NuxtLink>
    </div>
    <slot />
  </div>
</template>
