<script setup lang="ts"></script>

<template>
  <div class="h-auto w-full pb-6">
    <div class="mb-8 w-full sm:mb-12">
      <NuxtLink to="/blog">
        <Button
          variant="link"
          class="pl-0 font-light text-primary hover:no-underline dark:text-secondary dark:hover:text-foreground"
        >
          <Icon name="i-basil-arrow-left-outline" class="mr-1" />
          <span class="text-base tracking-wide sm:text-sm"> Back to Blog </span>
        </Button>
      </NuxtLink>
    </div>
    <slot />
  </div>
</template>
