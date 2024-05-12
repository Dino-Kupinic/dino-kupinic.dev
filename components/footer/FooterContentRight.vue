<script setup lang="ts"></script>

<template>
  <div class="flex h-full w-64 flex-col space-y-3 rounded-lg border p-3">
    <div>
      <p class="font-semibold">
        {{ $t("footer.getInTouch") }}
      </p>
      <p class="text-secondary">I will try to respond as soon as possible</p>
    </div>
    <div>
      <Button variant="gradient" class="w-full">
        <Icon name="i-heroicons-envelope-16-solid" class="mr-2" />
        <p>{{ $t("footer.mail") }}</p>
      </Button>
    </div>
    <div>
      <p class="font-semibold">Local Time</p>
      <div class="h-full w-full rounded-lg border bg-foreground"></div>
    </div>
  </div>
</template>

<style scoped></style>
