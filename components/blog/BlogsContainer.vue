<script setup lang="ts"></script>

<template>
  <div class="grid h-[600px] max-w-[960px] grid-cols-3 grid-rows-9 gap-5">
    <BlogItem
      title="How to get rich"
      :likes="1000"
      :views="30000"
      :date="new Date()"
      author="Dino Kupinic"
      class="row-span-9"
    />
    <BlogItem
      title="How to get rich"
      :likes="1000"
      :views="30000"
      :date="new Date()"
      author="Dino Kupinic"
      class="row-span-4"
    />
    <BlogItem
      title="How to get rich"
      :likes="1000"
      :views="30000"
      :date="new Date()"
      author="Dino Kupinic"
      class="row-span-6"
    />
    <BlogItem
      title="How to get rich"
      :likes="1000"
      :views="30000"
      :date="new Date()"
      author="Dino Kupinic"
      class="row-span-5"
    />
    <BlogItem
      title="How to get rich"
      :likes="1000"
      :views="30000"
      :date="new Date()"
      author="Dino Kupinic"
      class="row-span-3"
    />
  </div>
</template>

<style scoped></style>
