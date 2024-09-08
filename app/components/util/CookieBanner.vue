<template>
  <Transition name="fade">
    <div
      v-if="isVisible"
      class="fixed bottom-0 left-0 right-0 z-10 flex-col gap-3 border-t border-gray-200 bg-background p-4 md:flex md:px-32"
      role="alert"
      aria-live="polite"
    >
      <div class="mb-4 md:mb-0 md:mr-4">
        <p class="text-sm text-gray-700">
          We use cookies to enhance your browsing experience and analyze our
          traffic. By clicking "Accept All", you consent to our use of cookies.
        </p>
      </div>
      <div
        class="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0"
      >
        <Button
          class="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
          @click="handleAccept"
        >
          Accept All
        </Button>
        <Button
          class="w-full rounded-md border border-input bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80 sm:w-auto"
          @click="handleManagePreferences"
        >
          Customize
        </Button>
        <Button
          class="w-full rounded-md border border-input bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80 sm:w-auto"
          @click="handleManagePreferences"
        >
          Reject Non-Essential
        </Button>
      </div>
      <button
        class="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        aria-label="Close cookie banner"
        @click="closeBanner"
      >
        <XIcon class="h-5 w-5" />
      </button>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from "vue"
import { XIcon } from "lucide-vue-next"

const isVisible = ref(true)

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
