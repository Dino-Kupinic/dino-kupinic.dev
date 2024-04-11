<script setup lang="ts"></script>

<template>
  <div
    class="mb-32 h-[600px] w-full before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:content-['']"
  ></div>
</template>

<style scoped>
div::before {
  background: linear-gradient(
    270deg,
    rgba(61, 53, 78, 0) 28.87%,
    #aeaeae 45.39%,
    #aeaeae 53.54%,
    rgba(61, 53, 78, 0) 70.06%
  );
}
</style>
