<script setup lang="ts">
import type { TocLink } from "@nuxt/content"

defineProps<{
  links: TocLink[]
}>()

const scrollToHeading = (event: MouseEvent, id: string) => {
  const target = document.getElementById(id)
  if (!target) return

  event.preventDefault()
  history.replaceState(null, "", `#${id}`)

  target.scrollIntoView({
    behavior: "smooth",
    block: "center",
  })
}
</script>

<template>
  <div>
    <p class="text-lg font-semibold">Table of Contents</p>
    <ul class="mt-3 space-y-1">
      <li v-for="link in links" :key="link.id">
        <a
          class="hover:text-foreground dark:hover:text-foreground block w-full truncate text-sm leading-6 text-neutral-500 transition-colors dark:text-neutral-500"
          :href="`#${link.id}`"
          @click.prevent="(event) => scrollToHeading(event, link.id)"
        >
          {{ link.text }}
        </a>

        <ul v-if="link.children?.length" class="mt-1 space-y-1">
          <li v-for="child in link.children" :key="child.id">
            <a
              class="hover:text-foreground dark:hover:text-foreground block w-full truncate pl-3 text-sm leading-6 text-neutral-500 transition-colors dark:text-neutral-500"
              :href="`#${child.id}`"
              @click.prevent="(event) => scrollToHeading(event, child.id)"
            >
              {{ child.text }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
