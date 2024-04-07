<template>
  <div class="flex flex-col sm:flex-row">
    <div class="sm:border-r sm:pr-12">
      <slot name="main" />
    </div>
    <SideBarContainer>
      <slot name="sidebar" />
    </SideBarContainer>
  </div>
</template>
