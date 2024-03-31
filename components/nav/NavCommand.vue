<script setup lang="ts">
const { isMacOS } = useDevice()
const open = ref<boolean>(false)

const { Meta_J, Ctrl_J } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === "j" && (e.metaKey || e.ctrlKey)) e.preventDefault()
  },
})

watch([Meta_J, Ctrl_J], (v) => {
  if (v[0] || v[1]) handleOpenChange()
})

function handleOpenChange() {
  open.value = !open.value
}

const viewport = useViewport()
</script>

<template>
  <div>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            variant="outline"
            :size="viewport.isGreaterThan('mobileWide') ? 'icon' : 'default'"
            aria-label="Search Button"
            @click="handleOpenChange"
          >
            <Icon name="i-mi-search" />
            <span v-if="viewport.isLessThan('tablet')" class="ml-2"
              >Search</span
            >
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <strong>{{ $t("nav.search") }}</strong>
          <p class="text-sm text-muted-foreground">
            {{ $t("nav.searchPress") }}
            <kbd
              class="font-mono pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground opacity-100"
            >
              <span v-if="isMacOS" class="text-xs">⌘ + </span>
              <span v-else class="text-2xs">CTRL + </span>J
            </kbd>
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <CommandDialog v-model:open="open">
      <DialogTitle />
      <DialogDescription />
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem value="calendar"> Calendar </CommandItem>
          <CommandItem value="search-emoji"> Search Emoji </CommandItem>
          <CommandItem value="calculator"> Calculator </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem value="profile"> Profile </CommandItem>
          <CommandItem value="billing"> Billing </CommandItem>
          <CommandItem value="settings"> Settings </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  </div>
</template>
