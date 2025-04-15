<script setup lang="ts">
const os = [
  {
    title: "Windows 11",
    description: "Gaming",
    image: "/images/about/os/windows.png",
  },
  {
    title: "MacOS",
    description: "Programming",
    image: "/images/about/os/macos.avif",
  },
]

const dev = [
  {
    title: "JetBrains IDE",
    description: "IntelliJ, PHPStorm etc.",
    image: "/images/about/dev/intellij.png",
  },
  {
    title: "Neovim",
    description: "File editing",
    image: "/images/about/dev/neovim.png",
  },
  {
    title: "Docker",
    description: "Containerization",
    image: "/images/about/dev/docker.png",
  },
  {
    title: "Postman",
    description: "API testing",
    image: "/images/about/dev/postman.webp",
  },
  {
    title: "iTerm2",
    description: "Terminal emulator",
    image: "/images/about/dev/iterm2.png",
  },
]

const apps = [
  {
    title: "Apple Books",
    description: "Reading",
    image: "/images/about/apps/apple-books.png",
  },
  {
    title: "Apple Calendar",
    description: "Managing events",
    image: "/images/about/apps/apple-calendar.png",
  },
  {
    title: "Apple Reminders",
    description: "Tasks & To-Dos",
    image: "/images/about/apps/apple-reminders.png",
  },
  {
    title: "Apple Mail",
    description: "Email",
    image: "/images/about/apps/apple-mail.png",
  },
  {
    title: "Discord",
    description: "Chat & Voice",
    image: "/images/about/apps/discord-app.png",
  },
  {
    title: "Apple Notes",
    description: "Personal notes",
    image: "/images/about/apps/apple-notes.avif",
  },
  {
    title: "Figma",
    description: "Design",
    image: "/images/about/apps/figma.avif",
  },
  {
    title: "Word",
    description: "Text documents",
    image: "/images/about/apps/word.avif",
  },
  {
    title: "Excel",
    description: "Spreadsheets",
    image: "/images/about/apps/excel.avif",
  },
  {
    title: "PowerPoint",
    description: "Presentations",
    image: "/images/about/apps/powerpoint.avif",
  },
  {
    title: "Final Cut Pro",
    description: "Video editing",
    image: "/images/about/apps/final-cut-pro.avif",
  },
  {
    title: "Pixelmator Pro",
    description: "Quick Image editing",
    image: "/images/about/apps/pixelmator-pro.avif",
  },
  {
    title: "Photoshop",
    description: "Image editing",
    image: "/images/about/apps/photoshop.png",
  },
  {
    title: "iStat Menus",
    description: "System monitoring",
    image: "/images/about/apps/istat.avif",
  },
  {
    title: "Aseprite",
    description: "Pixel art",
    image: "/images/about/apps/aseprite.png",
  },
  {
    title: "GeoGebra",
    description: "Mathematics",
    image: "/images/about/apps/geogebra.png",
  },
  {
    title: "OBS",
    description: "Streaming, Recording",
    image: "/images/about/apps/obs.png",
  },
  {
    title: "Blender",
    description: "3D modeling",
    image: "/images/about/apps/blender.png",
  },
]
</script>

<template>
  <section class="my-16 flex flex-col gap-4">
    <SectionHeading>Desktop Operating Systems</SectionHeading>
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <UsesItem
        v-for="o in os"
        :key="o.title"
        :title="o.title"
        :description="o.description"
        :image="o.image"
      />
    </div>
  </section>
  <section class="my-16 flex flex-col gap-4">
    <SectionHeading>Development</SectionHeading>
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
      <UsesItem
        v-for="d in dev"
        :key="d.title"
        :title="d.title"
        :description="d.description"
        :image="d.image"
      />
    </div>
  </section>
  <section class="my-16 flex flex-col gap-4">
    <SectionHeading>Apps</SectionHeading>
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
      <UsesItem
        v-for="app in apps"
        :key="app.title"
        :title="app.title"
        :description="app.description"
        :image="app.image"
      />
    </div>
  </section>
</template>
