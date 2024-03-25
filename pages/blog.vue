<script setup lang="ts">
const data = await useFetch("/api/v1/test")
const data2 = await useFetch("/api/v1/user")
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
    <pre>{{ data2 }}</pre>
    <NuxtLink to="/api/login" external> Sign in </NuxtLink>
    <NuxtLink to="/api/register" external> Sign up </NuxtLink>
  </div>
</template>

<style scoped></style>
