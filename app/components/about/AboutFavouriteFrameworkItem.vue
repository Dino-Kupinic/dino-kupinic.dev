<script setup lang="ts"></script>

<template>
  <AboutItem icon="i-mage-stars-c-fill">
    <template #header>{{ $t("about.framework") }}</template>
    <template #content>
      <div class="flex h-full w-full items-center justify-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <NuxtLink to="https://nuxt.com" external>
                <Icon
                  name="i-simple-icons-nuxtdotjs"
                  class="h-32 w-32"
                  aria-label="Nuxt Logo"
                />
              </NuxtLink>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Nuxt</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </template>
  </AboutItem>
</template>
