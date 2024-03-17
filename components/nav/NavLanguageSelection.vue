<script setup lang="ts">
const {locale, locales, localeProperties} = useI18n()
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
      <SelectItem v-for="locale in locales" :value="locale.code">
        {{ locale.name }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>
