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
  <Select v-model="selected">
    <SelectTrigger>
      <SelectValue>
        <Icon
          v-if="colorMode.value === 'dark'"
          name="i-heroicons-moon-16-solid"
        />
        <Icon v-else name="i-heroicons-sun-16-solid" />
        <span class="ml-3">
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
</template>
