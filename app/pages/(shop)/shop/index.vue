<script setup lang="ts">
const { data } = useFetch("/api/products")
console.log(data.value)
</script>

<template>
  <ul>
    <li v-for="product in data" :key="product.id">
      {{ product.name }}
    </li>
  </ul>
</template>

<style scoped></style>
