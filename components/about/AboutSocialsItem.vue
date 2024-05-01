<script setup lang="ts">
const socials = getSocials()
</script>

<template>
  <AboutItem icon="i-heroicons-link-16-solid">
    <template #header>{{ $t("about.socials") }}</template>
    <template #content>
      <div class="flex h-full w-auto items-center justify-center">
        <div class="flex flex-col gap-2">
          <NuxtLink
            v-for="item in socials"
            :key="item.name"
            :to="item.link"
            class="decoration-1 hover:text-primary hover:underline"
            target="_blank"
            rel="noopener"
            external
          >
            <div class="flex w-full items-center space-x-2">
              <Icon :name="item.icon" />
              <span>{{ item.name }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </template>
  </AboutItem>
</template>
