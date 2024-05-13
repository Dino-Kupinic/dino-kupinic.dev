import { cva } from 'class-variance-authority'

export { default as NavigationMenu } from './NavigationMenu.vue'
export { default as NavigationMenuList } from './NavigationMenuList.vue'
export { default as NavigationMenuItem } from './NavigationMenuItem.vue'
export { default as NavigationMenuTrigger } from './NavigationMenuTrigger.vue'
export { default as NavigationMenuContent } from './NavigationMenuContent.vue'
export { default as NavigationMenuLink } from './NavigationMenuLink.vue'

export const navigationMenuTriggerStyle = cva(
  'group inline-flex h-6 w-max items-center justify-center rounded-md bg-background px-3 py-2 text-neutral-500 dark:text-secondary text-base transition-colors dark:hover:text-primary hover:text-accent-foreground focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50',
)
