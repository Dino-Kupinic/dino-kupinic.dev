import { cva } from "class-variance-authority"

export { default as NavigationMenu } from "./NavigationMenu.vue"
export { default as NavigationMenuList } from "./NavigationMenuList.vue"
export { default as NavigationMenuItem } from "./NavigationMenuItem.vue"
export { default as NavigationMenuTrigger } from "./NavigationMenuTrigger.vue"
export { default as NavigationMenuContent } from "./NavigationMenuContent.vue"
export { default as NavigationMenuLink } from "./NavigationMenuLink.vue"

export const navigationMenuTriggerStyle = cva(
  "group inline-flex h-6 w-max items-center justify-center rounded-md px-3 py-2 text-primary dark:text-foreground text-base transition-colors dark:hover:text-ring hover:text-neutral-500 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
)
