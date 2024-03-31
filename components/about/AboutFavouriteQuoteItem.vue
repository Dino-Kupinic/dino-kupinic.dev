<script setup lang="ts"></script>

<template>
  <AboutItem icon="i-ri-double-quotes-l">
    <template #header>{{ $t("about.quote") }}</template>
    <template #content>
      <div class="flex h-full flex-col">
        <p
          class="font-serif line-clamp-3 grow items-center pt-4 text-center text-2xl"
        >
          If you can't explain it simply,<br />
          you don't understand it<br />
          well enough.
        </p>
        <div>— Albert Einstein</div>
      </div>
    </template>
  </AboutItem>
</template>
