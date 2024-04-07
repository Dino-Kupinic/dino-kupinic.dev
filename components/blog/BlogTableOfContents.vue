<script setup lang="ts"></script>

<template>
  <div>
    <span>Table of Contents</span>
    <ul>
      <li v-for="x in 5" :key="x">{{ x }} point</li>
    </ul>
  </div>
</template>
