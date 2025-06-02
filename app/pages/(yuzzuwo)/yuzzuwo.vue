<script setup lang="ts">
import Yzwo from "~/components/yuzzuwo/Yzwo.vue"

definePageMeta({
  layout: "yuzzuwo",
})

const currentYear = new Date().getFullYear()
</script>

<template>
  <GenericLayoutWrapper class="bg-white dark:bg-black">
    <div class="h-auto w-full border">
      <div class="flex items-center justify-between p-4">
        <NuxtLink to="/" class="flex items-center gap-2">
          <span
            class="font-ymono text-xl uppercase decoration-dotted underline-offset-4 hover:underline dark:text-neutral-500"
          >
            <Icon
              name="i-material-symbols-arrow-left-alt-rounded"
              class="mb-1 mr-1"
            />
            back to dino-kupinic.dev
          </span>
        </NuxtLink>
        <div class="w-40">
          <ThemeSelection />
        </div>
      </div>
      <div
        class="flex w-full flex-col justify-center bg-black p-12 sm:flex-row sm:justify-between sm:p-16"
      >
        <Yzwo class="mb-16 h-full w-full sm:mb-0 sm:h-auto sm:w-auto" />
        <div
          class="flex h-auto flex-col justify-between gap-3 border bg-white p-8 dark:bg-black sm:gap-0"
        >
          <HeroSubtitle class="border-b tracking-tighter">Yuzzuwo</HeroSubtitle>
          <p class="font-ymono text-xl uppercase dark:text-neutral-500">
            Open-source tools and experiments by
          </p>
          <div>
            <BlogAuthor avatar-src="https://github.com/Dino-Kupinic.png">
              <BlogAuthorName name="Dino Kupinic" handle="@Dino-Kupinic" />
            </BlogAuthor>
          </div>
          <p
            class="self-end font-ymono text-xl uppercase dark:text-neutral-500"
          >
            EST. 2025;
            <span class="text-red-500">[ALPHA, WORK IN PROGRESS]</span>
          </p>
        </div>
      </div>
    </div>
    <div class="flex h-12 items-center justify-center border-x border-b">
      <p class="font-ymono text-xl uppercase dark:text-neutral-500">
        ///// projects /////
      </p>
    </div>
    <div class="grid w-full grid-cols-1 sm:grid-cols-3">
      <NuxtLink
        to="/project/sniptide"
        class="hover:bg-neutral-100 dark:hover:bg-neutral-900"
      >
        <div class="flex h-96 flex-col justify-between border-x">
          <div class="flex self-end p-4 text-neutral-500">
            <Icon name="i-heroicons-arrow-up-right" />
          </div>
          <div class="flex flex-col gap-1 p-4">
            <p
              class="truncate text-lg font-semibold text-foreground sm:text-lg"
            >
              Sniptide
            </p>
            <p
              class="self-end font-ymono text-xl uppercase dark:text-neutral-500"
            >
              A bold, modern and self-hostable paste platform
            </p>
          </div>
        </div>
      </NuxtLink>
      <div
        class="flex h-96 items-center justify-center border-x border-t sm:border-l-0 sm:border-r sm:border-t-0"
      >
        <p class="font-ymono text-xl uppercase dark:text-neutral-500">404</p>
      </div>
      <div
        class="flex h-96 items-center justify-center border-x border-t sm:border-l-0 sm:border-r sm:border-t-0"
      >
        <p class="font-ymono text-xl uppercase dark:text-neutral-500">404</p>
      </div>
    </div>
    <div class="grid w-full grid-cols-1 sm:grid-cols-3">
      <div
        class="flex h-96 items-center justify-center border-x border-t sm:border-r"
      >
        <p class="font-ymono text-xl uppercase dark:text-neutral-500">404</p>
      </div>
      <div
        class="col-span-2 flex h-96 items-center justify-center border-l border-r border-t sm:border-l-0"
      >
        <div class="flex flex-col gap-3">
          <p class="font-ymono text-xl uppercase dark:text-neutral-500">
            Got a project in mind?
          </p>
          <div class="flex w-auto gap-2 sm:w-96">
            <Input placeholder="Share your idea here" class="w-full" />
            <Button :disabled="true">Send</Button>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[32rem] border">
      <!--      <p class="text-primary dark:text-secondary">-->
      <!--        &copy; {{ currentYear }} Yuzzuwo. All rights reserved.-->
      <!--      </p>-->
    </div>
  </GenericLayoutWrapper>
</template>
