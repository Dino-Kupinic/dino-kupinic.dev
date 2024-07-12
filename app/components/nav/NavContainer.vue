<template>
  <nav class="sm:flex sm:justify-center">
    <div
      class="flex h-16 w-full justify-center bg-opacity-10 p-3 backdrop-blur-[20px] sm:h-14"
    >
      <div class="flex w-[1024px] flex-row justify-between">
        <slot />
      </div>
    </div>
  </nav>
</template>
