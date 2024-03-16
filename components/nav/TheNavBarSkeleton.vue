<script setup lang="ts">

</script>

<template>
  <NavContainer>
    <Skeleton class="w-20 h-10 ml-3"></Skeleton>
    <div class="flex gap-3 mr-2">
      <Skeleton class="w-20 h-10"/>
      <Skeleton class="w-16 h-10"/>
      <Skeleton class="w-16 h-10"/>
      <Skeleton class="w-20 h-10"/>
      <div class="flex items-center space-x-3">
        <NavDivider/>
        <Skeleton class="w-10 h-10" />
      </div>
      <Skeleton class="w-24 h-10"/>
    </div>
  </NavContainer>
</template>
