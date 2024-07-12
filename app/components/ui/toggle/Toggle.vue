<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue"
import {
  Toggle,
  type ToggleEmits,
  type ToggleProps,
  useForwardPropsEmits,
} from "radix-vue"
import { type ToggleVariants, toggleVariants } from "."
import { cn } from "@/lib/utils"

const props = withDefaults(
  defineProps<
    ToggleProps & {
      class?: HTMLAttributes["class"]
      variant?: ToggleVariants["variant"]
      size?: ToggleVariants["size"]
      showActive?: boolean
    }
  >(),
  {
    variant: "default",
    size: "default",
    disabled: false,
    showActive: true,
  },
)

const emits = defineEmits<ToggleEmits>()

const delegatedProps = computed(() => {
  const { class: _, size, variant, showActive, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <Toggle
    v-bind="forwarded"
    :class="cn(toggleVariants({ variant, size, showActive }), props.class)"
  >
    <slot />
  </Toggle>
</template>
