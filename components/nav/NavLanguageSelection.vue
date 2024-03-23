<script setup lang="ts">
const { locale, locales, localeProperties } = useI18n()
const localeCookie = useCookie("locale")

watch(locale, () => {
  localeCookie.value = locale.value
})
</script>

<template>
  <Select v-model="locale">
    <SelectTrigger>
      <SelectValue>
        {{ localeProperties.name }}
      </SelectValue>
    </SelectTrigger>
    <SelectContent>
      <SelectItem v-for="loc in locales" :key="loc.code" :value="loc.code">
        {{ loc.name }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>
