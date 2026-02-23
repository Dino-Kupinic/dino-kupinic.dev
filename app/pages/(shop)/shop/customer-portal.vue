<script setup lang="ts">
import { ref, onMounted } from "vue"

const email = ref("")

onMounted(() => {
  email.value = sessionStorage.getItem("customerEmail") || ""
})

const accessPortal = () => {
  const customerId = sessionStorage.getItem("customerId")
  sessionStorage.setItem("customerEmail", email.value)
  if (customerId)
    window.location.href = `/api/customer-portal?customerId=${customerId}`
  else if (email.value)
    window.location.href = `/api/customer-portal?customerEmail=${email.value}`
  else alert("Please provide an email address to access the portal.")
}
</script>

<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-2xl text-center">
        <h1 class="font-heading text-primary mb-6 text-4xl font-bold">
          Customer Portal
        </h1>
        <p class="text-muted-foreground mb-8 text-xl">
          Access your purchases and manage your account
        </p>
        <div class="bg-card border-border rounded-lg border p-6">
          <form class="space-y-4" @submit.prevent="accessPortal">
            <div>
              <label
                for="email"
                class="text-card-foreground mb-2 block text-sm font-medium"
              >
                Enter your email address
              </label>
              <input
                id="email"
                v-model="email"
                type="email"
                class="border-border focus:ring-ring bg-input text-foreground w-full rounded-lg border px-3 py-2 focus:ring-2 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            <button
              type="submit"
              class="text-primary-foreground hover:bg-primary/90 w-full cursor-pointer rounded-lg bg-gray-200 px-6 py-3 font-medium transition-colors"
            >
              Access Portal
            </button>
          </form>
          <p class="text-muted-foreground mt-4 text-sm">
            You'll be redirected to your secure customer portal
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
