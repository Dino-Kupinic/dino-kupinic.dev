<template>
  <NavigationMenuItem>
    <slot name="main">
      <NavigationMenuTrigger>
        <slot name="trigger"/>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <slot name="content"/>
      </NavigationMenuContent>
    </slot>
  </NavigationMenuItem>
</template>

