<script setup lang="ts">
const data = await useFetch("/api/v1/test")
const data2 = await useFetch("/api/v1/user")
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
    <pre>{{ data2 }}</pre>
  </div>
</template>

<style scoped></style>
