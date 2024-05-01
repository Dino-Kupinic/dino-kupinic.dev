<script setup lang="ts">
const { locale, locales, localeProperties } = useI18n()
const localeCookie = useCookie("locale")

watch(locale, () => {
  localeCookie.value = locale.value
})
</script>

<template>
  <div>
    <Select v-model="locale" aria-label="Language Selection">
      <SelectTrigger aria-label="Language Selection Button" class="mr-3">
        <SelectValue>
          {{ localeProperties.name }}
        </SelectValue>
      </SelectTrigger>
      <SelectContent aria-label="Language Selection Content">
        <SelectItem v-for="loc in locales" :key="loc.code" :value="loc.code">
          {{ loc.name }}
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
