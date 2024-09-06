<script setup lang="ts">
const devices = [
  {
    title: "iPhone 15 Pro",
    description: "Natural Titanium, 128GB",
    image: "/images/about/iphone-15-pro.webp",
  },
  {
    title: "iPad Air 5",
    description: "Spacegrey, 64GB",
    image: "/images/about/ipad-air.webp",
  },
  {
    title: "AirPods Pro 2nd Gen",
    description: "USB-C Charging Case",
    image: "/images/about/airpods-pro.png",
  },
]
</script>

<template>
  <UsesGrid>
    <UsesItem
      v-for="device in devices"
      :key="device.title"
      :title="device.title"
      :description="device.description"
      :image="device.image"
    />
  </UsesGrid>
</template>

<style scoped></style>
