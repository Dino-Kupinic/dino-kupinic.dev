<script setup lang="ts">
import type { AllConsentNames, PrivacyConsentState } from "c15t"

const consentStore = useNuxtApp().$c15tStore
const state = ref<PrivacyConsentState>(consentStore.getState())

let unsubscribe: (() => void) | undefined

onMounted(() => {
  state.value = consentStore.getState()
  unsubscribe = consentStore.subscribe((nextState) => {
    state.value = nextState
  })
})

onUnmounted(() => {
  unsubscribe?.()
})

const isVisible = computed(() => state.value.showPopup)

const displayedConsents = computed(() => state.value.getDisplayedConsents())

const isDialogOpen = computed({
  get: () => state.value.isPrivacyDialogOpen,
  set: (value: boolean) => {
    state.value.setIsPrivacyDialogOpen(value)
  },
})

const consentTypeContent: Partial<
  Record<AllConsentNames, { title: string; description: string }>
> = {
  necessary: {
    title: "Strictly Necessary",
    description:
      "These cookies are essential for the website to function properly and cannot be disabled.",
  },
  functionality: {
    title: "Functionality",
    description:
      "These cookies enable enhanced functionality and personalization of the website.",
  },
  measurement: {
    title: "Analytics",
    description:
      "These cookies help us understand how visitors use the website and improve performance.",
  },
}

const handleAcceptAll = () => {
  state.value.saveConsents("all")
  state.value.setIsPrivacyDialogOpen(false)
}

const handleRejectAll = () => {
  state.value.saveConsents("necessary")
  state.value.setIsPrivacyDialogOpen(false)
}

const handleSaveCustom = () => {
  state.value.saveConsents("custom")
  state.value.setIsPrivacyDialogOpen(false)
}

const handleUpdateSelectedConsent = (name: AllConsentNames, value: boolean) => {
  state.value.setSelectedConsent(name, value)
}

const handleConsentSwitch = (name: AllConsentNames, value: unknown) => {
  handleUpdateSelectedConsent(name, Boolean(value))
}
</script>

<template>
  <Transition>
    <section
      v-if="isVisible"
      class="bg-background/95 fixed right-0 bottom-0 left-0 z-20 border-t p-4 backdrop-blur"
    >
      <div
        class="bg-card mx-auto flex w-full max-w-6xl flex-col gap-4 rounded-xl border p-5 shadow-sm md:flex-row md:items-end md:justify-between"
      >
        <div class="max-w-3xl">
          <p class="text-foreground mb-1 text-base font-semibold">
            We value your privacy
          </p>
          <p class="text-foreground text-sm">
            This site uses cookies to improve your browsing experience, analyze
            traffic, and improve functionality.
          </p>
          <p class="text-muted-foreground mt-2 text-sm">
            Learn more in our
            <NuxtLink to="/privacy-policy" class="text-blue-500">
              Privacy Policy
            </NuxtLink>
            and
            <NuxtLink to="/cookies" class="text-blue-500"
              >Cookie Policy</NuxtLink
            >.
          </p>
        </div>
        <div class="flex flex-col gap-2 sm:flex-row">
          <Button variant="default" size="sm" @click="handleAcceptAll">
            Accept All
          </Button>
          <Dialog v-model:open="isDialogOpen">
            <DialogTrigger as-child>
              <Button variant="secondary" size="sm" class="w-full sm:w-auto">
                Customize
              </Button>
            </DialogTrigger>
            <DialogContent class="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle>Privacy Settings</DialogTitle>
                <DialogDescription>
                  Choose which cookie categories you want to allow.
                </DialogDescription>
              </DialogHeader>
              <div class="mt-4 grid gap-5">
                <div
                  v-for="consent in displayedConsents"
                  :key="consent.name"
                  class="rounded-lg border p-3"
                >
                  <div class="flex items-center justify-between gap-3">
                    <Label
                      :for="`consent-${consent.name}`"
                      class="flex flex-col items-start space-y-1"
                    >
                      <span class="font-medium">{{
                        consentTypeContent[consent.name]?.title ?? consent.name
                      }}</span>
                      <span
                        class="text-muted-foreground leading-snug font-normal"
                      >
                        {{
                          consentTypeContent[consent.name]?.description ??
                          consent.description
                        }}
                      </span>
                    </Label>
                    <Switch
                      :id="`consent-${consent.name}`"
                      :checked="state.selectedConsents[consent.name]"
                      :disabled="consent.disabled"
                      @update:checked="
                        handleConsentSwitch(consent.name, $event)
                      "
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="default" size="sm" @click="handleSaveCustom">
                  Save Settings
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button variant="secondary" size="sm" @click="handleRejectAll">
            Reject All
          </Button>
        </div>
      </div>
    </section>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
