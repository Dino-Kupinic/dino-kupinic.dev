<script setup lang="ts">
type ThemeItem = {
  name: string
  value: "dark" | "light"
}

const colorMode = useColorMode()

const themes = [
  { name: "Dark", value: "dark" },
  { name: "Light", value: "light" },
] as const satisfies readonly ThemeItem[]

const selected = computed({
  get: () => colorMode.preference || "dark",
  set: (value) => {
    colorMode.preference = value
  },
})

const currentTheme = computed(() => {
  return themes.find((theme) => theme.value === colorMode.value) ?? themes[0]
})
</script>

<template>
  <ClientOnly>
    <Select v-model="selected">
      <SelectTrigger class="w-full" size="default">
        <SelectValue class="flex gap-3" aria-label="Theme selection">
          <Icon
            :name="
              colorMode.value === 'dark'
                ? 'i-heroicons-moon-16-solid'
                : 'i-heroicons-sun-16-solid'
            "
            size="16"
          />
          <span class="pl-0.5 text-base" aria-label="Theme name">
            {{ currentTheme.name }}
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          v-for="theme in themes"
          :key="theme.value"
          :value="theme.value"
        >
          {{ theme.name }}
        </SelectItem>
      </SelectContent>
    </Select>
    <template #fallback>
      <Skeleton class="h-10 w-full" />
    </template>
  </ClientOnly>
</template>
