<script setup lang="ts">
const {locale, locales, localeProperties, setLocale} = useI18n()
watch(locale, () => {
  setLocale(locale.value)
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
      <SelectItem v-for="locale in locales" :value="locale.code">
        {{ locale.name }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>
