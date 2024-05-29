<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <div
    class="m-auto max-w-[1024px] flex-col justify-between space-y-4 px-5 pb-6 lg:px-0"
  >
    <p class="text-primary dark:text-secondary">
      &copy; {{ currentYear }} Dino Kupinic. {{ $t("footer.rights") }}
    </p>
    <div class="flex justify-between">
      <FooterSocials />
      <FooterMadeWith />
    </div>
  </div>
</template>
