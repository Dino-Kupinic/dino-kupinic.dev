<script setup lang="ts">
const parts = [
  {
    component: "CPU",
    name: "Intel Core i5-13500",
    description: "14 Cores, 20 Threads",
  },
  {
    component: "CPU Cooler",
    name: "DeepCool AG400 BK ARGB",
    description: "Upto 220W TDP, 120mm Fan",
  },
  {
    component: "GPU",
    name: "AMD Radeon RX6700 XT",
    description: "12GB GDDR6",
  },
  {
    component: "RAM",
    name: "Corsair Vengeance LPX",
    description: "2x16GB DDR4 3600MHz",
  },
  {
    component: "Motherboard",
    name: "MSI PRO B760-P WIFI DDR4",
    description: "ATX LGA1700",
  },
  {
    component: "Storage",
    name: "Crucial P3 Plus",
    description: "2TB NVMe M.2",
  },
  {
    component: "PSU",
    name: "Corsair RM750e",
    description: "750W 80+ Gold",
  },
  {
    component: "Case",
    name: "Corsair 4000D Airflow",
    description: "ATX Mid Tower",
  },
  {
    component: "Fans",
    name: "Arctic P12",
    description: "PWM PST A-RGB 120mm Fans (Bundle of 3)",
  },
  {
    component: "Monitor",
    name: "ASUS TUF Gaming VG27AQ",
    description: '27" 1440p 165Hz IPS',
  },
  {
    component: "Keyboard",
    name: "Keychron K8 Pro",
    description: "Hot-swappable, Gateron Red, Aluminum Frame",
  },
  {
    component: "Mouse",
    name: "Razer Deathadder Essential",
    description: "1800 DPI (upto 6000), 2 Side-Buttons",
  },
  {
    component: "Headset",
    name: "Razer Kraken Pro v2",
    description: "Analog 3.5mm, Retractable Mic, with USB Audio Controller",
  },
  {
    component: "Controller",
    name: "Xbox Wireless Controller",
    description: "Robot White",
  },
]
</script>

<template>
  <section class="my-16 flex flex-col gap-4">
    <SectionHeading>PC Setup</SectionHeading>
    <Table>
      <TableCaption class="bg-accent m-3 rounded border border-dashed p-3">
        Bought from
        <NuxtLink to="https://amazon.de" external class="text-blue-500"
          >Amazon</NuxtLink
        >,
        <NuxtLink to="https://mediamarkt.at" external class="text-blue-500"
          >Media Markt</NuxtLink
        >,
        <NuxtLink to="https://haym.info" external class="text-blue-500"
          >haym.infotec</NuxtLink
        >,
        <NuxtLink to="https://mylemon.at" external class="text-blue-500"
          >mylemon</NuxtLink
        >
        and
        <NuxtLink to="https://keychron.de" external class="text-blue-500"
          >Keychron</NuxtLink
        >
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead class="w-25 sm:w-50"> Component </TableHead>
          <TableHead>Name</TableHead>
          <TableHead class="text-right"> Description </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="part in parts" :key="part.component">
          <TableCell class="font-medium"> {{ part.component }} </TableCell>
          <TableCell>{{ part.name }}</TableCell>
          <TableCell class="text-right"> {{ part.description }} </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </section>
</template>
