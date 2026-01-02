<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <div
    class="m-auto max-w-5xl flex-col justify-between space-y-4 px-5 pb-10 lg:px-0"
  >
    <p class="text-primary dark:text-secondary">
      &copy; {{ currentYear }} Dino Kupinic. All rights reserved.
    </p>
    <FooterSocials />
  </div>
</template>
