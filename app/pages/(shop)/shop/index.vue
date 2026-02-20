<script setup lang="ts">
const { data } = useFetch("/api/products")
console.log(data.value)
</script>

<template>
  <!--  <ul>-->
  <!--    <li v-for="product in products.result" :key="product.id">-->
  <!--      {{ product.name }}-->
  <!--    </li>-->
  <!--  </ul>-->
  <p>hi</p>
</template>

<style scoped></style>
