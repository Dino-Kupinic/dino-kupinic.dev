<script setup lang="ts">
const isVisible = ref(false)
const analyticalCookies = ref(true)

if (import.meta.client) {
  const value = localStorage.getItem("va-disable")
  isVisible.value = value === null
}

const handleAccept = () => {
  localStorage.setItem("va-disable", "false")
  isVisible.value = false
}

const handleReject = () => {
  analyticalCookies.value = false
  handleManagePreferences()
}

const handleManagePreferences = () => {
  if (!analyticalCookies.value) {
    localStorage.setItem("va-disable", "true")
  } else {
    localStorage.setItem("va-disable", "false")
  }
  closeBanner()
}

const closeBanner = () => {
  isVisible.value = false
}
</script>

<template>
  <Transition>
    <div
      v-if="isVisible"
      class="bg-background fixed right-0 bottom-0 left-0 z-10 flex w-full flex-col justify-center gap-3 border-t p-4"
    >
      <div class="m-auto max-w-5xl space-y-4">
        <div class="mr-12 mb-4 md:mr-4 md:mb-0">
          <p class="text-foreground text-sm">
            We use cookies to enhance your browsing experience and analyze our
            traffic. By clicking "Accept All", you consent to our use of
            cookies. Read more in our
            <NuxtLink to="/cookies" class="text-blue-500"
              >Cookie Policy</NuxtLink
            >. You may change your preferences at any time in the
            <NuxtLink to="/cookies" class="text-blue-500">Cookies</NuxtLink>
            page.
          </p>
          <p class="mt-2 text-sm italic">
            You see this due to EU regulations (GDPR) and compliance with
            privacy laws
          </p>
        </div>
        <div
          class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
        >
          <Button variant="default" size="sm" @click="handleAccept">
            Accept All
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button variant="secondary" size="sm" class="w-full sm:w-auto">
                Customize
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Preferences</DialogTitle>
                <DialogDescription>
                  Make changes to your cookie preferences here.
                </DialogDescription>
              </DialogHeader>
              <div class="mt-4 grid gap-6">
                <div class="flex items-center justify-between space-x-2">
                  <Label for="necessary" class="flex flex-col space-y-1">
                    <span>Strictly Necessary</span>
                    <span
                      class="text-muted-foreground leading-snug font-normal"
                    >
                      These cookies are essential in order to use the website
                      and use its features.
                    </span>
                  </Label>
                  <Switch id="necessary" default-checked disabled />
                </div>
                <div class="flex items-center justify-between space-x-2">
                  <Label for="functional" class="flex flex-col space-y-1">
                    <span>Analytical Cookies</span>
                    <span
                      class="text-muted-foreground leading-snug font-normal"
                    >
                      These cookies allow the website to collect information on
                      how it is used.
                    </span>
                  </Label>
                  <Switch id="functional" v-model:checked="analyticalCookies" />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="default"
                  size="sm"
                  @click="handleManagePreferences"
                >
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button variant="secondary" size="sm" @click="handleReject">
            Reject Non-Essential
          </Button>
        </div>
        <button
          class="absolute top-1 right-3 text-gray-500 hover:text-gray-700"
          @click="closeBanner"
        >
          <Icon name="i-heroicons-x-mark" />
        </button>
      </div>
    </div>
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
