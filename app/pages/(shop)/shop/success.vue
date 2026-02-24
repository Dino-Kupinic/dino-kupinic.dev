<script setup lang="ts">
const route = useRoute()
const checkoutId = computed(() => {
  const value =
    route.query.checkoutId ?? route.query.checkout_id ?? route.query.id
  return Array.isArray(value) ? value[0] : value
})

const { data, status } = await useAsyncData(
  () => `checkout-details-${checkoutId.value ?? "missing"}`,
  () =>
    checkoutId.value
      ? $fetch(
          `/api/checkout-details?checkoutId=${encodeURIComponent(checkoutId.value)}`,
        )
      : Promise.resolve({ checkout: null, product: null }),
)

const isLoading = computed(
  () =>
    !!checkoutId.value &&
    (status.value === "idle" || status.value === "pending"),
)
const checkout = computed(() => data.value?.checkout)
const product = computed(() => data.value?.product)
</script>

<template>
  <section class="pt-4 pb-16">
    <div class="container mx-auto px-4 text-center">
      <div v-if="isLoading" class="mx-auto max-w-md">
        <h1 class="font-heading text-primary mb-4 text-3xl font-bold">
          Loading Purchase
        </h1>
        <p class="text-muted-foreground">Fetching your checkout details...</p>
      </div>
      <div v-else-if="checkout" class="mx-auto my-16 max-w-2xl sm:my-32">
        <Icon name="i-heroicons-check-circle-solid" size="48" />
        <h1
          class="font-heading text-primary mb-4 text-3xl font-bold sm:text-4xl"
        >
          Purchase Successful!
        </h1>
        <p class="text-muted-foreground mb-8 text-lg sm:text-xl">
          Thank you for your purchase. You now have access to:
        </p>
        <div class="bg-card border-border mb-8 rounded-lg border p-6">
          <h2
            class="font-heading text-card-foreground mb-2 text-2xl font-semibold"
          >
            {{ product?.name ?? "Your purchase" }}
          </h2>
          <p v-if="product?.description" class="text-muted-foreground">
            {{ product.description }}
          </p>
        </div>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
          <NuxtLink
            to="/shop/customer-portal"
            class="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 font-medium transition-colors"
          >
            Access Customer Portal
          </NuxtLink>
          <NuxtLink
            to="/shop"
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
