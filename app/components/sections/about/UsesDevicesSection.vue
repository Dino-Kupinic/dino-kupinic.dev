<script setup lang="ts">
const laptop = {
  title: "MacBook Pro",
  description: 'M1 Pro 14", 16GB RAM, 512GB SSD',
  image: "/images/about/macbook-pro.png",
}

const devices = [
  {
    title: "iPhone 15 Pro",
    description: "Natural Titanium, 128GB",
    image: "/images/about/iphone-15-pro.webp",
  },
  {
    title: "AirPods Pro",
    description: "2nd Generation, USB-C",
    image: "/images/about/airpods-pro.png",
  },
  {
    title: "iPad Air 5",
    description: "Spacegrey, 64GB",
    image: "/images/about/ipad-air.webp",
  },
  {
    title: "Apple Pencil",
    description: "2nd Generation",
    image: "/images/about/apple-pencil.png",
  },
]
</script>

<template>
  <section class="my-16 flex flex-col gap-4">
    <SectionHeading>Devices</SectionHeading>
    <section class="flex flex-col gap-4 md:flex-row">
      <UsesItemCover
        :title="laptop.title"
        :description="laptop.description"
        :image="laptop.image"
        class="basis-3/5"
      />
      <div class="grid grid-cols-2 gap-4">
        <UsesItem
          v-for="device in devices"
          :key="device.title"
          :title="device.title"
          :description="device.description"
          :image="device.image"
        />
      </div>
    </section>
  </section>
</template>

<style scoped></style>
