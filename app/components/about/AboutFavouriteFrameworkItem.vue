<script setup lang="ts"></script>

<template>
  <AboutItem icon="i-mage-stars-c-fill">
    <template #header>Favorite Framework</template>
    <template #content>
      <div class="flex h-full w-full items-center justify-center">
        <!--        <TooltipProvider>-->
        <!--          <Tooltip>-->
        <!--            <TooltipTrigger>-->
        <NuxtLink
          to="https://typescriptlang.org"
          external
          target="_blank"
          rel="noreferrer"
        >
          <Icon
            name="i-simple-icons-typescript"
            class="h-32 w-32"
            aria-label="TypeScript Logo"
          />
        </NuxtLink>
        <!--            </TooltipTrigger>-->
        <!--            <TooltipContent side="bottom">-->
        <!--              <p>Nuxt</p>-->
        <!--            </TooltipContent>-->
        <!--          </Tooltip>-->
        <!--        </TooltipProvider>-->
      </div>
    </template>
  </AboutItem>
</template>
