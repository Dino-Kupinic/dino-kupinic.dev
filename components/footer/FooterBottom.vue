<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <div
    class="m-auto my-12 max-w-[1024px] flex-col justify-between space-y-4 px-5"
  >
    <p class="text-primary dark:text-secondary">
      &copy; {{ currentYear }} Dino Kupinic. {{ $t("footer.rights") }}
    </p>
    <FooterSocials />
  </div>
</template>
