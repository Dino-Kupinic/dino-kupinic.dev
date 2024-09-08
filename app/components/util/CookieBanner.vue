<script setup lang="ts">
const isVisible = ref<boolean>(true)

const handleAccept = () => {
  // Here you would typically set a cookie or local storage item
  // to remember the user's choice
  console.log("Cookies accepted")

  isVisible.value = false
}

const handleManagePreferences = () => {
  // Here you would typically open a modal or navigate to a page
  // where users can manage their cookie preferences
  console.log("Manage preferences clicked")
}

const closeBanner = () => {
  isVisible.value = false
}
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isVisible"
      class="fixed bottom-0 left-0 right-0 z-10 flex w-full flex-col justify-center gap-3 border-t bg-background p-4"
      role="alert"
      aria-live="polite"
    >
      <div class="m-auto max-w-[1024px] space-y-4">
        <div class="mb-4 mr-12 md:mb-0 md:mr-4">
          <p class="text-sm text-foreground">
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
            You see this because of EU regulations (GDPR) and compliance with
            privacy laws
          </p>
        </div>
        <div
          class="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0"
        >
          <Button variant="default" size="sm" @click="handleAccept">
            Accept All
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button
                variant="secondary"
                size="sm"
                class="w-full sm:w-auto"
                @click="handleManagePreferences"
              >
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
              <DialogFooter>
                <Button variant="default" size="sm"> Save changes </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button
            variant="destructive"
            size="sm"
            @click="handleManagePreferences"
          >
            Reject Non-Essential
          </Button>
        </div>
        <button
          class="absolute right-3 top-1 text-gray-500 hover:text-gray-700"
          aria-label="Close cookie banner"
          @click="closeBanner"
        >
          <Icon name="i-heroicons-x-mark" />
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
