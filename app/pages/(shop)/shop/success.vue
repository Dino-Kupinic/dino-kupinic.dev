<template>
  <section class="pt-4 pb-16">
    <div class="container mx-auto px-4 text-center">
      <div v-if="checkout" class="mx-auto max-w-2xl">
        <!-- Success Icon -->
        <div
          class="bg-accent mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
        >
          <svg
            class="text-accent-foreground h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h1 class="font-heading text-primary mb-4 text-4xl font-bold">
          Purchase Successful!
        </h1>
        <p class="text-muted-foreground mb-8 text-xl">
          Thank you for your purchase. You now have access to:
        </p>
        <!-- Product Details -->
        <div class="bg-card border-border mb-8 rounded-lg border p-6">
          <h2
            class="font-heading text-card-foreground mb-2 text-2xl font-semibold"
          >
            {{ product?.name ?? "Your purchase" }}
          </h2>
          <p v-if="product?.description" class="text-muted-foreground mb-4">
            {{ product.description }}
          </p>
          <div class="text-primary text-lg font-semibold">
            Order ID: {{ checkout.id }}
          </div>
        </div>
        <!-- Action Buttons -->
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
          <NuxtLink
            to="/shop/customer-portal"
            class="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 font-medium transition-colors"
          >
            Access Customer Portal
          </NuxtLink>
          <NuxtLink
            to="/"
            class="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg px-6 py-3 font-medium transition-colors"
          >
            Browse More Products
          </NuxtLink>
        </div>
      </div>
      <div v-else class="mx-auto max-w-md">
        <h1 class="font-heading text-primary mb-4 text-3xl font-bold">
          Invalid Session
        </h1>
        <p class="text-muted-foreground mb-6">
          We couldn't find your purchase details. Please check your email for
          confirmation.
        </p>
        <NuxtLink
          to="/"
          class="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex rounded-lg px-6 py-3 font-medium transition-colors"
        >
          Return to Home
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue"

const route = useRoute()
const checkoutId = computed(() => {
  const value =
    route.query.checkoutId ?? route.query.checkout_id ?? route.query.id
  return Array.isArray(value) ? value[0] : value
})

// This needs to be fetched on the client
const { data } = await useAsyncData(
  () => `checkout-details-${checkoutId.value ?? "missing"}`,
  () =>
    checkoutId.value
      ? $fetch(
          `/api/checkout-details?checkoutId=${encodeURIComponent(checkoutId.value)}`,
        )
      : Promise.resolve({ checkout: null, product: null }),
  {
    server: false,
  },
)

const checkout = computed(() => data.value?.checkout)
const product = computed(() => data.value?.product)

onMounted(() => {
  const countdownElement = document.createElement("p")
  let countdown = 10
  countdownElement.className = "text-sm text-muted-foreground mt-4"
  countdownElement.textContent = `Redirecting to dashboard in ${countdown} seconds...`
  document.querySelector("section > div")?.appendChild(countdownElement)
  const interval = setInterval(() => {
    countdown--
    countdownElement.textContent = `Redirecting to dashboard in ${countdown} seconds...`
    if (countdown <= 0) {
      clearInterval(interval)
      window.location.href = "/"
    }
  }, 1000)
})
</script>
