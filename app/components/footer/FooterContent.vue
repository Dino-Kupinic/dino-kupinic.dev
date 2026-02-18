<script setup lang="ts"></script>

<template>
  <div class="m-auto mb-24 h-auto w-full">
    <div
      class="m-auto my-12 grid h-full max-w-5xl grid-cols-1 gap-4 px-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-8 lg:px-0"
    >
      <FooterContentLeft class="order-1 sm:order-2 lg:order-1" />
      <FooterContentCenter
        class="order-3 pt-8 sm:order-1 sm:col-span-2 sm:pt-0 lg:order-2 lg:col-span-1"
      />
      <FooterContentRight class="order-2 sm:order-3 lg:order-3" />
    </div>
  </div>
</template>
