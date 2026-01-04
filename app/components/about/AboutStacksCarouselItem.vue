<script setup lang="ts">
defineProps<{
  icon: string
  aria: string
}>()
</script>

<template>
  <div class="pl-2.5">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Icon :aria-label="aria" size="48" aria-hidden="false" :name="icon" />
        </TooltipTrigger>
        <TooltipContent>
          <slot />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
</template>
