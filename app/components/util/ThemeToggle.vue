<script setup lang="ts">
const selected = ref<boolean>(false)
const colorMode = useColorMode()

onMounted(() => {
  if (!colorMode.preference) colorMode.preference = "dark"

  const currentMode = colorMode.value
  selected.value = currentMode === "dark"
})

watch(selected, () => {
  colorMode.preference = selected.value ? "dark" : "light"
})
</script>

<template>
  <Toggle
    v-model:pressed="selected"
    :show-active="false"
    size="sm"
    :aria-label="$t('aria.toggle-theme')"
  >
    <Icon v-if="selected" name="i-heroicons-moon-16-solid" />
    <Icon v-else name="i-heroicons-sun-16-solid" />
  </Toggle>
</template>
