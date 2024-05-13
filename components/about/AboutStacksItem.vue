<script setup lang="ts">
type StackItem = {
  tooltip: string
  icon: string
}

const languages: StackItem[] = [
  { tooltip: "HTML", icon: "i-ri-html5-fill" },
  { tooltip: "CSS", icon: "i-ion-logo-css3" },
  { tooltip: "TypeScript", icon: "i-akar-icons-typescript-fill" },
  { tooltip: "JavaScript", icon: "i-akar-icons-javascript-fill" },
  { tooltip: "C++", icon: "i-simple-icons-cplusplus" },
  { tooltip: "C", icon: "i-simple-icons-c" },
  { tooltip: "Java", icon: "i-ant-design-java-outlined" },
  { tooltip: "PHP", icon: "i-akar-icons-php-fill" },
  { tooltip: "Python", icon: "i-ion-logo-python" },
  { tooltip: "Swift", icon: "i-simple-icons-swift" },
  { tooltip: "Bash", icon: "i-codicon-terminal-bash" },
  { tooltip: "Lua", icon: "i-simple-icons-lua" },
  { tooltip: "Markdown", icon: "i-simple-icons-markdown" },
]

const frameworks: StackItem[] = [
  { tooltip: "Vue", icon: "i-simple-icons-vuedotjs" },
  { tooltip: "Svelte", icon: "i-simple-icons-svelte" },
  { tooltip: "Nuxt", icon: "i-simple-icons-nuxtdotjs" },
  { tooltip: "Spring Boot", icon: "i-simple-icons-spring" },
  { tooltip: "Symfony", icon: "i-simple-icons-symfony" },
  { tooltip: "NestJS", icon: "i-simple-icons-nestjs" },
  { tooltip: "Qt", icon: "i-simple-icons-qt" },
  { tooltip: "Flutter", icon: "i-simple-icons-flutter" },
]

const libraries: StackItem[] = [
  { tooltip: "Node.js", icon: "i-mdi-nodejs" },
  { tooltip: "Vite", icon: "i-file-icons-vite" },
  { tooltip: "Vitest", icon: "i-simple-icons-vitest" },
  { tooltip: "Tailwind", icon: "i-mdi-tailwind" },
  { tooltip: "Bootstrap", icon: "i-ri-bootstrap-fill" },
  { tooltip: "Drizzle", icon: "i-simple-icons-drizzle" },
  { tooltip: "Prisma", icon: "i-simple-icons-prisma" },
  { tooltip: "Supabase", icon: "i-ri-supabase-fill" },
  { tooltip: "PocketBase", icon: "i-simple-icons-pocketbase" },
]

const databases: StackItem[] = [
  { tooltip: "SQLite", icon: "i-simple-icons-sqlite" },
  { tooltip: "Postgres", icon: "i-akar-icons-postgresql-fill" },
  { tooltip: "MySQL", icon: "i-simple-icons-mysql" },
  { tooltip: "Turso", icon: "i-simple-icons-turso" },
]

const etc: StackItem[] = [
  { tooltip: "Docker", icon: "i-simple-icons-docker" },
  { tooltip: "Git", icon: "i-bx-bxl-git" },
  { tooltip: "Figma", icon: "i-ph-figma-logo" },
  { tooltip: "Vercel", icon: "i-akar-icons-vercel-fill" },
]

const mix: StackItem[] = [...frameworks, ...libraries, ...databases, ...etc]
</script>

<template>
  <AboutItem icon="i-heroicons-code-bracket-16-solid">
    <template #header>{{ $t("about.stacks") }}</template>
    <template #content>
      <div class="flex h-full w-full flex-col justify-center space-y-2">
        <AboutStacksCarouselRow direction="backward">
          <AboutStacksCarouselItem
            v-for="language in languages"
            :key="language.tooltip"
            :icon="language.icon"
            :aria="language.tooltip + ' Logo'"
          >
            {{ language.tooltip }}
          </AboutStacksCarouselItem>
        </AboutStacksCarouselRow>
        <AboutStacksCarouselRow direction="forward">
          <AboutStacksCarouselItem
            v-for="m in mix"
            :key="m.tooltip"
            :icon="m.icon"
            :aria="m.tooltip + 'Logo'"
          >
            {{ m.tooltip }}
          </AboutStacksCarouselItem>
        </AboutStacksCarouselRow>
      </div>
    </template>
  </AboutItem>
</template>
