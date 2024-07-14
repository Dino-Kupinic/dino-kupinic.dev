<script setup lang="ts">
const email = ref<string>("")
function subscribe() {
  console.log(email.value)
}
</script>

<template>
  <div
    class="flex h-3/4 w-full flex-col justify-between space-y-4 rounded-lg border p-3 sm:w-64"
  >
    <div>
      <p class="font-semibold">{{ $t("newsletter.title") }}</p>
      <p class="text-primary dark:text-secondary">
        {{ $t("newsletter.description") }}
      </p>
    </div>
    <div>
      <Input
        v-model="email"
        :placeholder="$t('newsletter.form.email')"
        class="w-full"
        disabled
      />
      <Button class="mt-2 w-full" variant="gradient" @click="subscribe">
        {{ $t("newsletter.form.submit") }}
      </Button>
    </div>
  </div>
</template>
