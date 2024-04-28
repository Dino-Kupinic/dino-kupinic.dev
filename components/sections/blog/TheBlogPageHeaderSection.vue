<script setup lang="ts">
const route = useRoute()
const title = ref<string>("")

const { t } = useI18n()
watch(
  () => route.params.text,
  (newText) => {
    if (newText !== undefined) {
      const text = newText as string
      title.value = text.charAt(0).toUpperCase() + text.slice(1)
    } else {
      title.value = t("blog.pageTitle")
    }
  },
  { immediate: true },
)
</script>

<template>
  <section
    class="my-4 rounded-lg border bg-background px-4 pb-3 pt-6 sm:my-12 sm:space-y-3"
  >
    <div
      class="mb-2 flex flex-col items-center justify-between space-y-3 sm:mb-6 sm:flex-row sm:space-y-0"
    >
      <SectionHeading class="w-full text-left" size="md">
        {{ title }}
      </SectionHeading>
      <BlogSearch />
    </div>
    <BlogCategories class="py-2" />
  </section>
</template>
