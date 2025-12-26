<script setup lang="ts">
type ThemeItem = {
  name: string
  value: "dark" | "light"
}

const colorMode = useColorMode()
const selected = ref<string>("")

const themes = ref<ThemeItem[]>([
  {
    name: "Dark",
    value: "dark",
  },
  {
    name: "Light",
    value: "light",
  },
])
const display = ref<string>("")

const currentTheme: ComputedRef<ThemeItem> = computed(() => {
  return themes.value.find(
    (theme: ThemeItem) => theme.value === colorMode.value,
  ) as ThemeItem
})

onMounted(() => {
  if (!colorMode.preference) colorMode.preference = "dark"

  selected.value = currentTheme.value.value
  display.value = currentTheme.value.name
})

watch(selected, () => {
  colorMode.preference = colorMode.value = selected.value
  display.value = currentTheme.value.name
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
          {{ display }}
        </span>
      </SelectValue>
    </SelectTrigger>
    <SelectContent>
      <SelectItem
        v-for="theme in themes"
        :key="theme.name"
        :value="theme.value"
      >
        {{ theme.name }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>
