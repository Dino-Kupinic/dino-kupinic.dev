<script setup lang="ts">
type StackItem = {
  tooltip: string
  icon: string
}

const languages: StackItem[] = [
  { tooltip: "HTML", icon: "i-simple-icons-html5" },
  { tooltip: "CSS", icon: "i-simple-icons-css3" },
  { tooltip: "TypeScript", icon: "i-simple-icons-typescript" },
  { tooltip: "JavaScript", icon: "i-simple-icons-javascript" },
  { tooltip: "C++", icon: "i-simple-icons-cplusplus" },
  { tooltip: "Java", icon: "i-simple-icons-openjdk" },
  { tooltip: "PHP", icon: "i-simple-icons-php" },
  { tooltip: "Python", icon: "i-simple-icons-python" },
  { tooltip: "Swift", icon: "i-simple-icons-swift" },
  { tooltip: "Bash", icon: "i-codicon-terminal-bash" },
  { tooltip: "Markdown", icon: "i-simple-icons-markdown" },
]

const frameworks: StackItem[] = [
  { tooltip: "React", icon: "i-simple-icons-react" },
  { tooltip: "Next", icon: "i-simple-icons-nextdotjs" },
  { tooltip: "Vue", icon: "i-simple-icons-vuedotjs" },
  { tooltip: "Svelte", icon: "i-simple-icons-svelte" },
  { tooltip: "Nuxt", icon: "i-simple-icons-nuxtdotjs" },
  { tooltip: "Spring Boot", icon: "i-simple-icons-spring" },
  { tooltip: "Symfony", icon: "i-simple-icons-symfony" },
  { tooltip: "Express", icon: "i-simple-icons-express" },
  { tooltip: "Bun", icon: "i-simple-icons-bun" },
]

const libraries: StackItem[] = [
  { tooltip: "Node.js", icon: "i-simple-icons-nodedotjs" },
  { tooltip: "Vite", icon: "i-simple-icons-vite" },
  { tooltip: "Vitest", icon: "i-simple-icons-vitest" },
  { tooltip: "Tailwind", icon: "i-simple-icons-tailwindcss" },
  { tooltip: "Drizzle", icon: "i-simple-icons-drizzle" },
  { tooltip: "Prisma", icon: "i-simple-icons-prisma" },
  { tooltip: "Supabase", icon: "i-simple-icons-supabase" },
  { tooltip: "FastAPI", icon: "i-simple-icons-fastapi" },
]

const databases: StackItem[] = [
  { tooltip: "SQLite", icon: "i-simple-icons-sqlite" },
  { tooltip: "Postgres", icon: "i-simple-icons-postgresql" },
  { tooltip: "MySQL", icon: "i-simple-icons-mysql" },
]

const etc: StackItem[] = [
  { tooltip: "Docker", icon: "i-simple-icons-docker" },
  { tooltip: "Git", icon: "i-simple-icons-git" },
  { tooltip: "Figma", icon: "i-ph-figma-logo" },
]

const mix: StackItem[] = [...frameworks, ...libraries, ...databases, ...etc]
</script>

<template>
  <AboutItem icon="i-heroicons-code-bracket-16-solid">
    <template #header>Skills</template>
    <template #content>
      <div class="flex h-full w-full flex-col justify-center space-y-2">
        <AboutStacksCarouselRow
          direction="backward"
          aria-label="Languages Carousel"
        >
          <AboutStacksCarouselItem
            v-for="language in languages"
            :key="language.tooltip"
            :icon="language.icon"
            :aria="language.tooltip + ' Logo'"
          >
            {{ language.tooltip }}
          </AboutStacksCarouselItem>
        </AboutStacksCarouselRow>
        <AboutStacksCarouselRow
          direction="forward"
          aria-label="Frameworks, Libraries, Databases and etc. Carousel"
        >
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
