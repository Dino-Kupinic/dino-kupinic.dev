<script setup lang="ts">
defineProps<{
  icon: string
  aria: string
}>()
</script>

<template>
  <div>
    <!--    <TooltipProvider>-->
    <!--      <Tooltip>-->
    <!--        <TooltipTrigger>-->
    <Icon
      :aria-label="aria"
      class="h-14 w-14 fill-foreground pl-3"
      aria-hidden="false"
      :name="icon"
    />
    <!--        </TooltipTrigger>-->
    <!--        <TooltipContent>-->
    <!--          <slot />-->
    <!--        </TooltipContent>-->
    <!--      </Tooltip>-->
    <!--    </TooltipProvider>-->
  </div>
</template>
