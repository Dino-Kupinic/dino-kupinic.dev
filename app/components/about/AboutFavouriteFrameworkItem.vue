<script setup lang="ts"></script>

<template>
  <AboutItem icon="i-heroicons-sparkles">
    <template #header>My Favorite</template>
    <template #content>
      <div class="flex h-full w-full items-center justify-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <NuxtLink
                to="https://bun.sh"
                external
                target="_blank"
                rel="noreferrer"
                aria-label="Bun.sh"
              >
                <Icon
                  name="i-simple-icons-bun"
                  size="128"
                  aria-label="bun.sh"
                />
              </NuxtLink>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Bun.sh</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </template>
  </AboutItem>
</template>
