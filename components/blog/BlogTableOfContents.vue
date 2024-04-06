<script setup lang="ts"></script>

<template>
  <div>
    <span>On this page</span>
    <ul>
      <li v-for="x in 5" :key="x">{{ x }} point</li>
    </ul>
  </div>
</template>
