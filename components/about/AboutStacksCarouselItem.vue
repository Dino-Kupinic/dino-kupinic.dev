<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <Icon class="h-14 w-14 fill-foreground pl-3" :name="icon" />
      </TooltipTrigger>
      <TooltipContent>
        <slot />
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
