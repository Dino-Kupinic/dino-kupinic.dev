<script setup lang="ts">
type ThemeItem = {
  name: string
  value: "dark" | "light"
}

const colorMode = useColorMode()
const selected = ref<string>("")

const { t, locale } = useI18n()
const themes = ref<ThemeItem[]>([])
const display = ref<string>("")
watch(
  locale,
  () => {
    themes.value = [
      {
        name: t("theme.dark"),
        value: "dark",
      },
      {
        name: t("theme.light"),
        value: "light",
      },
    ]
    colorMode.value === "dark"
      ? (display.value = t("theme.dark"))
      : (display.value = t("theme.light"))
  },
  { immediate: true },
)

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
  colorMode.value = selected.value
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
